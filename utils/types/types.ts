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