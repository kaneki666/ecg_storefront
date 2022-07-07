import React from "react";
import { LandingBannerProps } from "../../utils/types/types";

const Sliderlanidng = ({ images }: { images: LandingBannerProps[] }) => {
  return (
    <section className="intro-section">
      {images.length === 3 && (
        <div
          className="swiper-theme nav-inner pg-inner swiper-nav-lg animation-slider pg-xxl-hide nav-xxl-show nav-hide"
          data-swiper-options="{
      'slidesPerView': 1,
      'autoplay': {
          'delay': 8000,
          'disableOnInteraction': false
      }
  }"
        >
          <div className="swiper-wrapper">
            <div
              className="swiper-slide banner banner-fixed intro-slide intro-slide1"
              style={{
                backgroundImage: "url(" + images[0].background_img + ")",

                backgroundColor: "#ebeef2",
              }}
            >
              <div className="container">
                <figure className="slide-image skrollable slide-animate">
                  <img
                    src={images[0].static_img}
                    alt="Banner"
                    data-bottom-top="transform: translateY(10vh);"
                    data-top-bottom="transform: translateY(-10vh);"
                    width="474"
                    height="397"
                  />
                </figure>
                <div className="banner-content y-50 text-right">
                  <h5
                    className="banner-subtitle font-weight-normal text-default ls-50 lh-1 mb-2 slide-animate"
                    data-animation-options="{
                      'name': 'fadeInRightShorter',
                      'duration': '1s',
                      'delay': '.2s'
                  }"
                  >
                    {images[0].text.split("\r\n")[0]}{" "}
                    <span className="p-relative d-inline-block">Men’s</span>
                  </h5>
                  <h3
                    className="banner-title font-weight-bolder ls-25 lh-1 slide-animate"
                    data-animation-options="{
                      'name': 'fadeInRightShorter',
                      'duration': '1s',
                      'delay': '.4s'
                  }"
                  >
                    {images[0].text.split("\r\n")[2]}
                  </h3>
                  <p
                    className="font-weight-normal text-default slide-animate"
                    data-animation-options="{
                      'name': 'fadeInRightShorter',
                      'duration': '1s',
                      'delay': '.6s'
                  }"
                  >
                    {images[0].text.split("\r\n")[3]}{" "}
                    <span className="font-weight-bolder text-secondary">
                      {images[0].text.split("\r\n")[4]}
                    </span>
                  </p>

                  <a
                    href="storelist"
                    className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate"
                    data-animation-options="{
                      'name': 'fadeInRightShorter',
                      'duration': '1s',
                      'delay': '.8s'
                  }"
                  >
                    SHOP NOW<i className="w-icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="swiper-slide banner banner-fixed intro-slide intro-slide2"
              style={{
                backgroundImage: "url(" + images[1].background_img + ")",
                backgroundColor: "#ebeef2",
              }}
            >
              <div className="container">
                <figure
                  className="slide-image skrollable slide-animate"
                  data-animation-options="{
                      'name': 'fadeInUpShorter',
                      'duration': '1s'
                  }"
                >
                  <img
                    src={images[1].static_img}
                    alt="Banner"
                    data-bottom-top="transform: translateX(10vh);"
                    data-top-bottom="transform: translateX(-10vh);"
                    width="480"
                    height="633"
                  />
                </figure>
                <div className="banner-content d-inline-block y-50">
                  <h5
                    className="banner-subtitle font-weight-normal text-default ls-50 slide-animate"
                    data-animation-options="{
                          'name': 'fadeInUpShorter',
                          'duration': '1s',
                          'delay': '.2s'
                      }"
                  >
                    {images[1].text.split("\r\n")[0]}-
                    <span className="text-secondary">
                      {images[1].text.split("\r\n")[1]}
                    </span>
                  </h5>
                  <h3
                    className="banner-title font-weight-bolder text-dark mb-0 ls-25 slide-animate"
                    data-animation-options="{
                          'name': 'fadeInUpShorter',
                          'duration': '1s',
                          'delay': '.4s'
                      }"
                  >
                    {images[1].text.split("\r\n")[2]}
                  </h3>
                  <p
                    className="font-weight-normal text-default slide-animate"
                    data-animation-options="{
                          'name': 'fadeInUpShorter',
                          'duration': '1s',
                          'delay': '.8s'
                      }"
                  >
                    {images[1].text.split("\r\n")[3]}
                  </p>
                  <a
                    href="category"
                    className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate"
                    data-animation-options="{
                          'name': 'fadeInUpShorter',
                          'duration': '1s',
                          'delay': '1s'
                      }"
                  >
                    {images[1].text.split("\r\n")[4]}
                    <i className="w-icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="swiper-slide banner banner-fixed intro-slide intro-slide3"
              style={{
                backgroundImage: "url(" + images[1].background_img + ")",
                backgroundColor: "#f0f1f2",
              }}
            >
              <div className="container">
                <figure
                  className="slide-image skrollable slide-animate"
                  data-animation-options="{
                      'name': 'fadeInDownShorter',
                      'duration': '1s'
                  }"
                >
                  <img
                    src={images[2].static_img}
                    alt="Banner"
                    data-bottom-top="transform: translateY(10vh);"
                    data-top-bottom="transform: translateY(-10vh);"
                    width="310"
                    height="444"
                  />
                </figure>
                <div className="banner-content text-right y-50">
                  <p
                    className="font-weight-normal text-default text-uppercase mb-0 slide-animate"
                    data-animation-options="{
                          'name': 'fadeInLeftShorter',
                          'duration': '1s',
                          'delay': '.6s'
                      }"
                  >
                    {images[2].text.split("\r\n")[0]}
                  </p>
                  <h5
                    className="banner-subtitle font-weight-normal text-default ls-25 slide-animate"
                    data-animation-options="{
                          'name': 'fadeInLeftShorter',
                          'duration': '1s',
                          'delay': '.4s'
                      }"
                  >
                    {images[1].text.split("\r\n")[1]}
                  </h5>
                  <h3
                    className="banner-title p-relative font-weight-bolder ls-50 slide-animate"
                    data-animation-options="{
                          'name': 'fadeInLeftShorter',
                          'duration': '1s',
                          'delay': '.2s'
                      }"
                  >
                    <span className="text-white mr-4">
                      {images[1].text.split("\r\n")[2]}
                    </span>
                    -{images[1].text.split("\r\n")[3]}
                  </h3>
                  <div
                    className="btn-group slide-animate"
                    data-animation-options="{
                          'name': 'fadeInLeftShorter',
                          'duration': '1s',
                          'delay': '.8s'
                      }"
                  >
                    <a
                      href="#"
                      className="btn btn-dark btn-outline btn-rounded btn-icon-right"
                    >
                      SHOP NOW<i className="w-icon-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <button className="swiper-button-next"></button>
          <button className="swiper-button-prev"></button>
        </div>
      )}
    </section>
  );
};

export default Sliderlanidng;
