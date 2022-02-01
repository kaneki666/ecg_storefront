import Head from "next/head";
import React from "react";
import NavbarMiddle from "../../components/common/NavbarMiddle";
import WelcomeNavBar from "../../components/common/WelcomeNavBar";
import FooterLanding from "../../components/common/Footer";
import MobileMenu from "../../components/common/MobileMenu";
import ProductQuickView from "../../components/landing/ProductQuickView";
import ScrollToTop from "../../components/common/ScrollToTop";
import StickyFooterLanding from "../../components/common/StickyFooter";
import BoughtTogether from "../../components/productdetail/BoughtTogether";
import BreadCrumb from "../../components/productdetail/BreadCrumb";
import HeaderBottom from "../../components/landing/HeaderBottom";
import MoreProductsLike from "../../components/productdetail/MoreProductsLike";
import PhotoSwiper from "../../components/productdetail/PhotoSwiper";
import ProductDetailsTab from "../../components/productdetail/ProductDetailsTab";
import ProductSingle from "../../components/productdetail/ProductSingle";
import Sidebar from "../../components/productdetail/Sidebar";
import VendorProducts from "../../components/productdetail/VendorProducts";

const index = () => {
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
            <HeaderBottom />
          </header>
          <main className="main mb-10 pb-1">
            <BreadCrumb />
            <div className="page-content">
              <div className="container">
                <div className="row gutter-lg">
                  <div className="main-content">
                    <ProductSingle />
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
