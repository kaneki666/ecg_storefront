import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import BoxIcons from "../components/landing/BoxIcons";
import CategoryBanner from "../components/landing/CategoryBanner";
import DealsOfTheDay from "../components/landing/DealsOfTheDay";
import FooterLanding from "../components/common/Footer";

import MobileMenu from "../components/common/MobileMenu";
import NavbarMiddle from "../components/common/NavbarMiddle";
import PopUpLanding from "../components/landing/PopUpLanding";
import ProductQuickView from "../components/landing/ProductQuickView";
import ProductsContainer from "../components/landing/ProductsContainer";
import ScrollToTop from "../components/common/ScrollToTop";
import Sliderlanidng from "../components/landing/Sliderlanidng";
import StickyFooterLanding from "../components/common/StickyFooter";
import TopCategoriesOfMonth from "../components/landing/TopCategoriesOfMonth";
import WelcomeNavBar from "../components/common/WelcomeNavBar";
import HeaderBottom from "../components/common/HeaderBottom";
import { API_BASE_URL } from "./api/hello";
import { CategoriesProps } from "../utils/types/landingpage";

const Home: NextPage = ({
  categoriesData,
  productList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" href="/css/demo1.min.css" />
      </Head>
      <body className="home">
        <div className="page-wrapper">
          <header className="header">
            <WelcomeNavBar />
            <NavbarMiddle />
            <HeaderBottom data={categoriesData} />
          </header>
          <main className="main">
            <Sliderlanidng />
            <div className="container">
              <BoxIcons />
              <CategoryBanner />
              <DealsOfTheDay />
              <TopCategoriesOfMonth />
              <ProductsContainer productList={productList} />
            </div>
            <PopUpLanding />
          </main>
          <FooterLanding />
        </div>
        <StickyFooterLanding />
        <ScrollToTop />
        <MobileMenu />
        <ProductQuickView />
      </body>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [cateGoriesRes, productListRes] = await Promise.all([
    fetch(`${API_BASE_URL}/product-all-category-list/`),
    fetch(`${API_BASE_URL}/product-list/`),
  ]);
  const [categoriesData, productList] = await Promise.all([
    cateGoriesRes.json(),
    productListRes.json(),
  ]);
  return { props: { categoriesData, productList } };
};
