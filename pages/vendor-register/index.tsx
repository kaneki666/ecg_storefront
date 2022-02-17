import Head from "next/head";
import React from "react";
import NavbarMiddle from "../../components/common/NavbarMiddle";
import WelcomeNavBar from "../../components/common/WelcomeNavBar";
import FooterLanding from "../../components/common/Footer";
import MobileMenu from "../../components/common/MobileMenu";
import ProductQuickView from "../../components/common/ProductQuickView";
import ScrollToTop from "../../components/common/ScrollToTop";
import StickyFooterLanding from "../../components/common/StickyFooter";

import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import HeaderBottom from "../../components/common/HeaderBottom";
import { API_BASE_URL } from "../api/hello";
import { CategoriesProps } from "../../utils/types/landingpage";
import PageHeader from "../../components/vendor-register/PageHeader";
import CreateStore from "../../components/vendor-register/CreateStore";
import Trade from "../../components/vendor-register/Trade";
import Container from "../../components/vendor-register/Container";
import Stories from "../../components/vendor-register/Stories";
import QA from "../../components/vendor-register/QA";
import Footer from "../../components/vendor-register/Footer";
import Breadcrumb from "../../components/vendor-register/Breadcrumb";

const index: NextPage = ({
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
            <PageHeader/>
            <Breadcrumb/>
            <div className="page-content become-a-vendor">
                <div className="container create-store pb-1 pb-lg-10 mb-10">
                <CreateStore/>
                </div>
                <div className="bg-grey how-trade pt-10 pb-5 pb-lg-10">
                    <div className="container mt-2 mt-lg-10 mb-0 mb-lg-10">
                        <Trade/>
                    </div>
                </div>
                <Container/>
                <div className="bg-grey pt-2 pt-lg-10 wolmart-sellers pb-10">
                    <div className="container mt-0 mt-lg-10 mb-2 mb-lg-9">
                        <Stories/>
                    </div>
                </div>
                <QA/>
                <Footer/>
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
  const res = await fetch(`${API_BASE_URL}/product-all-category-list/`);
  const categoriesData: CategoriesProps[] = await res.json();

  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }

  return {
    props: { categoriesData },
  };
};
