import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import BreadCrumbCart from "../../components/cart/BreadCrumbCart";
import SideBarCart from "../../components/cart/SideBarCart";
import TableCart from "../../components/cart/TableCart";
import TableCartFooter from "../../components/cart/TableCartFooter";
import Footer from "../../components/common/Footer";
import HeaderBottom from "../../components/common/HeaderBottom";
import MobileMenu from "../../components/common/MobileMenu";
import NavbarMiddle from "../../components/common/NavbarMiddle";
import ScrollToTop from "../../components/common/ScrollToTop";
import StickyFooter from "../../components/common/StickyFooter";
import WelcomeNavBar from "../../components/common/WelcomeNavBar";

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
            {/* <HeaderBottom /> */}
          </header>
          <main className="main cart">
            <BreadCrumbCart />
            <div className="page-content">
              <div className="container">
                <div className="row gutter-lg mb-10">
                  <div className="col-lg-8 pr-lg-4 mb-6">
                    <TableCart />
                    <TableCartFooter/>
                  </div>
                  <SideBarCart />
                </div>
              </div>
            </div>
          </main>
          <Footer />
          <StickyFooter />
        </div>

        <ScrollToTop />
        <MobileMenu />
      </body>
    </div>
  );
};

export default index;
