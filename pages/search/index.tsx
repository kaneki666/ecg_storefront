import React, { useEffect, useState } from "react";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { API_BASE_URL } from "../api/hello";
import { useRouter } from "next/router";
import Head from "next/head";
import WelcomeNavBar from "../../components/common/WelcomeNavBar";
import NavbarMiddle from "../../components/common/NavbarMiddle";
import HeaderBottom from "../../components/common/HeaderBottom";
import { CategoriesProps, SingleProductProps } from "../../utils/types/landingpage";
import FooterLanding from "../../components/common/Footer";
import StickyFooterLanding from "../../components/common/StickyFooter";
import ScrollToTop from "../../components/common/ScrollToTop";
import ProductQuickView from "../../components/common/ProductQuickView";
import MobileMenu from "../../components/common/MobileMenu";
import ProductsContainer from "../../components/landing/ProductsContainer";
import SearchContainer from "../../components/search/SearchContainer";
import useAxios from "../../utils/helperFucntion/useAxios";



const Index: NextPage = ({
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
            <NavbarMiddle data={categoriesData} />
            <HeaderBottom data={categoriesData} />
          </header>
          <main className="main login-page token-main">
            <div>
              <SearchContainer />
            </div>
          </main>
          <FooterLanding />
          <StickyFooterLanding />
        </div>
        <ScrollToTop />
        <ProductQuickView />
        <MobileMenu data={categoriesData} />
      </body>
    </div>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${API_BASE_URL}/mega-menu-data/`);
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

