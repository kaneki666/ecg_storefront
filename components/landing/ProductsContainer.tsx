import React from "react";
import { shuffleArray } from "../../utils/helperFucntion/helper";
import {
  HomePageApiProps,
  ProductListProps,
  SingleProductProps,
} from "../../utils/types/landingpage";
import ProductCategorize from "./ProductCategorize";
import ProductItem from "./ProductItem";
import RecentViewProduct from "./RecentViewProduct";

const ProductsContainer = ({
  productList,
  clothingData,
}: {
  productList: HomePageApiProps;
  clothingData: SingleProductProps[];
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
            {productList.new_arrivals &&
              productList.new_arrivals.map(
                (productItem: SingleProductProps) => (
                  <ProductItem
                    key={productItem.id.toString()}
                    productItem={productItem}
                  />
                )
              )}
          </div>
        </div>
        {/* <!-- End of Tab Pane1 --> */}
        <div className="tab-pane pt-4" id="tab1-2">
          <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
            {productList.new_arrivals &&
              shuffleArray(productList.new_arrivals).map(
                (productItem: SingleProductProps) => (
                  <ProductItem
                    key={productItem.id.toString()}
                    productItem={productItem}
                  />
                )
              )}
          </div>
        </div>
        {/* <!-- End of Tab Pane2 --> */}
        <div className="tab-pane pt-4" id="tab1-3">
          <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
            {productList.new_arrivals &&
              shuffleArray(productList.new_arrivals).map(
                (productItem: SingleProductProps) => (
                  <ProductItem
                    key={productItem.id.toString()}
                    productItem={productItem}
                  />
                )
              )}
          </div>
        </div>
        {/* <!-- End of Tab Pane3 --> */}
        <div className="tab-pane pt-4" id="tab1-4">
          <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
            {productList.new_arrivals &&
              shuffleArray(productList.new_arrivals).map(
                (productItem: SingleProductProps) => (
                  <ProductItem
                    key={productItem.id.toString()}
                    productItem={productItem}
                  />
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
                href="#"
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
                href="#"
                className="btn btn-dark btn-link btn-underline btn-icon-right"
              >
                Shop Now<i className="w-icon-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End of Category Cosmetic Lifestyle --> */}

      <ProductCategorize clothingData={clothingData} />

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
          {productList &&
            shuffleArray(productList.new_arrivals).map(
              (productItem: SingleProductProps) => (
                <RecentViewProduct
                  key={productItem.id.toString()}
                  productItem={productItem}
                />
              )
            )}
        </div>
        <div className="swiper-pagination"></div>
      </div>
      {/* <!-- End of Reviewed Producs --> */}
    </div>
  );
};

export default ProductsContainer;
