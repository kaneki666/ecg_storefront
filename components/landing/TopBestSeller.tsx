import React from "react";
import { shuffleArray } from "../../utils/helperFucntion/helper";
import {
    ProductListProps,
    SingleProductProps,
  } from "../../utils/types/landingpage";
import BestSeller from "./BestSeller";


const TopBestSeller = ({
    productList,
}: {
  productList: ProductListProps;
  }) => {
  return (
    <div className="col-lg-3 mb-4">
        <div className="widget widget-products widget-products-bordered h-100">
            <div className="widget-body br-sm h-100">
            <h4 className="title-sm title-underline font-weight-bolder ls-normal mb-2">
                Top 20 Best Seller
            </h4>
            <div className="swiper">
                <div
                className="swiper-container swiper-theme nav-top"
                data-swiper-options="{
                                        'slidesPerView': 1,
                                        'spaceBetween': 20,
                                        'breakpoints': {
                                            '576': {
                                                'slidesPerView': 2
                                            },
                                            '768': {
                                                'slidesPerView': 3
                                            },
                                            '992': {
                                                'slidesPerView': 1
                                            }
                                        }
                                    }"
                >
                <div className="swiper-wrapper row cols-lg-1 cols-md-3">
                <div className="swiper-slide product-widget-wrap">
                    {productList &&
                    productList.results.slice(0,3).map((productItem: SingleProductProps) => (
                        <BestSeller productItem={productItem} />
                    ))}
                </div>
                <div className="swiper-slide product-widget-wrap">
                    {productList &&
              shuffleArray(productList.results).slice(0,3).map(
                (productItem: SingleProductProps) => (
                  <BestSeller productItem={productItem} />
                )
              )}
                </div>
                <div className="swiper-slide product-widget-wrap">
                    {productList &&
              shuffleArray(productList.results).slice(0,3).map(
                (productItem: SingleProductProps) => (
                  <BestSeller productItem={productItem} />
                )
              )}
                </div>
                </div>
                <button className="swiper-button-next"></button>
                <button className="swiper-button-prev"></button>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default TopBestSeller;
