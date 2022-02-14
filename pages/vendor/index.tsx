import Head from "next/head";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React from "react";
import MainContent from "../../components/vendor/MainContent";
import Sidebar from "../../components/vendor/Sidebar";
import StoreBanner from "../../components/vendor/StoreBanner";
import Footer from "../../components/common/Footer";
import StickyFooter from "../../components/common/StickyFooter";
import ScrollToTop from "../../components/common/ScrollToTop";
import MobileMenu from "../../components/common/MobileMenu";
import ProductQuickView from "../../components/common/ProductQuickView";
import WelcomeNavBar from "../../components/common/WelcomeNavBar";
import NavbarMiddle from "../../components/common/NavbarMiddle";
import { CategoriesProps } from "../../utils/types/landingpage";
import { API_BASE_URL } from "../api/hello";
import HeaderBottom from "../../components/common/HeaderBottom";

const index = ({
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
          <main className="main">
            <nav className="breadcrumb-nav">
              <div className="container">
                <ul className="breadcrumb bb-no">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="vendor">Vendor</a>
                  </li>
                  <li>
                    <a href="#">WCFM</a>
                  </li>
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
                    <Sidebar />
                  </aside>
                  <div className="main-content">
                    <MainContent />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${API_BASE_URL}/product-all-category-list/`);
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
