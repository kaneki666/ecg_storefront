import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutBreadcrumb from "../../components/checkout/CheckoutBreadcrumb";
import CheckoutContent from "../../components/checkout/CheckoutContent";
import CouponToggle from "../../components/checkout/CouponToggle";
import LoginToggle from "../../components/checkout/LoginToggle";
import Footer from "../../components/common/Footer";
import HeaderBottom from "../../components/common/HeaderBottom";
import MobileMenu from "../../components/common/MobileMenu";
import NavbarMiddle from "../../components/common/NavbarMiddle";
import ScrollToTop from "../../components/common/ScrollToTop";
import StickyFooter from "../../components/common/StickyFooter";
import WelcomeNavBar from "../../components/common/WelcomeNavBar";
import { CategoriesProps, CouponProps } from "../../utils/types/landingpage";
import { RootAppStateProps } from "../../utils/types/reduxTypes";
import { API_BASE_URL } from "../api/hello";

const CheckoutPage: NextPage = ({
  categoriesData,
  couponData
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { isLoggedIn } = useSelector(
    (state: RootAppStateProps) => state.AuthReducer
  );
  
  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" href="/css/style.min.css" />
      </Head>

      <body>
        <div className="page-wrapper">
          <header className="header header-border">
            <WelcomeNavBar />
            <NavbarMiddle />
            <HeaderBottom data={categoriesData} />
          </header>
          <main className="main checkout">
            <CheckoutBreadcrumb />
            <div className="page-content">
              <div className="container">
                {!isLoggedIn && <LoginToggle />}
                <CouponToggle couponData={couponData}/>
                <CheckoutContent />
              </div>
            </div>
          </main>
          <Footer />
          <StickyFooter />
        </div>

        <ScrollToTop />
        <MobileMenu data={categoriesData} />
      </body>
    </div>
  );
};

export default CheckoutPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${API_BASE_URL}/product-all-category-list/`);
  const categoriesData: CategoriesProps[] = await res.json();
  const resCoupon = await fetch(`${API_BASE_URL}/active-coupon/`);
  const couponData: CouponProps[] = await resCoupon.json();

  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }
  if (resCoupon.status !== 200) {
    return {
      notFound: true,
    };
  }

  return {
    props: { categoriesData , couponData }, // will be passed to the page component as props
  };
};
