import type { NextPage } from "next";
import HeaderBottom from "../components/landing/HeaderBottom";
import NavbarMiddle from "../components/landing/NavbarMiddle";
import Sliderlanidng from "../components/landing/Sliderlanidng";
import WelcomeNavBar from "../components/landing/WelcomeNavBar";

const Home: NextPage = () => {
  return (
    <div className="page-wrapper">
      <header className="header">
        <WelcomeNavBar />
        <NavbarMiddle />
        <HeaderBottom />
      </header>
      <main className="main">
        <Sliderlanidng />
      </main>
    </div>
  );
};

export default Home;
