import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import React from "react";
import Footer from "../../components/common/Footer";
import HeaderBottom from "../../components/common/HeaderBottom";
import MobileMenu from "../../components/common/MobileMenu";
import NavbarMiddle from "../../components/common/NavbarMiddle";
import PageHeaderTitle from "../../components/common/PageHeaderTitle";
import ScrollToTop from "../../components/common/ScrollToTop";
import StickyFooter from "../../components/common/StickyFooter";
import WelcomeNavBar from "../../components/common/WelcomeNavBar";
import ProductQuickView from "../../components/common/ProductQuickView";
import BreadCrumb from "../../components/common/BreadCrumb";
import ContactUsContent from "../../components/contactus/ContactUsContent";
import { CategoriesProps } from "../../utils/types/landingpage";
import { API_BASE_URL } from "../api/hello";
import Breadcrumb from "../../components/order/Breadcrumb";
import OrderHeader from "../../components/order/OrderHeader";
import OrderView from "../../components/order/OrderView";
import OrderDetails from "../../components/order/OrderDetails";
import SubOrders from "../../components/order/SubOrders";
import AccountAddress from "../../components/order/AccountAddress";

const index: NextPage = ({
  categoriesData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" href="/css/style.min.css" />
      </Head>
      <body className="my-account">
        <div className="page-wrapper">
          <header className="header">
            <WelcomeNavBar />
            <NavbarMiddle />
            <HeaderBottom data={categoriesData} />
          </header>
          <main className="main order">
            <Breadcrumb />
            <div className="page-content mb-10 pb-2">
              <div className="container">
                <OrderHeader />
                <OrderView />
                <OrderDetails />
                <SubOrders />
                <AccountAddress />
                <a
                  href="#"
                  className="btn btn-dark btn-rounded btn-icon-left btn-back mt-6"
                >
                  <i className="w-icon-long-arrow-left"></i>Back To List
                </a>
              </div>
            </div>
          </main>
          <Footer />
          <StickyFooter />
        </div>
        <ScrollToTop />
        <ProductQuickView />
        <MobileMenu data={categoriesData} />
      </body>
    </div>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${API_BASE_URL}/mega-menu-data/`);
  const categoriesData: CategoriesProps[] = await res.json();

  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }

  return {
    props: { categoriesData }, // will be passed to the page component as props
  };
};
