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
import ProductQuickView from "../../components/landing/ProductQuickView";
import Footer from "../../components/common/Footer";
import HeaderBottom from "../../components/common/HeaderBottom";
import PageHeader from "../../components/wishlist/PageHeader";
import BreadcrumbWishlist from "../../components/wishlist/BreadcrumbWishlist";
import PageContent from "../../components/wishlist/PageContent";
import PageFooter from "../../components/wishlist/PageFooter";
import CompareHeader from "../../components/compare/CompareHeader";
import BreadcrumbCompare from "../../components/compare/BreadcrumbCompare";
import CompareContent from "../../components/compare/CompareContent";
import { CategoriesProps } from "../../utils/types/landingpage";
import { API_BASE_URL } from "../api/hello";

const compare_props = [
  {
    image: "/images/products/elements/1.jpg",
    title: "Electronics Black Wrist Watch",
    price: "$40.00",
    size:"Medium, Small",
    color:["#ff0000","#00ff00","#0000ff","#ECEC23"],
    meta:"MS46891355",
    category:"Watches",
    rating:"5",
    reviews:"(3 Reviews)",
    description:"<li>Ultrices eros in cursus turpis massa cursus mattis.</li><li>Volutpat ac tincidunt vitae semper quis lectus.</li><li>Aliquam id diam maecenas ultricies mi eget mauris.</li>",
    availability:"In stock",
    brand:"Apple",

  },
  {
    image: "/images/products/elements/2.jpg",
    title: "Summer Sport Shoes",
    price: "$86.00",
    size:"Large, Medium",
    color:["#ff0000","#00ff00","#0000ff","#ECEC23"],
    meta:"MS46891341",
    category:"Shoes",
    rating:"3",
    reviews:"(8 Reviews)",
    description:"<li>Ultrices eros in cursus turpis massa cursus mattis.</li><li>Volutpat ac tincidunt vitae semper quis lectus.</li><li>Aliquam id diam maecenas ultricies mi eget mauris.</li>",
    availability:"In stock",
    brand:"Apple",
  },
  {
    image: "/images/products/elements/3.jpg",
    title: "Charming Design Watch",
    price: "$30.00",
    size:"Small",
    color:["#ff0000","#00ff00","#0000ff","#ECEC23"],
    meta:"MS46891344",
    category:"Watches",
    rating:"5",
    reviews:"(5 Reviews)",
    description:"<li>Ultrices eros in cursus turpis massa cursus mattis.</li><li>Volutpat ac tincidunt vitae semper quis lectus.</li><li>Aliquam id diam maecenas ultricies mi eget mauris.</li>",
    availability:"In stock",
    brand:"Apple",
  },
];

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
            <CompareHeader />
            <BreadcrumbCompare/>
              <CompareContent compare_props={compare_props}/>
          </main>
          <Footer />
          <StickyFooter />
        </div>

        <ScrollToTop />
        <MobileMenu />
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