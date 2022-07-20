import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addToCartAction,
  addToCompareAction,
  addToWishlistAction,
  removeFromCompareAction,
  removeFromWishlistAction,
} from "../../store/products/actions";
import {
  DealsOfTheDayProps,
  ProductCombination,
  SingleProductProps,
} from "../../utils/types/landingpage";
import {
  RootAppStateProps,
} from "../../utils/types/reduxTypes";

const HotDealsTheDay = ({ products }: { products: DealsOfTheDayProps }) => {
  const [checkWishlist, setcheckWishlist] = useState(false);
  const dispatch = useDispatch();
  let [selectedItem, setSelectedItem] = useState({
    quantity: 1,
    price: products.product[0].price,
  });

  const [selectedCombination, setSelectedCombination] =
    useState<ProductCombination | null>(null);
  const { wishlist, compareProducts } = useSelector(
    (state: RootAppStateProps) => state.ProductReducer
  );

  const currency = useSelector(
    (state: RootAppStateProps) => state.AuthReducer.currency
  );

  useEffect(() => {
    if (wishlist) {
      if (wishlist?.length > 0) {
        const findIndexWishlistRemove = wishlist?.findIndex(
          (item: SingleProductProps) => item.id === products.product[0].id
        );
        if (findIndexWishlistRemove !== -1) {
          setcheckWishlist(true);
        }
      }
    }
  }, []);

  const handleAddToComparelist = () => {
    const compareItem: SingleProductProps = {
      id: products.product[0].id,
      slug: products.product[0].slug,
      sku:  products.product[0].sku,
      thumbnail: products.product[0].thumbnail,
      title: products.product[0].title,
      price: products.product[0].price,
      total_quantity: products.product[0].total_quantity,
      old_price: products.product[0].old_price,
      short_description: products.product[0].short_description,
      avg_rating: products.product[0].avg_rating,
      is_featured: products.product[0].is_featured,
      category_name: products.product[0].category_name,
      brand_name: products.product[0].brand_name,
      full_description: products.product[0].full_description,
      warranty: products.product[0].warranty,
      review_count: products.product[0].review_count,
      status: products.product[0].status,
      vendor: products.product[0].vendor,
      category: products.product[0].category,
      sub_category: products.product[0].sub_category,
      brand: products.product[0].brand,
      unit: products.product[0].unit,
      purchase_price: products.product[0].purchase_price,
      tax_in_percent: products.product[0].tax_in_percent,
      discount_type:  products.product[0].discount_type,
      discount_amount: products.product[0].discount_amount,
      total_shipping_cost: products.product[0].total_shipping_cost,
      shipping_time: products.product[0].shipping_time,
      youtube_link: products.product[0].youtube_link,
      product_tags: products.product[0].product_tags,
      product_reviews: products.product[0].product_reviews,
      product_media: products.product[0].product_media,
      product_combinations: products.product[0].product_combinations, 
    };
    const add = toast("Added in compare", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    if (compareProducts) {
      if (compareProducts.length < 4) {
        dispatch(addToCompareAction(compareItem));
        add;
      } else if (compareProducts.length === 4) {
        dispatch(removeFromCompareAction(compareProducts[0].id));
        dispatch(addToCompareAction(compareItem));
        add;
      }
    }
  };

  const handleAddToCart = () =>
    dispatch(
      addToCartAction({
        id: products.product[0].id,
        title: products.product[0].title,
        thumbnail: products.product[0].thumbnail,
        quantity: selectedItem.quantity,
        price: selectedItem.price,
        totalPrice: selectedItem.price * selectedItem.quantity,
      })
    );
  const handleWishlist = () => {
    if (wishlist?.length !== 0) {
      if (wishlist) {
        const findIndexWishlistRemove = wishlist?.findIndex(
          (item: SingleProductProps) => item.id === products.product["0"].id
        );
        if (findIndexWishlistRemove === -1) {
          dispatch(addToWishlistAction(products.product["0"]));
          setcheckWishlist(true);
          toast("Added in wishlist", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          dispatch(addToWishlistAction(products.product["0"]));
          setcheckWishlist(false);
          toast("removed from wishlist", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
    } else {
      setcheckWishlist(true);
      toast("Added in wishlist", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(addToWishlistAction(products.product["0"]));
    }
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
              {products.product.map(
                (productitem: SingleProductProps, index: number) => (
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
                                      alt="Product Image"
                                      width="800"
                                      height="900"
                                    />
                                  </figure>
                                </div>
                              ))}
                              {/* <div className="swiper-slide">
                                <figure className="product-image">
                                  <img
                                    src={productitem.thumbnail}
                                    data-zoom-image="/images/demos/demo1/products/1-1-800x900.jpg"
                                    alt="Product Image"
                                    width="800"
                                    height="900"
                                  />
                                </figure>
                              </div> */}
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
                              {productitem.product_media?.map((item) => (
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
                              ))}

                              {/* <div
                                className="product-thumb swiper-slide"
                                // key={item.id}
                              >
                                <img
                                  src={productitem.thumbnail}
                                  alt="Product Image"
                                  width="60"
                                  height="68"
                                />
                              </div> */}
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
                              {currency.currency_symbol}{" "}
                              {productitem.price * currency.currency_rate}
                            </ins>
                          </div>

                          <div className="product-countdown-container flex-wrap">
                            <label className="mr-2 text-default">
                              Offer Ends In:
                            </label>
                            <div
                              className="product-countdown countdown-compact"
                              data-until={`${"2022-07-31".split("-")[0]}, ${
                                "2022-07-31".split("-")[1]
                              }, ${"2022-07-31".split("-")[2]}`}
                              data-compact="true"
                            >
                              {products.end_date}
                            </div>
                          </div>

                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span
                                className="ratings"
                                style={{
                                  width: `${
                                    (productitem.avg_rating * 100) / 5
                                  }%`,
                                }}
                              ></span>
                              <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="#" className="rating-reviews">
                              {productitem.product_reviews.length} reviews
                            </a>
                          </div>

                          {productitem.product_combinations[0].product_attribute
                            .title === "Color" && (
                            <div className="product-form product-variation-form product-size-swatch mb-3">
                              <label className="mb-1">Colors:</label>
                              <div className="flex-wrap d-flex align-items-center product-variations">
                                {productitem.product_combinations[0]
                                  .product_attribute.title === "Color" &&
                                  productitem.product_combinations.map(
                                    (itemCombination) => (
                                      <div
                                        onClick={() =>
                                          setSelectedCombination(
                                            itemCombination
                                          )
                                        }
                                        key={itemCombination.id.toString()}
                                      >
                                        <div
                                          className="product-colors"
                                          style={{
                                            backgroundColor:
                                              itemCombination.product_attribute_color_code,
                                          }}
                                        />
                                      </div>
                                    )
                                  )}
                              </div>
                            </div>
                          )}

                          {productitem.product_combinations[0].product_attribute
                            .title === "Flavour" &&
                            productitem.product_combinations[0].variant.length >
                              0 && (
                              <div className="product-form product-variation-form product-size-swatch mb-3">
                                <label className="mb-1">Flavours:</label>
                                <div className="flex-wrap d-flex align-items-center product-variations">
                                  {productitem.product_combinations[0].variant.map(
                                    (varientItem) => (
                                      <a
                                        key={varientItem.id.toString()}
                                        className="size"
                                        onClick={() =>
                                          setSelectedItem({
                                            ...selectedItem,
                                            price: varientItem.variant_price,
                                          })
                                        }
                                      >
                                        {varientItem.variant_value}
                                      </a>
                                    )
                                  )}
                                </div>
                                {/* <a href="#" className="product-variation-clean">
                                  Clean All
                                </a> */}
                              </div>
                            )}

                          {selectedCombination !== null &&
                            selectedCombination.variant.length > 0 && (
                              <div className="product-form product-variation-form product-size-swatch mb-3">
                                <label className="mb-1">Size:</label>
                                <div className="flex-wrap d-flex align-items-center product-variations">
                                  {selectedCombination.variant.map(
                                    (varientItem) => (
                                      <a
                                        key={varientItem.id.toString()}
                                        className="size"
                                        onClick={() =>
                                          setSelectedItem({
                                            ...selectedItem,
                                            price: varientItem.variant_price,
                                          })
                                        }
                                      >
                                        {varientItem.variant_value}
                                      </a>
                                    )
                                  )}
                                </div>
                                {/* <a href="#" className="product-variation-clean">
                                  Clean All
                                </a> */}
                              </div>
                            )}

                          <div className="product-price">
                            <ins className="new-price ls-50">
                              {currency.currency_symbol}{" "}
                              {selectedItem.price *
                                selectedItem.quantity *
                                currency.currency_rate}{" "}
                            </ins>
                          </div>

                          <div className="product-form pt-4">
                            <div className="product-qty-form mb-2 mr-2">
                              <div className="input-group">
                                <input
                                  className="quantity form-control"
                                  type="number"
                                  min="1"
                                  max="10000000"
                                  value={selectedItem.quantity}
                                  onChange={(e) => {}}
                                />
                                <button
                                  onClick={() =>
                                    setSelectedItem({
                                      ...selectedItem,
                                      quantity: (selectedItem.quantity += 1),
                                    })
                                  }
                                  className="quantity-plus w-icon-plus"
                                ></button>
                                <button
                                  onClick={() =>
                                    selectedItem.quantity > 1
                                      ? setSelectedItem({
                                          ...selectedItem,
                                          quantity:
                                            (selectedItem.quantity -= 1),
                                        })
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
                                onClick={handleAddToComparelist}
                                href="#"
                                className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
            {/* <button className="swiper-button-prev"></button>
            <button className="swiper-button-next"></button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDealsTheDay;
