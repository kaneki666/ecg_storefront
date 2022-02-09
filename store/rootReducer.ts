import { combineReducers } from "redux";
import { RootAppStateProps } from "../utils/reduxTypes";
import { AuthReducer } from "./user/auth_reducer";

export const combinedReducer = combineReducers<RootAppStateProps>({
  AuthReducer: AuthReducer,
});
