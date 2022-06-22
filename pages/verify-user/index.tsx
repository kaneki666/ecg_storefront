import React, { useState } from "react";
import {
    GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { API_BASE_URL } from "../api/hello";
import { useRouter } from "next/router";
import Head from "next/head";
import WelcomeNavBar from "../../components/common/WelcomeNavBar";
import NavbarMiddle from "../../components/common/NavbarMiddle";
import HeaderBottom from "../../components/common/HeaderBottom";
import { CategoriesProps } from "../../utils/types/landingpage";
import FooterLanding from "../../components/common/Footer";
import StickyFooterLanding from "../../components/common/StickyFooter";
import ScrollToTop from "../../components/common/ScrollToTop";
import ProductQuickView from "../../components/common/ProductQuickView";
import MobileMenu from "../../components/common/MobileMenu";


const Index: NextPage = ({
    categoriesData,
  }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [data,setData]=useState()
  const [check1,setCheck1]=useState(false)
  const router =useRouter()
  const {token} = router.query
  const response = async (token: string | string[]) => {
    try{
    const res = await fetch(`${API_BASE_URL}/verify-user/${token}`);
    const data = await res.json();
    
    if (res.status !== 200) {
            setData(data);
            setCheck1(true)
            return 0;
        } else{
            setData(data);
            setCheck1(false)
            return 0;
        }
    }catch(e){
        console.log(e)
    }
        
  } 


  if(token && !data){
    response(token)
  }
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
          <main className="main login-page token-main">
           <div>
           <div className="text-center token-css">{check1 ? 
           (<div className="redcolor">{data && data["message"]}</div>)
           :(<div className="greenColor">Account {data && data["message"]}</div>)}</div>
           </div>
          </main>
          <FooterLanding/>
          <StickyFooterLanding />
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
      props: { categoriesData },
    };
  };

