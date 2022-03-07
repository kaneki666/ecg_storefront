import Head from "next/head";
import React from "react";
import NavbarMiddle from "../../components/common/NavbarMiddle";
import WelcomeNavBar from "../../components/common/WelcomeNavBar";
import FooterLanding from "../../components/common/Footer";
import MobileMenu from "../../components/common/MobileMenu";
import ProductQuickView from "../../components/common/ProductQuickView";
import ScrollToTop from "../../components/common/ScrollToTop";
import StickyFooterLanding from "../../components/common/StickyFooter";
import BoughtTogether from "../../components/productdetail/BoughtTogether";
import BreadCrumb from "../../components/common/BreadCrumb";

import MoreProductsLike from "../../components/productdetail/MoreProductsLike";
import PhotoSwiper from "../../components/productdetail/PhotoSwiper";
import ProductDetailsTab from "../../components/productdetail/ProductDetailsTab";
import ProductSingle from "../../components/productdetail/ProductSingle";
import Sidebar from "../../components/productdetail/Sidebar";
import VendorProducts from "../../components/productdetail/VendorProducts";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import HeaderBottom from "../../components/common/HeaderBottom";
import PageHeader from "../../components/login/PageHeader";

import PageContent from "../../components/login/PageContent";
import { API_BASE_URL } from "../api/hello";
import { CategoriesProps } from "../../utils/types/landingpage";

const index: NextPage = ({
  categoriesData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
          <main className="main login-page">
            <PageHeader />
            <BreadCrumb title="Login" hrefTitle="Home" toPage="/" />
            <PageContent />
          </main>
          <FooterLanding />
          <StickyFooterLanding />
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
  const res = await fetch(`${API_BASE_URL}/product-all-category-list/`);
  const categoriesData: CategoriesProps[] = await res.json();

  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }

  return {
    props: { categoriesData },
  };
};
