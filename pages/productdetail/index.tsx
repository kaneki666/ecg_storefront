import Head from "next/head";
import React from "react";
import NavbarMiddle from "../../components/landing/NavbarMiddle";
import WelcomeNavBar from "../../components/landing/WelcomeNavBar";
import BoughtTogether from "../../components/productdetail/BoughtTogether";
import BreadCrumb from "../../components/productdetail/BreadCrumb";
import HeaderBottom from "../../components/productdetail/HeaderBottom";
import PhotoSwiper from "../../components/productdetail/PhotoSwiper";
import ProductDetailsTab from "../../components/productdetail/ProductDetailsTab";
import ProductSingle from "../../components/productdetail/ProductSingle";

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
            {/* <HeaderBottom /> */}
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
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </div>
  );
};

export default index;
