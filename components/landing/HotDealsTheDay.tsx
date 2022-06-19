import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCartAction, addToWishlistAction } from "../../store/products/actions";
import { DealsOfTheDayProps } from "../../utils/types/landingpage";

const HotDealsTheDay = ({ products }: { products: DealsOfTheDayProps }) => {
  const dispatch = useDispatch();
  let [quantity, setQuantity] = useState(1);
  
  const handleAddToCart = () =>
    dispatch(
      addToCartAction({
        id: products.product[0].id,
        title: products.product[0].title,
        thumbnail: products.product[0].thumbnail,
        quantity: quantity,
        price: products.product[0].price,
        totalPrice: products.product[0].price,
      })
    );
    const handleWishlist = () => {
      dispatch(addToWishlistAction(products.product["0"]));
      toast("Added in wishlist", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };
    
  return (
    <div className="col-lg-9 mb-4">
      <div className="single-product h-100 br-sm">
        <h4 className="title-sm title-underline font-weight-bolder ls-normal">
          Deals Hot of The Day
        </h4>
        <div className="swiper">
          <div
            className="swiper-container swiper-theme nav-top swiper-nav-lg"
            data-swiper-options="{
                                'spaceBetween': 20,
                                'slidesPerView': 1
                            }"
          >
            <div className="swiper-wrapper row cols-1 gutter-no">
              {products.product.map((productitem: any, index: any) => (
                <div className="swiper-slide" key={productitem.id}>
                  <div className="product product-single row">
                    <div className="col-md-6">
                      <div className="product-gallery product-gallery-sticky product-gallery-vertical">
                        <div className="swiper-container product-single-swiper swiper-theme nav-inner">
                          <div className="swiper-wrapper row cols-1 gutter-no">
                            {productitem.product_media.map((item: any) => (
                              <div className="swiper-slide" key={item.id}>
                                <figure className="product-image">
                                  <img
                                    src={item.file}
                                    data-zoom-image="/images/demos/demo1/products/1-1-800x900.jpg"
                                    alt="Product Image"
                                    width="800"
                                    height="900"
                                  />
                                </figure>
                              </div>
                            ))}
                          </div>
                          <button className="swiper-button-next"></button>
                          <button className="swiper-button-prev"></button>
                          <div className="product-label-group">
                            <label className="product-label label-discount">
                              {products.discount_price}
                              {products.discount_price_type == "per"
                                ? "%"
                                : " Flat"}{" "}
                              Off
                            </label>
                          </div>
                        </div>
                        <div
                          className="product-thumbs-wrap swiper-container"
                          data-swiper-options="{
                                                      'direction': 'vertical',
                                                      'breakpoints': {
                                                          '0': {
                                                              'direction': 'horizontal',
                                                              'slidesPerView': 4
                                                          },
                                                          '992': {
                                                              'direction': 'vertical',
                                                              'slidesPerView': 'auto'
                                                          }
                                                      }
                                                  }"
                        >
                          <div className="product-thumbs swiper-wrapper row cols-lg-1 cols-4 gutter-sm">
                            {productitem.product_media?.map(
                              (item: any, index: any) => (
                                <div
                                  className="product-thumb swiper-slide"
                                  key={item.id}
                                >
                                  <img
                                    src={item.file}
                                    alt="Product Image"
                                    width="60"
                                    height="68"
                                  />
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="product-details scrollable">
                        <h2 className="product-title mb-1">
                          <a href="#">{productitem.title}</a>
                        </h2>

                        <hr className="product-divider" />

                        <div className="product-price">
                          <ins className="new-price ls-50">
                            {productitem.price}
                          </ins>
                        </div>

                        <div className="product-countdown-container flex-wrap">
                          <label className="mr-2 text-default">
                            Offer Ends In:
                          </label>
                          <div
                            className="product-countdown countdown-compact"
                            data-until="2022, 12, 31"
                            data-compact="true"
                          >
                            {products.end_date}
                          </div>
                        </div>

                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <a href="#" className="rating-reviews">
                            (3 Reviews)
                          </a>
                        </div>

                        <div className="product-form product-variation-form product-size-swatch mb-3">
                          <label className="mb-1">Size:</label>
                          <div className="flex-wrap d-flex align-items-center product-variations">
                            <a href="#" className="size">
                              Extra Large
                            </a>
                            <a href="#" className="size">
                              Large
                            </a>
                            <a href="#" className="size">
                              Medium
                            </a>
                            <a href="#" className="size">
                              Small
                            </a>
                          </div>
                          <a href="#" className="product-variation-clean">
                            Clean All
                          </a>
                        </div>

                        <div className="product-variation-price">
                          <span></span>
                        </div>

                        <div className="product-form pt-4">
                          <div className="product-qty-form mb-2 mr-2">
                            <div className="input-group">
                              <input
                                className="quantity form-control"
                                type="number"
                                min="1"
                                max="10000000"
                                value={quantity}
                                onChange={(e) => {}}
                              />
                              <button
                                onClick={() => setQuantity((quantity += 1))}
                                className="quantity-plus w-icon-plus"
                              ></button>
                              <button
                                onClick={() =>
                                  quantity > 1
                                    ? setQuantity((quantity -= 1))
                                    : ""
                                }
                                className="quantity-minus w-icon-minus"
                              ></button>
                            </div>
                          </div>
                          <button
                            onClick={handleAddToCart}
                            className="btn btn-primary btn-cart"
                          >
                            <i className="w-icon-cart"></i>
                            <span>Add to Cart</span>
                          </button>
                        </div>

                        <div className="social-links-wrapper mt-1">
                          <div className="social-links">
                            <div className="social-icons social-no-color border-thin">
                              <a
                                href="#"
                                className="social-icon social-facebook w-icon-facebook"
                              ></a>
                              <a
                                href="#"
                                className="social-icon social-twitter w-icon-twitter"
                              ></a>
                              <a
                                href="#"
                                className="social-icon social-pinterest fab fa-pinterest-p"
                              ></a>
                              <a
                                href="#"
                                className="social-icon social-whatsapp fab fa-whatsapp"
                              ></a>
                              <a
                                href="#"
                                className="social-icon social-youtube fab fa-linkedin-in"
                              ></a>
                            </div>
                          </div>
                          <span className="divider d-xs-show"></span>
                          <div className="product-link-wrapper d-flex">
                            <a
                              onClick={handleWishlist}
                              href="#"
                              className="btn-product-icon btn-wishlist w-icon-heart"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="swiper-button-prev"></button>
            <button className="swiper-button-next"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDealsTheDay;



 
