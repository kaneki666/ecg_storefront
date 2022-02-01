import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import SingleStore from "../../components/storelist/SingleStore";
import SearchFilter from "../../components/storelist/SearchFilter";

import HeaderBottom from "../../components/landing/HeaderBottom";
import WelcomeNavBar from "../../components/common/WelcomeNavBar";
import NavbarMiddle from "../../components/common/NavbarMiddle";
import StickyFooter from "../../components/common/StickyFooter";
import ScrollToTop from "../../components/common/ScrollToTop";
import MobileMenu from "../../components/common/MobileMenu";
import ProductQuickView from "../../components/landing/ProductQuickView";
import Footer from "../../components/common/Footer";
import BreadCrumb from "../../components/storelist/BreadCrumb";

const store_props = [
  {
    banner_image: "/images/vendor/dokan/2.jpg",
    brand_image: "/images/vendor/brand/2.jpg",
    title: "Vendor 2",
    rating: "5",
    address: "London, United Kingdom (UK)",
    store_url: "vendor-dokan-store.html",
  },
  {
    banner_image: "/images/vendor/dokan/1.jpg",
    brand_image: "/images/vendor/brand/1.jpg",
    title: "Vendor 1",
    rating: "5",
    address: "London",
    store_url: "vendor-dokan-store.html",
  },
  {
    banner_image: "/images/vendor/dokan/3.jpg",
    brand_image: "/images/vendor/brand/3.jpg",
    title: "Vendor 3",
    rating: "5",
    address: "United Kingdom (UK)",
    store_url: "vendor-dokan-store.html",
  },
];

const StoreList: NextPage = () => {
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
          <main className="main">
            <BreadCrumb />
            <div className="page-content mb-10 pb-2">
              <div className="container">
                <SearchFilter />
                <ul>
                  {store_props.map((item, index) => (
                    <SingleStore
                      key={index}
                      banner_image={item.banner_image}
                      brand_image={item.brand_image}
                      title={item.title}
                      rating={item.rating}
                      address={item.address}
                      store_url={item.store_url}
                    />
                  ))}
                </ul>
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

export default StoreList;
