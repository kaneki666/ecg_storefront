import { saveUserinfoAction, logoutAction } from "./../../store/user/actions";
import { RootAppStateProps } from "./../types/reduxTypes";
import { API_BASE_URL } from "./../../pages/api/hello";

import axios from "axios";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

const useAxios = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, userInfo } = useSelector(
    (state: RootAppStateProps) => state.AuthReducer
  );

  const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: isLoggedIn
      ? {
          Authorization: `Bearer ${userInfo?.data.access_token}`,
        }
      : {
          "Content-Type": "application/json",
        },
  });

  if (isLoggedIn) {
    axiosInstance.interceptors.request.use(async (req) => {
      const user: any = jwt_decode(
        userInfo?.data.refresh_token ? userInfo?.data.refresh_token : ""
      );

      const unixNow = Math.round(new Date().getTime() / 1000);
      const isExpired = unixNow > user.exp;

      if (!isExpired) return req;

      axios
        .post(`${API_BASE_URL}/token/refresh/`, {
          refresh: userInfo?.data.refresh_token,
        })
        .then((response) => {
          if (userInfo !== null) {
            userInfo.data.refresh_token = response.data.access_token;
            dispatch(saveUserinfoAction(userInfo));
            if (req.headers) {
              req.headers.Authorization = `Bearer ${response.data.access_token}`;
              return req;
            }
          }
        })
        .catch((err) => {
          if (err.response) {
            dispatch(logoutAction(true));
          } else if (err.request) {
            dispatch(logoutAction(true));
          } else {
            dispatch(logoutAction(true));
          }
        });
    });
  }

  return axiosInstance;
};

export default useAxios;
