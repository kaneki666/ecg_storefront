import { AnyAction } from "redux";
import { AuthRootStateType, CouponItem } from "../../utils/types/reduxTypes";
import {
  ADD_COUPON_LIST,
  INITILIZE_COPUON,
  LOGIN_ACTION,
  LOGOUT_ACTION,
  SAVE_CURRENCY_ACTION,
  SAVE_USERINFO_ACTION,
} from "./type";

const initialState: AuthRootStateType = {
  isLoggedIn: false,
  userInfo: null,
  currency: {
    id: 1,
    currency_name: "BDT",
    currency_symbol: "BDT",
    currency_rate: 1.0,
    is_default: true,
  },
};

export const AuthReducer = (
  state = initialState,

  action: AnyAction
): AuthRootStateType => {
  switch (action.type) {
    case LOGIN_ACTION:
      return { ...state, isLoggedIn: action.payload };
    case SAVE_USERINFO_ACTION:
      return { ...state, userInfo: action.payload };
    case LOGOUT_ACTION:
      return { ...state, isLoggedIn: action.payload, userInfo: null };
    case SAVE_CURRENCY_ACTION:
      return { ...state, currency: action.payload };

    default:
      return state;
  }
};
