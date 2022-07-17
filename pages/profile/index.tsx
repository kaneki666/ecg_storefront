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
import useAxios from "../../utils/helperFucntion/useAxios";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const ProfilePage: NextPage = ({
  categoriesData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const axiosInstance = useAxios();
  const router = useRouter();
  const { isLoggedIn } = useSelector(
    (state: RootAppStateProps) => state.AuthReducer
  );
  const [userInfos, setUserInfos] = useState<GetUserInfoProps | null>(null);

  const getuserInfo = async () => {
    const response = await axiosInstance.get(`/customer-profile/`);
    if (response.status === 200) {
      setUserInfos(response.data);
    }
  };
  useEffect(() => {
    if (isLoggedIn === false) {
      router.push("../login");
    } else {
      getuserInfo();
    }
  }, []);

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
            <PageHeaderTitle title="My Profile" />
            <BreadCrumb title="My Account" hrefTitle="Home" toPage="/" />
            <div className="page-content pt-2">
              <div className="container">
                {userInfos !== null && <ProfileContent userInfos={userInfos} />}
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

export default ProfilePage;

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
