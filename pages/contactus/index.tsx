import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Footer from "../../components/common/Footer";
import HeaderBottom from "../../components/common/HeaderBottom";
import MobileMenu from "../../components/common/MobileMenu";
import NavbarMiddle from "../../components/common/NavbarMiddle";
import PageHeaderTitle from "../../components/common/PageHeaderTitle";
import ScrollToTop from "../../components/common/ScrollToTop";
import StickyFooter from "../../components/common/StickyFooter";
import WelcomeNavBar from "../../components/common/WelcomeNavBar";
import ProductQuickView from "../../components/landing/ProductQuickView";
import BreadCrumb from "../../components/common/BreadCrumb";
import ContactUsContent from "../../components/contactus/ContactUsContent";

const index: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" href="/css/style.min.css" />
      </Head>
      <body className="my-account">
        <div className="page-wrapper">
          <header className="header">
            <WelcomeNavBar />
            <NavbarMiddle />
            <HeaderBottom />
          </header>
          <main className="main">
            <PageHeaderTitle title="Contact Us" />
            <BreadCrumb title="Contact Us" hrefTitle="Home" toPage="/" />
            <ContactUsContent />
          </main>
          <Footer />
          <StickyFooter />
        </div>
        <ScrollToTop />
        <ProductQuickView />
        <MobileMenu />
      </body>
    </div>
  );
};

export default index;
