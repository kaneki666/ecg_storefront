import Head from "next/head";
import React from "react";
import SingleStore from "../../components/storelist/SingleStore";
import SearchFilter from "../../components/storelist/SearchFilter";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

import WelcomeNavBar from "../../components/common/WelcomeNavBar";
import NavbarMiddle from "../../components/common/NavbarMiddle";
import StickyFooter from "../../components/common/StickyFooter";
import ScrollToTop from "../../components/common/ScrollToTop";
import MobileMenu from "../../components/common/MobileMenu";
import ProductQuickView from "../../components/common/ProductQuickView";
import Footer from "../../components/common/Footer";
import BreadCrumb from "../../components/storelist/BreadCrumb";
import HeaderBottom from "../../components/common/HeaderBottom";
import { CategoriesProps } from "../../utils/types/landingpage";
import { API_BASE_URL } from "../api/hello";

const store_props = [
  {
    banner_image: "/images/vendor/dokan/2.jpg",
    brand_image: "/images/vendor/brand/2.jpg",
    title: "Vendor 2",
    rating: "5",
    address: "London, United Kingdom (UK)",
    store_url: "#",
  },
  {
    banner_image: "/images/vendor/dokan/1.jpg",
    brand_image: "/images/vendor/brand/1.jpg",
    title: "Vendor 1",
    rating: "5",
    address: "London",
    store_url: "#",
  },
  {
    banner_image: "/images/vendor/dokan/3.jpg",
    brand_image: "/images/vendor/brand/3.jpg",
    title: "Vendor 3",
    rating: "5",
    address: "United Kingdom (UK)",
    store_url: "#",
  },
];

const StoreList: NextPage = ({
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
            <BreadCrumb />
            <div className="page-content mb-10 pb-2">
              <div className="container">
                <SearchFilter />
                <ul>
                  {store_props.map((item, index) => (
                    <SingleStore
                      key={index}
                      banner_image={item.banner_image}
                      brand_image={item.brand_image}
                      title={item.title}
                      rating={item.rating}
                      address={item.address}
                      store_url={item.store_url}
                    />
                  ))}
                </ul>
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

export default StoreList;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${API_BASE_URL}/mega-menu-data/`);
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
