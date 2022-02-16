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
// import ShopSideBar from "../../components/category/ShopSideBar";
// import ShopMainContent from "../../components/category/ShopMainContent";
  
  const index: NextPage = ({
    categoriesData,
  }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
                <BreadcrumbCategory/>
                <div className="page-content">
                    <div className="container">
                        <ShopBanner/>
                        <ShopBrands/>
                        <ShopCategory/>
                        <div className="shop-content row gutter-lg mb-10">
                        
                        <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
                            <ShopSideBar/>        
                        </aside>
                    
                        <div className="main-content">
                            <Filter/>
                            <div className="product-wrapper row cols-md-3 cols-sm-2 cols-2">
                                <div className="product-wrap">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="#">
                                                <img src="images/shop/1.jpg" alt="Product" width="300"
                                                    height="338" />
                                            </a>
                                            <div className="product-action-horizontal">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <div className="product-cat">
                                                <a href="category">Electronics</a>
                                            </div>
                                            <h3 className="product-name">
                                                <a href="#">3D Television</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{ width: "100%" }}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="#" className="rating-reviews">(3 reviews)</a>
                                            </div>
                                            <div className="product-pa-wrapper">
                                                <div className="product-price">
                                                    $220.00 - $230.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-wrap">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="#">
                                                <img src="images/shop/2-1.jpg" alt="Product" width="300"
                                                    height="338" />
                                                <img src="images/shop/2-2.jpg" alt="Product" width="300"
                                                    height="338" />
                                            </a>
                                            <div className="product-countdown-container">
                                                <div className="product-countdown countdown-compact" data-until="2021, 9, 9"
                                                    data-format="DHMS" data-compact="false"
                                                    data-labels-short="Days, Hours, Mins, Secs">
                                                    00:00:00:00</div>
                                            </div>
                                            <div className="product-action-horizontal">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <div className="product-cat">
                                                <a href="category">Electronics</a>
                                            </div>
                                            <h3 className="product-name">
                                                <a href="#">Alarm Clock With Lamp</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{ width: "100%" }}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="#" className="rating-reviews">(10 reviews)</a>
                                            </div>
                                            <div className="product-pa-wrapper">
                                                <div className="product-price">
                                                    <ins className="new-price">$30.00</ins><del
                                                        className="old-price">$60.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-wrap">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="#">
                                                <img src="images/shop/3.jpg" alt="Product" width="300"
                                                    height="338" />
                                            </a>
                                            <div className="product-action-horizontal">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <div className="product-cat">
                                                <a href="category">Electronics</a>
                                            </div>
                                            <h3 className="product-name">
                                                <a href="#">Apple Laptop</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{ width: "80%" }}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="#" className="rating-reviews">(5 reviews)</a>
                                            </div>
                                            <div className="product-pa-wrapper">
                                                <div className="product-price">
                                                    $1,000.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-wrap">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="#">
                                                <img src="images/shop/4.jpg" alt="Product" width="300"
                                                    height="338" />
                                            </a>
                                            <div className="product-action-horizontal">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <div className="product-cat">
                                                <a href="category">Electronics</a>
                                            </div>
                                            <h3 className="product-name">
                                                <a href="#">Attachable Charge Alarm</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{ width: "60%" }}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="#" className="rating-reviews">(7 reviews)</a>
                                            </div>
                                            <div className="product-pa-wrapper">
                                                <div className="product-price">
                                                    $15.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-wrap">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="#">
                                                <img src="images/shop/5.jpg" alt="Product" width="300"
                                                    height="338" />
                                            </a>
                                            <div className="product-action-horizontal">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <div className="product-cat">
                                                <a href="category">Fashion</a>
                                            </div>
                                            <h3 className="product-name">
                                                <a href="#">Best Travel Bag</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{ width: "80%" }}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="#" className="rating-reviews">(4 reviews)</a>
                                            </div>
                                            <div className="product-pa-wrapper">
                                                <div className="product-price">
                                                    $83.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-wrap">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="#">
                                                <img src="images/shop/6.jpg" alt="Product" width="300"
                                                    height="338" />
                                            </a>
                                            <div className="product-action-horizontal">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <div className="product-cat">
                                                <a href="category">Sports</a>
                                            </div>
                                            <h3 className="product-name">
                                                <a href="#">Black Stunt Motor</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{ width: "100%" }}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="#" className="rating-reviews">(12 reviews)</a>
                                            </div>
                                            <div className="product-pa-wrapper">
                                                <div className="product-price">
                                                    $374.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-wrap">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="#">
                                                <img src="images/shop/7-1.jpg" alt="Product" width="300"
                                                    height="338" />
                                                <img src="images/shop/7-2.jpg" alt="Product" width="300"
                                                    height="338" />
                                            </a>
                                            <div className="product-action-horizontal">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <div className="product-cat">
                                                <a href="category">Fashion</a>
                                            </div>
                                            <h3 className="product-name">
                                                <a href="#">Blue Sky Trunk</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{ width: "100%" }}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="#" className="rating-reviews">(9 reviews)</a>
                                            </div>
                                            <div className="product-pa-wrapper">
                                                <div className="product-price">
                                                    $85.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-wrap">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="#">
                                                <img src="images/shop/8.jpg" alt="Product" width="300"
                                                    height="338" />
                                            </a>
                                            <div className="product-action-horizontal">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <div className="product-cat">
                                                <a href="category">Beauty</a>
                                            </div>
                                            <h3 className="product-name">
                                                <a href="#">Bodycare Smooth Powder</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{ width: "60%" }}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="#" className="rating-reviews">(4 reviews)</a>
                                            </div>
                                            <div className="product-pa-wrapper">
                                                <div className="product-price">
                                                    $25.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-wrap">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="#">
                                                <img src="images/shop/9.jpg" alt="Product" width="300"
                                                    height="338" />
                                            </a>
                                            <div className="product-action-horizontal">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <div className="product-cat">
                                                <a href="category">Electronics</a>
                                            </div>
                                            <h3 className="product-name">
                                                <a href="#">Bright Green IPhone</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{ width: "80%" }}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="#" className="rating-reviews">(4 reviews)</a>
                                            </div>
                                            <div className="product-pa-wrapper">
                                                <div className="product-price">
                                                    $950.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-wrap">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="#">
                                                <img src="images/shop/10.jpg" alt="Product" width="300"
                                                    height="338" />
                                            </a>
                                            <div className="product-action-horizontal">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <div className="product-cat">
                                                <a href="category">Fashion</a>
                                            </div>
                                            <h3 className="product-name">
                                                <a href="#">Cavin Fashion Suede Handbag</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{ width: "80%" }}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="#" className="rating-reviews">(4 reviews)</a>
                                            </div>
                                            <div className="product-pa-wrapper">
                                                <div className="product-price">
                                                    $163.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-wrap">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="#">
                                                <img src="images/shop/11-1.jpg" alt="Product" width="300"
                                                    height="338" />
                                                <img src="images/shop/11-2.jpg" alt="Product" width="300"
                                                    height="338" />
                                            </a>
                                            <div className="product-action-horizontal">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <div className="product-cat">
                                                <a href="category">Electronics</a>
                                            </div>
                                            <h3 className="product-name">
                                                <a href="#">Charming Design Watch</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{ width: "100%" }}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="#" className="rating-reviews">(10 reviews)</a>
                                            </div>
                                            <div className="product-pa-wrapper">
                                                <div className="product-price">
                                                    $30.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-wrap">
                                    <div className="product text-center">
                                        <figure className="product-media">
                                            <a href="#">
                                                <img src="images/shop/12.jpg" alt="Product" width="300"
                                                    height="338" />
                                            </a>
                                            <div className="product-action-horizontal">
                                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                                    title="Add to cart"></a>
                                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                    title="Wishlist"></a>
                                                <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                    title="Compare"></a>
                                                <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                    title="Quick View"></a>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <div className="product-cat">
                                                <a href="category">Fashion</a>
                                            </div>
                                            <h3 className="product-name">
                                                <a href="#">classNameic Simple Backpack</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{ width: "100%" }}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="#" className="rating-reviews">(9 reviews)</a>
                                            </div>
                                            <div className="product-pa-wrapper">
                                                <div className="product-price">
                                                    $85.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="toolbox toolbox-pagination justify-content-between">
                                <p className="showing-info mb-2 mb-sm-0">
                                    Showing<span>1-12 of 60</span>Products
                                </p>
                                <ul className="pagination">
                                    <li className="prev disabled">
                                        <a href="#" aria-label="Previous" aria-disabled="true">
                                            <i className="w-icon-long-arrow-left"></i>Prev
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="next">
                                        <a href="#" aria-label="Next">
                                            Next<i className="w-icon-long-arrow-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
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
          <MobileMenu />
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
  