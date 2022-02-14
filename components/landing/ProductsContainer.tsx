import React from "react";
import { shuffleArray } from "../../utils/helperFucntion/helper";
import {
  ProductListProps,
  SingleProductProps,
} from "../../utils/types/landingpage";
import ProductCategorize from "./ProductCategorize";
import ProductItem from "./ProductItem";

const ProductsContainer = ({
  productList,
}: {
  productList: ProductListProps;
}) => {
  return (
    <div className="container">
      <h2 className="title justify-content-center ls-normal mb-4 mt-10 pt-1 appear-animate">
        Popular Departments
      </h2>
      <div className="tab tab-nav-boxed tab-nav-outline appear-animate">
        <ul className="nav nav-tabs justify-content-center" role="tablist">
          <li className="nav-item mr-2 mb-2">
            <a
              className="nav-link active br-sm font-size-md ls-normal"
              href="#tab1-1"
            >
              New arrivals
            </a>
          </li>
          <li className="nav-item mr-2 mb-2">
            <a className="nav-link br-sm font-size-md ls-normal" href="#tab1-2">
              Best seller
            </a>
          </li>
          <li className="nav-item mr-2 mb-2">
            <a className="nav-link br-sm font-size-md ls-normal" href="#tab1-3">
              most popular
            </a>
          </li>
          <li className="nav-item mr-0 mb-2">
            <a className="nav-link br-sm font-size-md ls-normal" href="#tab1-4">
              Featured
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- End of Tab --> */}
      <div className="tab-content product-wrapper appear-animate">
        <div className="tab-pane active pt-4" id="tab1-1">
          <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
            {productList &&
              productList.results.map((productItem: SingleProductProps) => (
                <ProductItem productItem={productItem} />
              ))}
          </div>
        </div>
        {/* <!-- End of Tab Pane1 --> */}
        <div className="tab-pane pt-4" id="tab1-2">
          <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
            {productList &&
              shuffleArray(productList.results).map(
                (productItem: SingleProductProps) => (
                  <ProductItem productItem={productItem} />
                )
              )}
          </div>
        </div>
        {/* <!-- End of Tab Pane2 --> */}
        <div className="tab-pane pt-4" id="tab1-3">
          <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
            {productList &&
              shuffleArray(productList.results).map(
                (productItem: SingleProductProps) => (
                  <ProductItem productItem={productItem} />
                )
              )}
          </div>
        </div>
        {/* <!-- End of Tab Pane3 --> */}
        <div className="tab-pane pt-4" id="tab1-4">
          <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
            {productList &&
              shuffleArray(productList.results).map(
                (productItem: SingleProductProps) => (
                  <ProductItem productItem={productItem} />
                )
              )}
          </div>
        </div>
        {/* <!-- End of Tab Pane4 --> */}
      </div>
      {/* <!-- End of Tab Content --> */}

      <div className="row category-cosmetic-lifestyle appear-animate mb-5">
        <div className="col-md-6 mb-4">
          <div className="banner banner-fixed category-banner-1 br-xs">
            <figure>
              <img
                src="/images/demos/demo1/categories/3-1.jpg"
                alt="Category Banner"
                width="610"
                height="200"
                style={{ backgroundColor: "#3B4B48" }}
              />
            </figure>
            <div className="banner-content y-50 pt-1">
              <h5 className="banner-subtitle font-weight-bold text-uppercase">
                Natural Process
              </h5>
              <h3 className="banner-title font-weight-bolder text-capitalize text-white">
                Cosmetic Makeup
                <br />
                Professional
              </h3>
              <a
                href="shop-banner-sidebar.html"
                className="btn btn-white btn-link btn-underline btn-icon-right"
              >
                Shop Now<i className="w-icon-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="banner banner-fixed category-banner-2 br-xs">
            <figure>
              <img
                src="/images/demos/demo1/categories/3-2.jpg"
                alt="Category Banner"
                width="610"
                height="200"
                style={{ backgroundColor: "#E5E5E5" }}
              />
            </figure>
            <div className="banner-content y-50 pt-1">
              <h5 className="banner-subtitle font-weight-bold text-uppercase">
                Trending Now
              </h5>
              <h3 className="banner-title font-weight-bolder text-capitalize">
                Women's Lifestyle
                <br />
                Collection
              </h3>
              <a
                href="shop-banner-sidebar.html"
                className="btn btn-dark btn-link btn-underline btn-icon-right"
              >
                Shop Now<i className="w-icon-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End of Category Cosmetic Lifestyle --> */}

      <ProductCategorize />

      <h2 className="title title-underline mb-4 ls-normal appear-animate">
        Your Recent Views
      </h2>
      <div
        className="swiper-container swiper-theme shadow-swiper appear-animate pb-4 mb-8"
        data-swiper-options="{
      'spaceBetween': 20,
      'slidesPerView': 2,
      'breakpoints': {
          '576': {
              'slidesPerView': 3
          },
          '768': {
              'slidesPerView': 5
          },
          '992': {
              'slidesPerView': 6
          },
          '1200': {
              'slidesPerView': 8
          }
      }
  }"
      >
        <div className="swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-2">
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src="/images/demos/demo1/products/7-1.jpg"
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">Women's Fashion Handbag</a>
              </h4>
            </div>
          </div>
          {/* <!-- End of Product Wrap --> */}
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src="/images/demos/demo1/products/7-2.jpg"
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">Electric Frying Pan</a>
              </h4>
            </div>
          </div>
          {/* <!-- End of Product Wrap --> */}
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src="/images/demos/demo1/products/7-3.jpg"
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">Black Winter Skating</a>
              </h4>
            </div>
          </div>
          {/* <!-- End of Product Wrap --> */}
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src="/images/demos/demo1/products/7-4.jpg"
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">HD Television</a>
              </h4>
            </div>
          </div>
          {/* <!-- End of Product Wrap --> */}
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src="/images/demos/demo1/products/7-5.jpg"
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">Home Sofa</a>
              </h4>
            </div>
          </div>
          {/* <!-- End of Product Wrap --> */}
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src="/images/demos/demo1/products/7-6.jpg"
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">USB Receipt</a>
              </h4>
            </div>
          </div>
          {/* <!-- End of Product Wrap --> */}
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src="/images/demos/demo1/products/7-7.jpg"
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">Electric Rice-Cooker</a>
              </h4>
            </div>
          </div>
          {/* <!-- End of Product Wrap --> */}
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src="/images/demos/demo1/products/7-8.jpg"
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">Table Lamp</a>
              </h4>
            </div>
          </div>
          {/* <!-- End of Product Wrap --> */}
        </div>
        <div className="swiper-pagination"></div>
      </div>
      {/* <!-- End of Reviewed Producs --> */}
    </div>
  );
};

export default ProductsContainer;
