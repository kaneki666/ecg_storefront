export interface userLoginProps {
  status: boolean;
  data: UserDataProps;
}

export interface UserDataProps {
  user_id: number;
  email: string;
  access_token: string;
  refresh_token: string;
}

export interface AuthRootStateType {
  userInfo: UserDataProps | null;
  isLoggedIn: boolean;
}

export interface RootAppStateProps {
  AuthReducer: AuthRootStateType;
}
