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
import BreadCrumb from "../../components/productdetail/BreadCrumb";

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
import { API_BASE_URL } from "../api/hello";

const index: NextPage = ({
  categoriesData,
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Head>
        <link
          rel="preload stylesheet"
          type="text/css"
          href="/css/style.min.css"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <div className="page-wrapper">
          <header className="header header-border">
            <WelcomeNavBar />
            <NavbarMiddle />
            <HeaderBottom data={categoriesData} />
          </header>
          <main className="main mb-10 pb-1">
            <BreadCrumb />
            <div className="page-content">
              <div className="container">
                <div className="row gutter-lg">
                  <div className="main-content">
                    <PhotoSwiper />
                    <ProductSingle product={product} />
                    <BoughtTogether />
                    <ProductDetailsTab />
                    <VendorProducts />
                    <MoreProductsLike />
                  </div>
                  <Sidebar />
                </div>
              </div>
            </div>
          </main>
          <FooterLanding />
          <StickyFooterLanding />
        </div>
        <ScrollToTop />
        <ProductQuickView />
        <MobileMenu />
      </body>
    </div>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.slug;

  const [cateGoriesRes, productRes, currencyListRes] = await Promise.all([
    fetch(`${API_BASE_URL}/product-all-category-list/`),
    fetch(`${API_BASE_URL}/product-details/${slug}/`),
    fetch(`${API_BASE_URL}/currency-list/`),
  ]);
  const [categoriesData, product, currencyList] = await Promise.all([
    cateGoriesRes.json(),
    productRes.json(),
    currencyListRes.json(),
  ]);
  return { props: { categoriesData, product, currencyList } };
};
