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

export interface VendorDataProps {
  user_id: number;
  email: string;
  first_name: string;
  last_name: string;
  organization_name: string;
  vendor_status: string;
  nid: string;
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

export interface CouponItem {
  status: string;
  amount: number;
  coupon_id: number;
}

export interface AuthRootStateType {
  userInfo: UserLoginProps | null;
  isLoggedIn: boolean;
  currency: CurrencyProps;
}

export interface ProductCartReducerStateProps {
  product: SingleProductProps | null;
  // comparelist?: SingleProductProps[] | null;
  cart: CartItemProps[];
  wishlist?: SingleProductProps[] | null;
  recentProducts: SingleProductProps[];
  compareProducts?: SingleProductProps[] | null;
  totalPrice: number;
  usedCoupon: boolean;
  coupon?: null | CouponItem;
}

export interface RootAppStateProps {
  AuthReducer: AuthRootStateType;
  ProductReducer: ProductCartReducerStateProps;
}

export interface userSignupProps {
  status: boolean;
  data: UserDataProps;
}

export interface vendorSignupProps {
  status: boolean;
  data: VendorDataProps;
}
export interface CurrencyProps {
  id: number;
  currency_name: String;
  currency_rate: number;
  currency_symbol: String;
  is_default: boolean;
}
