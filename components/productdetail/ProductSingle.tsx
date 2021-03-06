import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import {
  addToCartAction,
  addToCompareAction,
  addToWishlistAction,
  removeFromCompareAction,
  removeFromWishlistAction,
} from "../../store/products/actions";
import {
  ProductCombination,
  SingleProductProps,
} from "../../utils/types/landingpage";
import {
  CartItemProps,
  RootAppStateProps,
} from "../../utils/types/reduxTypes";

const ProductSingle = ({ product }: { product: SingleProductProps }) => {
  const currency = useSelector(
    (state: RootAppStateProps) => state.AuthReducer.currency
  );
  const { wishlist, compareProducts } = useSelector(
    (state: RootAppStateProps) => state.ProductReducer
  );
  const dispatch = useDispatch();

  let [selectedItem, setSelectedItem] = useState({
    quantity: 1,
    price: product.price,
  });

  const [selectedCombination, setSelectedCombination] =
    useState<ProductCombination | null>(null);

  const handleAddToCart = () => {
    const cartItem: CartItemProps = {
      id: product.id,
      thumbnail: product.thumbnail,
      title: product.title,
      quantity: selectedItem.quantity,
      price: selectedItem.price,
      totalPrice: selectedItem.price * selectedItem.quantity,
    };
    dispatch(addToCartAction(cartItem));
  };

  const handleAddToComparelist = () => {
    const compareItem: SingleProductProps = {
      id: product.id,
      slug: product.slug,
      sku:  product.sku,
      thumbnail: product.thumbnail,
      title: product.title,
      price: product.price,
      total_quantity: product.total_quantity,
      old_price: product.old_price,
      short_description: product.short_description,
      avg_rating: product.avg_rating,
      is_featured: product.is_featured,
      category_name: product.category_name,
      brand_name: product.brand_name,
      full_description: product.full_description,
      warranty: product.warranty,
      review_count: product.review_count,
      status: product.status,
      vendor: product.vendor,
      category: product.category,
      sub_category: product.sub_category,
      brand: product.brand,
      unit: product.unit,
      purchase_price: product.purchase_price,
      tax_in_percent: product.tax_in_percent,
      discount_type:  product.discount_type,
      discount_amount: product.discount_amount,
      total_shipping_cost: product.total_shipping_cost,
      shipping_time: product.shipping_time,
      youtube_link: product.youtube_link,
      product_tags: product.product_tags,
      product_reviews: product.product_reviews,
      product_media: product.product_media,
      product_combinations: product.product_combinations,
    };
    if (compareProducts) {
      if (compareProducts.length < 4) {
        dispatch(addToCompareAction(compareItem));
      } else if (compareProducts.length === 4) {
        dispatch(removeFromCompareAction(compareProducts[0].id));
        dispatch(addToCompareAction(compareItem));
      }
    }
  };

  const handleWishlist = () => {
    var checkWishlist = false;
    if (wishlist?.length !== 0) {
      if (wishlist) {
        for (let i = 0; i < wishlist.length; i++) {
          try {
            if (product.id === wishlist[i].id) {
              checkWishlist = true;
              dispatch(removeFromWishlistAction(wishlist[i].id));
            }
          } catch (e) {
            console.log(e);
          }
        }
      }
      if (checkWishlist === false) {
        dispatch(addToWishlistAction(product));
        checkWishlist = false;
      }
    } else {
      dispatch(addToWishlistAction(product));
      checkWishlist = false;
    }
    if (checkWishlist === true) {
      toast("removed from wishlist", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (checkWishlist === false) {
      toast("Added in wishlist", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="product product-single row">
      <ToastContainer containerId="an id" draggable={false} />
      <div className="col-md-6 mb-6">
        <div className="product-gallery product-gallery-sticky">
          <div
            className="swiper-container product-single-swiper swiper-theme nav-inner"
            data-swiper-options="{
              'navigation': {
                  'nextEl': '.swiper-button-next',
                  'prevEl': '.swiper-button-prev'
              }
          }"
          >
            <div className="swiper-wrapper row cols-1 gutter-no">
              {product.product_media?.map((item: any) => (
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
                  0
                </div>
              ))}
            </div>
            <button className="swiper-button-next"></button>
            <button className="swiper-button-prev"></button>
            <a href="#" className="product-gallery-btn product-image-full">
              <i className="w-icon-zoom"></i>
            </a>
          </div>
          <div
            className="product-thumbs-wrap swiper-container"
            data-swiper-options="{
              'navigation': {
                  'nextEl': '.swiper-button-next',
                  'prevEl': '.swiper-button-prev'
              }
          }"
          >
            <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
              {product.product_media?.map((item: any, index) => (
                <div className="product-thumb swiper-slide" key={item.id}>
                  <img
                    src={item.file}
                    alt="Product Image"
                    width="60"
                    height="68"
                  />
                </div>
              ))}
            </div>
            <button className="swiper-button-next"></button>
            <button className="swiper-button-prev"></button>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4 mb-md-6">
        <div
          className="product-details"
          data-sticky-options="{'minWidth': 767}"
        >
          <h1 className="product-title">{product.title}</h1>
          <div className="product-bm-wrapper">
            <figure className="brand">
              <img
                src="/images/products/brand/brand-1.jpg"
                alt="Brand"
                width="102"
                height="48"
              />
            </figure>
            <div className="product-meta">
              <div className="product-categories">
                Category:
                <span className="product-category">
                  <a href="#">{product.category.title}</a>
                </span>
              </div>
              <div className="product-sku">
                SKU: <span>{product.sku}</span>
              </div>
            </div>
          </div>

          <hr className="product-divider" />

          <div className="product-price">
            <ins className="new-price">
              {currency.currency_symbol}{" "}
              {product.price * currency.currency_rate}
            </ins>
          </div>

          {/* <div className="ratings-container">
            <div className="ratings-full">
              <span
                className="ratings"
                style={{ width: `${parseInt(product.rating) * 20}%` }}
              ></span>
              <span className="tooltiptext tooltip-top"></span>
            </div>
            <a href="#product-tab-reviews" className="rating-reviews scroll-to">
              (3 Reviews)
            </a>
          </div> */}

          <div className="product-short-desc">
            <ul className="list-type-check list-style-none">
              <li>{product.short_description}</li>
            </ul>
          </div>

          <hr className="product-divider" />
          {product.product_combinations[0]?.product_attribute?.title === undefined && product.product_combinations[0]?.product_attribute?.title ===
            "Color" && (
            <div className="product-form product-variation-form product-color-swatch">
              <label>Colors:</label>
              <div className="d-flex align-items-center product-variations">
                {product.product_combinations[0].product_attribute.title ===
                  "Color" &&
                  product.product_combinations.map((itemCombination) => (
                    <a
                      onClick={() => setSelectedCombination(itemCombination)}
                      key={itemCombination.id.toString()}
                      href="#"
                      className="color"
                      style={{
                        backgroundColor:
                          itemCombination.product_attribute_color_code,
                      }}
                    ></a>
                  ))}
              </div>
            </div>
          )}
          {product.product_combinations[0]?.product_attribute?.title ===
            "Flavour" &&
            product.product_combinations[0].variant.length > 0 && (
              <div className="product-form product-variation-form product-size-swatch mb-3">
                <label className="mb-1">Flavours:</label>
                <div className="flex-wrap d-flex align-items-center product-variations">
                  {product.product_combinations[0].variant.map(
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
                  {selectedCombination.variant.map((varientItem) => (
                    <a
                      href="#"
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
                  ))}
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

          <div className="fix-bottom product-sticky-content sticky-content">
            <div className="product-form container">
              <div className="product-qty-form">
                <div className="input-group">
                  <input
                    className="quantity form-control"
                    type="number"
                    min="1"
                    max="10000000"
                    value={selectedItem.quantity}
                    onChange={() => {}}
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
                            quantity: (selectedItem.quantity -= 1),
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
          </div>

          <div className="social-links-wrapper">
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
              >
                <span></span>
              </a>
              <a
                onClick={handleAddToComparelist}
                href="#"
                className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
              >
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;
