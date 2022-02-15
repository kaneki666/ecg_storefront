import React from "react";
import BannerFashion from "./BannerFashion";
import {
  ProductListProps,
  SingleProductProps,
} from "../../utils/types/landingpage";
import ProductCategoryItem from "./ProductCategoryItem";
import { shuffleArray } from "../../utils/helperFucntion/helper";

const ProductCategorize = ({
  productList,
}: {
  productList: ProductListProps;
}) => {
  return (
    <div>
      <div className="product-wrapper-1 appear-animate mb-5">
        <div className="title-link-wrapper pb-1 mb-4">
          <h2 className="title ls-normal mb-0">Clothing & Apparel</h2>
          <a
            href="category"
            className="font-size-normal font-weight-bold ls-25 mb-0"
          >
            More Products<i className="w-icon-long-arrow-right"></i>
          </a>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-4 mb-4">
            <div
              className="banner h-100 br-sm"
              style={{
                backgroundImage: "url(/images/demos/demo1/banners/2.jpg)",
                backgroundColor: "#ebeced",
              }}
            >
              <div className="banner-content content-top">
                <h5 className="banner-subtitle font-weight-normal mb-2">
                  Weekend Sale
                </h5>
                <hr className="banner-divider bg-dark mb-2" />
                <h3 className="banner-title font-weight-bolder ls-25 text-uppercase">
                  New Arrivals
                  <br />{" "}
                  <span className="font-weight-normal text-capitalize">
                    Collection
                  </span>
                </h3>
                <a
                  href="category"
                  className="btn btn-dark btn-outline btn-rounded btn-sm"
                >
                  shop Now
                </a>
              </div>
            </div>
          </div>
          {/* <!-- End of Banner --> */}
          <div className="col-lg-9 col-sm-8">
            <div
              className="swiper-container swiper-theme"
              data-swiper-options="{
                  'spaceBetween': 20,
                  'slidesPerView': 2,
                  'breakpoints': {
                      '992': {
                          'slidesPerView': 3
                      },
                      '1200': {
                          'slidesPerView': 4
                      }
                  }
              }"
            >
              {/* <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-2">
                <div className="swiper-slide product-col"> */}
              <div className="tab-pane active pt-4">
                <div className="row cols-xl-4 cols-lg-3 cols-2">
                  {productList &&
                    productList.results
                      .slice(0, 8)
                      .map((productItem: SingleProductProps) => (
                        <ProductCategoryItem
                          key={productItem.id.toString()}
                          productItem={productItem}
                        />
                      ))}
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End of Product Wrapper 1 --> */}

      <div className="product-wrapper-1 appear-animate mb-8">
        <div className="title-link-wrapper pb-1 mb-4">
          <h2 className="title ls-normal mb-0">Consumer Electric</h2>
          <a
            href="category"
            className="font-size-normal font-weight-bold ls-25 mb-0"
          >
            More Products<i className="w-icon-long-arrow-right"></i>
          </a>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-4 mb-4">
            <div
              className="banner h-100 br-sm"
              style={{
                backgroundImage: "url(/images/demos/demo1/banners/3.jpg)",
                backgroundColor: "#252525",
              }}
            >
              <div className="banner-content content-top">
                <h5 className="banner-subtitle text-white font-weight-normal mb-2">
                  New Collection
                </h5>
                <hr className="banner-divider bg-white mb-2" />
                <h3 className="banner-title text-white font-weight-bolder text-uppercase ls-25">
                  Top Camera <br />{" "}
                  <span className="font-weight-normal text-capitalize">
                    Mirrorless
                  </span>
                </h3>
                <a
                  href="#"
                  className="btn btn-white btn-outline btn-rounded btn-sm"
                >
                  shop now
                </a>
              </div>
            </div>
          </div>
          {/* <!-- End of Banner --> */}
          <div className="col-lg-9 col-sm-8">
            <div
              className="swiper-container swiper-theme"
              data-swiper-options="{
                  'spaceBetween': 20,
                  'slidesPerView': 2,
                  'breakpoints': {
                      '992': {
                          'slidesPerView': 3
                      },
                      '1200': {
                          'slidesPerView': 4
                      }
                  }
              }"
            >
              <div className="tab-pane active pt-4">
                <div className="row cols-xl-4 cols-lg-3 cols-2">
                  {productList &&
                    shuffleArray(productList.results)
                      .slice(0, 8)
                      .map((productItem: SingleProductProps) => (
                        <ProductCategoryItem
                          key={productItem.id.toString()}
                          productItem={productItem}
                        />
                      ))}
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
            {/* <!-- End of Produts --> */}
          </div>
        </div>
      </div>
      {/* <!-- End of Product Wrapper 1 --> */}

      <BannerFashion />
      {/* <!-- End of Banner Fashion --> */}

      <div className="product-wrapper-1 appear-animate mb-7">
        <div className="title-link-wrapper pb-1 mb-4">
          <h2 className="title ls-normal mb-0">Home Garden & Kitchen</h2>
          <a
            href="category"
            className="font-size-normal font-weight-bold ls-25 mb-0"
          >
            More Products<i className="w-icon-long-arrow-right"></i>
          </a>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-4 mb-4">
            <div
              className="banner h-100 br-sm"
              style={{
                backgroundImage: "url(/images/demos/demo1/banners/5.jpg)",
                backgroundColor: "#EAEFF3",
              }}
            >
              <div className="banner-content content-top">
                <h5 className="banner-subtitle font-weight-normal mb-2">
                  Deals And Promotions
                </h5>
                <hr className="banner-divider bg-dark mb-2" />
                <h3 className="banner-title font-weight-bolder text-uppercase ls-25">
                  Trending <br />{" "}
                  <span className="font-weight-normal text-capitalize">
                    House Utensil
                  </span>
                </h3>
                <a
                  href="category"
                  className="btn btn-dark btn-outline btn-rounded btn-sm"
                >
                  shop now
                </a>
              </div>
            </div>
          </div>
          {/* <!-- End of Banner --> */}
          <div className="col-lg-9 col-sm-8">
            <div
              className="swiper-container swiper-theme"
              data-swiper-options="{
                  'spaceBetween': 20,
                  'slidesPerView': 2,
                  'breakpoints': {
                      '992': {
                          'slidesPerView': 3
                      },
                      '1200': {
                          'slidesPerView': 4
                      }
                  }
              }"
            >
              <div className="tab-pane active pt-4">
                <div className="row cols-xl-4 cols-lg-3 cols-2">
                  {productList &&
                    shuffleArray(productList.results)
                      .slice(0, 8)
                      .map((productItem: SingleProductProps) => (
                        <ProductCategoryItem
                          key={productItem.id.toString()}
                          productItem={productItem}
                        />
                      ))}
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
            {/* <!-- End of Produts --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategorize;
