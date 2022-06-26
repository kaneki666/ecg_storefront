import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { logoutAction } from "../../store/user/actions";
import { RootAppStateProps } from "../../utils/types/reduxTypes";

const WelcomeNavBar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(
    (state: RootAppStateProps) => state.AuthReducer
  );
  const logoutHandler = () => {
    dispatch(logoutAction(false));

    toast(`Logout successful!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="header-top">
      <div className="container">
        <div className="header-left">
          <p className="welcome-msg">WELCOME TO Miaki STORE</p>
        </div>
        <div className="header-right">
          <a href="/contactus" className="d-lg-show">
            Contact Us
          </a>
          {!isLoggedIn && (
            <>
              <a href="/login" className="d-lg-show">
                <i className="w-icon-account"></i>Sign In
              </a>
              <span className="delimiter d-lg-show">/</span>
              <a href="/login" className="d-lg-show">
                Register
              </a>
            </>
          )}

          {isLoggedIn && (
            <>
              <a href="/profile" className="d-lg-show">
                My Account
              </a>
              <a onClick={logoutHandler} className="d-lg-show">
                Logout
              </a>
            </>
          )}
        </div>
      </div>
      <ToastContainer containerId="an id" draggable={false} />
    </div>
  );
};

export default WelcomeNavBar;
