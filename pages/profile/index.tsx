import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/common/BreadCrumb";
import Footer from "../../components/common/Footer";
import HeaderBottom from "../../components/common/HeaderBottom";
import MobileMenu from "../../components/common/MobileMenu";
import NavbarMiddle from "../../components/common/NavbarMiddle";
import PageHeaderTitle from "../../components/common/PageHeaderTitle";
import ScrollToTop from "../../components/common/ScrollToTop";
import StickyFooter from "../../components/common/StickyFooter";
import WelcomeNavBar from "../../components/common/WelcomeNavBar";
import ProductQuickView from "../../components/common/ProductQuickView";
import ProfileContent from "../../components/profile/ProfileContent";
import { CategoriesProps } from "../../utils/types/landingpage";
import { API_BASE_URL } from "../api/hello";

import { RootAppStateProps } from "../../utils/types/reduxTypes";
import { GetUserInfoProps } from "../../utils/types/types";
import { useSelector } from "react-redux";

const Index: NextPage = ({
  categoriesData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { isLoggedIn, userInfo } = useSelector(
    (state: RootAppStateProps) => state.AuthReducer
  );
  const [userInfos, setUserInfos] = useState<GetUserInfoProps | null>(null);

  const getuserInfo = async () => {
    if (isLoggedIn === true) {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        `Bearer ${userInfo?.data.access_token}`
      );

      fetch("https://ecomapi.mwebservices.co/api/customer-profile/", {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      })
        .then(async (response) => {
          const r: GetUserInfoProps = await response.json();
          setUserInfos(r);
        })
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
  };
  useEffect(() => {
    getuserInfo();
  }, []);
  console.log(userInfos);

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
            <PageHeaderTitle title="My Profile" />
            <BreadCrumb title="My Account" hrefTitle="Home" toPage="/" />
            <div className="page-content pt-2">
              <div className="container">
                {userInfos && <ProfileContent userInfos={userInfos} />}
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

export default Index;

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
