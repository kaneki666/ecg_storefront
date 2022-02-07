import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import WelcomeNavBar from "../../components/common/WelcomeNavBar";
import NavbarMiddle from "../../components/common/NavbarMiddle";
import StickyFooter from "../../components/common/StickyFooter";
import ScrollToTop from "../../components/common/ScrollToTop";
import MobileMenu from "../../components/common/MobileMenu";
import ProductQuickView from "../../components/landing/ProductQuickView";
import Footer from "../../components/common/Footer";
import HeaderBottom from "../../components/common/HeaderBottom";
import PageHeader from "../../components/wishlist/PageHeader";
import BreadcrumbWishlist from "../../components/wishlist/BreadcrumbWishlist";
import PageContent from "../../components/wishlist/PageContent";
import PageFooter from "../../components/wishlist/PageFooter";

const wishlist_props = [
  {
    image: "/images/vendor/dokan/2.jpg",
    title: "Vendor 2",
    price: "5",
    stock_status: "London, United Kingdom (UK)",
  },
  {
    image: "/images/vendor/dokan/2.jpg",
    title: "Vendor 2",
    price: "5",
    stock_status: "London, United Kingdom (UK)",
  },
  {
    image: "/images/vendor/dokan/2.jpg",
    title: "Vendor 2",
    price: "5",
    stock_status: "London, United Kingdom (UK)",
  },
];

const index: NextPage = () => {
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
          <main className="main wishlist-page">
            <PageHeader />
            <BreadcrumbWishlist/>
            <div className="page-content">
              <div className="container">
                <PageContent wishlist_props={wishlist_props}/>
                <PageFooter/>
              </div>
            </div>
          </main>
          <Footer />
          <StickyFooter />
        </div>

        <ScrollToTop />
        <MobileMenu />
        <ProductQuickView />
      </body>
    </div>
  );
};

export default index;
