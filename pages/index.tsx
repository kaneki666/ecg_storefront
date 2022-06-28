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
import ProductQuickView from "../components/common/ProductQuickView";
import ProductsContainer from "../components/landing/ProductsContainer";
import ScrollToTop from "../components/common/ScrollToTop";
import Sliderlanidng from "../components/landing/Sliderlanidng";
import StickyFooterLanding from "../components/common/StickyFooter";
import TopCategoriesOfMonth from "../components/landing/TopCategoriesOfMonth";
import WelcomeNavBar from "../components/common/WelcomeNavBar";
import HeaderBottom from "../components/common/HeaderBottom";
import { API_BASE_URL } from "./api/hello";
import { useDispatch, useSelector } from "react-redux";
import { RootAppStateProps } from "../utils/types/reduxTypes";

const Home: NextPage = ({
  categoriesData,
  data,
  clothingData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector(
    (state: RootAppStateProps) => state.ProductReducer
  );

  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" href="/css/demo1.min.css" />
        <title>Miaki Shop</title>

        <meta
          name="keywords"
          content="Miaki Shop ecommerce multi vendor platform"
        />
        <meta
          name="description"
          content="Miaki Shop is a powerful marketplace &amp; ecommerce responsive Html5 Template."
        />
        <meta name="author" content="Miaki"></meta>
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
              <DealsOfTheDay data={data} />
              <TopCategoriesOfMonth />
              <ProductsContainer productList={data} clothingData={[]} />
            </div>
            <PopUpLanding />
          </main>
          <FooterLanding />
        </div>
        <StickyFooterLanding />
        <ScrollToTop />
        <MobileMenu data={categoriesData} />
        <ProductQuickView />
      </body>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [cateGoriesRes, dataRes, clothingRes] = await Promise.all([
    fetch(`${API_BASE_URL}/mega-menu-data/`),
    fetch(`${API_BASE_URL}/home-data/`),
    fetch(`${API_BASE_URL}/product-list-by-category/4/`),
  ]);
  const [categoriesData, data, clothingData] = await Promise.all([
    cateGoriesRes.json(),
    dataRes.json(),
    [],
  ]);
  return { props: { categoriesData, data, clothingData } };
};
