import type { NextPage } from "next";
import BoxIcons from "../components/landing/BoxIcons";
import CategoryBanner from "../components/landing/CategoryBanner";
import DealsOfTheDay from "../components/landing/DealsOfTheDay";
import FooterLanding from "../components/landing/FooterLanding";
import HeaderBottom from "../components/landing/HeaderBottom";
import MobileMenu from "../components/landing/MobileMenu";
import NavbarMiddle from "../components/landing/NavbarMiddle";
import NewsLetterPopup from "../components/landing/NewsLetterPopup";
import PopUpLanding from "../components/landing/PopUpLanding";
import ProductQuickView from "../components/landing/ProductQuickView";
import ProductsContainer from "../components/landing/ProductsContainer";
import ScrollToTop from "../components/landing/ScrollToTop";
import Sliderlanidng from "../components/landing/Sliderlanidng";
import StickyFooterLanding from "../components/landing/StickyFooterLanding";
import TopCategoriesOfMonth from "../components/landing/TopCategoriesOfMonth";
import WelcomeNavBar from "../components/landing/WelcomeNavBar";

const Home: NextPage = () => {
  return (
    <body className="home">
      <div className="page-wrapper">
        <header className="header">
          <WelcomeNavBar />
          <NavbarMiddle />
          <HeaderBottom />
        </header>
        <main className="main">
          <Sliderlanidng />
          <div className="container">
            <BoxIcons />
            <CategoryBanner />
            <DealsOfTheDay />
            <TopCategoriesOfMonth />
            <ProductsContainer />
          </div>
          <PopUpLanding />
        </main>
        <FooterLanding />
      </div>
      <StickyFooterLanding />
      <ScrollToTop />
      <MobileMenu />
      {/* <NewsLetterPopup /> */}
      <ProductQuickView />
    </body>
  );
};

export default Home;
