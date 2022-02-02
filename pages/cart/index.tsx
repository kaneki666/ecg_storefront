import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import BreadCrumbCart from "../../components/cart/BreadCrumbCart";
import SideBarCart from "../../components/cart/SideBarCart";
import TableCart from "../../components/cart/tableCart";
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

                    <div className="cart-action mb-6">
                      <a
                        href="#"
                        className="btn btn-dark btn-rounded btn-icon-left btn-shopping mr-auto"
                      >
                        <i className="w-icon-long-arrow-left"></i>Continue
                        Shopping
                      </a>
                      <button
                        type="submit"
                        className="btn btn-rounded btn-default btn-clear"
                        name="clear_cart"
                        value="Clear Cart"
                      >
                        Clear Cart
                      </button>
                      <button
                        type="submit"
                        className="btn btn-rounded btn-update disabled"
                        name="update_cart"
                        value="Update Cart"
                      >
                        Update Cart
                      </button>
                    </div>

                    <form className="coupon">
                      <h5 className="title coupon-title font-weight-bold text-uppercase">
                        Coupon Discount
                      </h5>
                      <input
                        type="text"
                        className="form-control mb-4"
                        placeholder="Enter coupon code here..."
                        required
                      />
                      <button className="btn btn-dark btn-outline btn-rounded">
                        Apply Coupon
                      </button>
                    </form>
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
