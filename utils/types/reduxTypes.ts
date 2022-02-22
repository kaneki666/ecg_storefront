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
  currency: CurrencyProps;
}

export interface ProductCartReducerStateProps {
  product: SingleProductProps | null;
  cart: CartItemProps[];
  totalPrice: number;
  usedCoupon: boolean;
}

export interface RootAppStateProps {
  AuthReducer: AuthRootStateType;
  ProductReducer: ProductCartReducerStateProps;
}

export interface userSignupProps {
  status: boolean;
  data: UserDataProps;
}

export interface CurrencyProps {
  id: number;
  currency_name: String;
  currency_rate: number;
  currency_symbol: String;
  is_default: boolean;
}
