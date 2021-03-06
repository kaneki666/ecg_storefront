import { CouponItem } from "./../../utils/types/reduxTypes";
import {
  CurrencyProps,
  UserLoginProps,
  userSignupProps,
  vendorSignupProps,
} from "../../utils/types/reduxTypes";
import {
  LOGIN_ACTION,
  LOGOUT_ACTION,
  SAVE_CURRENCY_ACTION,
  SAVE_USERINFO_ACTION,
  SIGNUP_ACTION,
} from "./type";

export const logoutAction = (value: boolean) => {
  return (dispatch: (arg0: { type: string; payload: boolean }) => void) => {
    dispatch({
      type: LOGOUT_ACTION,
      payload: value,
    });
  };
};

export const signupAction = (value: boolean) => {
  return (dispatch: (arg0: { type: string; payload: boolean }) => void) => {
    dispatch({
      type: SIGNUP_ACTION,
      payload: value,
    });
  };
};

export const saveUserinfo1Action = (userinfo: userSignupProps) => {
  return (
    dispatch: (arg0: { type: string; payload: userSignupProps }) => void
  ) => {
    dispatch({
      type: SAVE_USERINFO_ACTION,
      payload: userinfo,
    });
  };
};

export const saveVendorinfoAction = (userinfo: vendorSignupProps) => {
  return (
    dispatch: (arg0: { type: string; payload: vendorSignupProps }) => void
  ) => {
    dispatch({
      type: SAVE_USERINFO_ACTION,
      payload: userinfo,
    });
  };
};

export const saveUserCurrencyAction = (currency: CurrencyProps) => {
  return (
    dispatch: (arg0: { type: string; payload: CurrencyProps }) => void
  ) => {
    dispatch({
      type: SAVE_CURRENCY_ACTION,
      payload: currency,
    });
  };
};
