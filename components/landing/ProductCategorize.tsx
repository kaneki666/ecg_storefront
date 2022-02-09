import React from "react";
import BannerFashion from "./BannerFashion";

const ProductCategorize = () => {
  return (
    <div>
        <div className="product-wrapper-1 appear-animate mb-5">
        <div className="title-link-wrapper pb-1 mb-4">
          <h2 className="title ls-normal mb-0">Clothing & Apparel</h2>
          <a
            href="shop-boxed-banner.html"
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
                  href="shop-banner-sidebar.html"
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
              <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-2">
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="#">
                        <img
                          src="/images/demos/demo1/products/4-1.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Men’s Clothing</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "60%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$23.99</ins>
                        <del className="old-price">$25.68</del>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="#">
                        <img
                          src="/images/demos/demo1/products/4-5-1.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                        <img
                          src="/images/demos/demo1/products/4-5-2.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Best Travel Bag</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "60%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$25.68</ins>
                        <del className="old-price">$28.99</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="#">
                        <img
                          src="/images/demos/demo1/products/4-2-1.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                        <img
                          src="/images/demos/demo1/products/4-2-2.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Women’s Fashion Handbag{" "}
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "60%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$25.68</ins>
                        <del className="old-price">$25.89</del>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="#">
                        <img
                          src="/images/demos/demo1/products/4-6.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Gray Leather Shoes</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "60%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$26.88</ins>
                        <del className="old-price">$27.89</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="#">
                        <img
                          src="/images/demos/demo1/products/4-3.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Black Winter Skating</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "60%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$40.86</ins>
                        <del className="old-price">$45.89</del>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="#">
                        <img
                          src="/images/demos/demo1/products/4-7.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Men's Black Wrist Watch
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "60%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$135.60</ins>
                        <del className="old-price">$155.70</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="#">
                        <img
                          src="/images/demos/demo1/products/4-4-1.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                        <img
                          src="/images/demos/demo1/products/4-4-2.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Sport Women's Wear</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "60%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$220.20</ins>
                        <del className="old-price">$300.62</del>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="#">
                        <img
                          src="/images/demos/demo1/products/4-8.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Women’s Hiking Hat</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "60%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <span className="price">$53.00</span>
                      </div>
                    </div>
                  </div>
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
            href="shop-boxed-banner.html"
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
                  href="shop-banner-sidebar.html"
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
              <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-2">
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="/images/demos/demo1/products/5-1-1.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                        <img
                          src="/images/demos/demo1/products/5-1-2.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                      <div className="product-label-group">
                        <label className="product-label label-discount">
                          6% Off
                        </label>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Professional Pixel Camera
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (5 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$215.68</ins>
                        <del className="old-price">$230.45</del>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="/images/demos/demo1/products/5-5.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Latest Speaker</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$250.68</ins>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="/images/demos/demo1/products/5-2-1.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                        <img
                          src="/images/demos/demo1/products/5-2-2.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Wash Machine</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (9 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$215.68</ins>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="/images/demos/demo1/products/5-6.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Security Guard</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$320.00</ins>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="/images/demos/demo1/products/5-3.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                      <div className="product-label-group">
                        <label className="product-label label-discount">
                          10% Off
                        </label>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">HD Television</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$450.68</ins>
                        <del className="old-price">$500.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="/images/demos/demo1/products/5-7.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                      <div className="product-label-group">
                        <label className="product-label label-discount">
                          10% Off
                        </label>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">USB Receipt</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (5 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$26.89</ins>
                        <del className="old-price">$29.79</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="/images/demos/demo1/products/5-4.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Data Transformer Tool</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (6 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$64.47</ins>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="/images/demos/demo1/products/5-8.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                      <div className="product-label-group">
                        <label className="product-label label-discount">
                          7% Off
                        </label>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Multi Functional Apple iPhone
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (9 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$136.26</ins>
                        <del className="old-price">$145.90</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
            {/* <!-- End of Produts --> */}
          </div>
        </div>
      </div>
      {/* <!-- End of Product Wrapper 1 --> */}

      <BannerFashion/>
      {/* <!-- End of Banner Fashion --> */}

      <div className="product-wrapper-1 appear-animate mb-7">
        <div className="title-link-wrapper pb-1 mb-4">
          <h2 className="title ls-normal mb-0">Home Garden & Kitchen</h2>
          <a
            href="shop-boxed-banner.html"
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
                  href="shop-banner-sidebar.html"
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
              <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-2">
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="/images/demos/demo1/products/6-1.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Home Sofa</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (5 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$75.99</ins>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="/images/demos/demo1/products/6-5.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Electric Rice-Cooker</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$215.00</ins>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="/images/demos/demo1/products/6-2-1.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                        <img
                          src="/images/demos/demo1/products/6-2-2.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                      <div className="product-label-group">
                        <label className="product-label label-discount">
                          21% Off
                        </label>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Kitchen Table</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (9 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$75.50</ins>
                        <del className="old-price">$95.68</del>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="/images/demos/demo1/products/6-6.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Kitchen Cooker</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$150.60</ins>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="/images/demos/demo1/products/6-3-1.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                        <img
                          src="/images/demos/demo1/products/6-3-2.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Table Lamp</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$45.60</ins>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="/images/demos/demo1/products/6-7.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                      <div className="product-label-group">
                        <label className="product-label label-discount">
                          12% Off
                        </label>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Electric Frying Pan</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (5 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$137.35</ins>
                        <del className="old-price">$155.65</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="/images/demos/demo1/products/6-4.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                      <div className="product-label-group">
                        <label className="product-label label-discount">
                          18% Off
                        </label>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Latest Chair</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (6 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$70.00</ins>
                        <del className="old-price">$85.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="/images/demos/demo1/products/6-8-1.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                        <img
                          src="/images/demos/demo1/products/6-8-2.jpg"
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Automatic Crusher</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (9 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$220.25</ins>
                      </div>
                    </div>
                  </div>
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
