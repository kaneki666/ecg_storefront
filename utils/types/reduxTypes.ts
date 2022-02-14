import { SingleProductProps } from "./landingpage";

export interface UserLoginProps {
  status: boolean;
  data: UserDataProps;
}

export interface UserDataProps {
  user_id: number;
  email: string;
  access_token: string;
  refresh_token: string;
}

export interface CartItemProps {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export interface AuthRootStateType {
  userInfo: UserLoginProps | null;
  isLoggedIn: boolean;
}

export interface QickViewStateProps {
  product: SingleProductProps | null;
  cart: CartItemProps[];
}

export interface RootAppStateProps {
  AuthReducer: AuthRootStateType;
  ProductReducer: QickViewStateProps;
}

export interface userSignupProps {
  status: boolean;
  data: UserDataProps;
}
