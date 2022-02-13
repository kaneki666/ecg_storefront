import Head from "next/head";
import React from "react";
import MainContent from "../../components/vendor/MainContent";
import Sidebar from "../../components/vendor/Sidebar";
import StoreBanner from "../../components/vendor/StoreBanner";
import Footer from "../../components/common/Footer";
import StickyFooter from "../../components/common/StickyFooter";
import ScrollToTop from "../../components/common/ScrollToTop";
import MobileMenu from "../../components/common/MobileMenu";
import ProductQuickView from "../../components/landing/ProductQuickView";
import WelcomeNavBar from "../../components/common/WelcomeNavBar";
import NavbarMiddle from "../../components/common/NavbarMiddle";

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
                  <main className="main">
                  <nav className="breadcrumb-nav">
                    <div className="container">
                        <ul className="breadcrumb bb-no">
                            <li><a href="/">Home</a></li>
                            <li><a href="vendor">Vendor</a></li>
                            <li><a href="#">WCFM</a></li>
                            <li>Store</li>
                        </ul>
                    </div>
                  </nav>
                    <div className="page-content mb-8">
                          <div className="container">
                              <StoreBanner
                                  key={index}
                                  banner_image="/images/vendor/wcfm/1.jpg"
                                  brand_image="/images/vendor/brand/2-100x100.png"
                                  title="Vendor 1"
                                  rating="5"
                                  address="Street1, Street2, Great Area, California, United States (US), 92090El
                                  Carjon,"
                                  email="wc@vendor.com"
                                  phone_number="0(800)123-456"
                                  />
                              <div className="row gutter-lg">
                                  <aside className="sidebar left-sidebar vendor-sidebar sticky-sidebar-wrapper sidebar-fixed">
                                      <Sidebar/>
                                  </aside>
                                  <div className="main-content">
                                  <MainContent/>
                                  </div>
                              </div>
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
