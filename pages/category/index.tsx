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

const CategoryPage: NextPage = ({
  categoriesData,
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const products = data.results;

  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" href="/css/style.min.css" />
      </Head>
      <body className="my-account">
        <div className="page-wrapper">
          <header className="header">
            <WelcomeNavBar />
            <NavbarMiddle data={categoriesData}/>
            <HeaderBottom data={categoriesData} />
          </header>
          <main className="main">
            <BreadcrumbCategory />
            <div className="page-content">
              <div className="container">
                {/* <ShopBanner /> */}
                <ShopBrands />
                <ShopCategory />
                <div className="shop-content row gutter-lg mb-10">
                  <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
                    <ShopSideBar categoriesData={categoriesData} />
                  </aside>

                  <div className="main-content">
                    <Filter />
                    <MainContent products={products} />
                    {products.lengtg > 0 && <Pagination products={products} />}
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
        <MobileMenu data={categoriesData} />
      </body>
    </div>
  );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id, type } = context.query;

  const [cateGoriesRes, dataRes] = await Promise.all([
    fetch(`${API_BASE_URL}/mega-menu-data/`),
    fetch(
      `${API_BASE_URL}/${
        type === "cate"
          ? `product-list-by-category/${id}`
          : type === "sub"
          ? `product-list-by-sub-category/${id}`
          : type === "child"
          ? `product-list-by-sub-sub-category/${id}`
          : "product-list/"
      }`
    ),
  ]);

  const [categoriesData, data] = await Promise.all([
    cateGoriesRes.json(),
    dataRes.json(),
  ]);

  if (cateGoriesRes.status !== 200 || dataRes.status !== 200) {
    return {
      notFound: true,
    };
  }

  return {
    props: { categoriesData, data }, // will be passed to the page component as props
  };
};
