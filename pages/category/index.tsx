import type {
    GetServerSideProps,
    InferGetServerSidePropsType,
    NextPage,
  } from "next";
  import Head from "next/head";
  import React from "react";
  import Footer from "../../components/common/Footer";
  import HeaderBottom from "../../components/common/HeaderBottom";
  import MobileMenu from "../../components/common/MobileMenu";
  import NavbarMiddle from "../../components/common/NavbarMiddle";
  import ScrollToTop from "../../components/common/ScrollToTop";
  import StickyFooter from "../../components/common/StickyFooter";
  import WelcomeNavBar from "../../components/common/WelcomeNavBar";
  import ProductQuickView from "../../components/common/ProductQuickView";
  import { CategoriesProps } from "../../utils/types/landingpage";
  import { API_BASE_URL } from "../api/hello";
import BreadcrumbCategory from "../../components/category/BreadcrumbCategory";
import ShopBanner from "../../components/category/ShopBanner";
import ShopBrands from "../../components/category/ShopBrands";
import ShopCategory from "../../components/category/ShopCategory";
import Filter from "../../components/category/Filter";
import ShopSideBar from "../../components/category/ShopSideBar";
import MainContent from "../../components/category/MainContent";
import Pagination from "../../components/category/Pagination";
  
  const index: NextPage = ({
    categoriesData,
  }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
              <HeaderBottom data={categoriesData} />
            </header>
            <main className="main">
                <BreadcrumbCategory/>
                <div className="page-content">
                    <div className="container">
                        <ShopBanner/>
                        <ShopBrands/>
                        <ShopCategory/>
                        <div className="shop-content row gutter-lg mb-10">
                        
                        <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
                            <ShopSideBar/>        
                        </aside>
                    
                        <div className="main-content">
                            <Filter/>
                            <MainContent/>
                            <Pagination/>
                        </div>
                    </div>
                    </div>
                </div>
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
  