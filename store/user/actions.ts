import { userLoginProps } from "../../utils/types/reduxTypes";
import { LOGIN_ACTION, LOGOUT_ACTION, SAVE_USERINFO_ACTION } from "./type";

export const loginAction = (value: boolean) => {
  return (dispatch: (arg0: { type: string; payload: boolean }) => void) => {
    dispatch({
      type: LOGIN_ACTION,
      payload: value,
    });
  };
};

export const saveUserinfoAction = (userinfo: userLoginProps) => {
  return (
    dispatch: (arg0: { type: string; payload: userLoginProps }) => void
  ) => {
    dispatch({
      type: SAVE_USERINFO_ACTION,
      payload: userinfo,
    });
  };
};

export const logoutAction = (value: boolean) => {
  return (dispatch: (arg0: { type: string; payload: boolean }) => void) => {
    dispatch({
      type: LOGOUT_ACTION,
      payload: value,
    });
  };
};
