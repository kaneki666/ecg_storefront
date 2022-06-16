import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import React from "react";

import WelcomeNavBar from "../../components/common/WelcomeNavBar";
import NavbarMiddle from "../../components/common/NavbarMiddle";
import StickyFooter from "../../components/common/StickyFooter";
import ScrollToTop from "../../components/common/ScrollToTop";
import MobileMenu from "../../components/common/MobileMenu";
import ProductQuickView from "../../components/common/ProductQuickView";
import Footer from "../../components/common/Footer";
import HeaderBottom from "../../components/common/HeaderBottom";
import PageHeader from "../../components/wishlist/PageHeader";
import BreadcrumbWishlist from "../../components/wishlist/BreadcrumbWishlist";
import PageContent from "../../components/wishlist/PageContent";
import PageFooter from "../../components/wishlist/PageFooter";
import { CategoriesProps } from "../../utils/types/landingpage";
import { API_BASE_URL } from "../api/hello";

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
          <main className="main wishlist-page">
            <PageHeader />
            <BreadcrumbWishlist />
            <div className="page-content">
              <div className="container">
                <PageContent />
                <PageFooter />
              </div>
            </div>
          </main>
          <Footer />
          <StickyFooter />
        </div>

        <ScrollToTop />
        <MobileMenu data={categoriesData} />
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
