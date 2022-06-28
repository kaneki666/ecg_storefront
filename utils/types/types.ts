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
  organization_name: string;
  vendor_status: string;
  nid: string;
}

export interface GetUserInfoProps {
  id: number;
  user: User;
  phone: string;
  address: string;
  birth_date: Date;
  gender: string;
  gender_display_value: string;
}

export interface User {
  first_name: string;
  last_name: string;
  email: string;
}

export interface UserUpdateProps {
  first_name: string;
  last_name: string;
  email: string;

  phone: string;
  address: string;
  birth_date: string;
  gender: string;
}
