//breadcrums props

export interface BreadCrumbProps {
  title: string;
  hrefTitle: string;
  toPage: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface SignupProps {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  // shop_name: string;
  // shop_url: string;
  // phone_number: string;
}

export interface SubscribeProps {
  email: string;
}