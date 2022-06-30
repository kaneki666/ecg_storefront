import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../../store/products/actions";
import { RootAppStateProps } from "../../utils/types/reduxTypes";

const ProductQuickView = () => {
  const product = useSelector(
    (state: RootAppStateProps) => state.ProductReducer.product
  );

  const dispatch = useDispatch();
  let [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product) {
      const cartItem = {
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        quantity: quantity,
        price: product.unit_price,
        totalPrice: product.unit_price,
      };

      dispatch(addToCartAction(cartItem));
    }
  };
  return (
    <div className="product product-single product-popup">
      <div className="row gutter-lg">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="product-gallery product-gallery-sticky">
            <div className="swiper-container product-single-swiper swiper-theme nav-inner">
              <div className="swiper-wrapper row cols-1 gutter-no">
                {/* {product?.product_media.map((item, index) => (
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
                ))} */}

                  <div className="swiper-slide">
                    <figure className="product-image">
                      <img
                        src={product?.thumbnail}
                        data-zoom-image="/images/demos/demo1/products/1-1-800x900.jpg"
                        alt="Product Image"
                        width="800"
                        height="900"
                      />
                    </figure>
                  </div>
              </div>
              <button className="swiper-button-next"></button>
              <button className="swiper-button-prev"></button>
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
                {/* {product?.product_media.map((item, index) => (
                  <div className="product-thumb swiper-slide" key={item.id}>
                    <img
                      src={item.file}
                      alt="Product Image"
                      width="103"
                      height="116"
                    />
                  </div>
                ))} */}
                <div className="swiper-slide">
                    <figure className="product-image">
                      <img
                        src={product?.thumbnail}
                        data-zoom-image="/images/demos/demo1/products/1-1-800x900.jpg"
                        alt="Product Image"
                        width="800"
                        height="900"
                      />
                    </figure>
                  </div>
              </div>
              <button className="swiper-button-next"></button>
              <button className="swiper-button-prev"></button>
            </div>
          </div>
        </div>
        <div className="col-md-6 overflow-hidden p-relative">
          <div className="product-details scrollable pl-0">
            <h2 className="product-title">{product?.title}</h2>
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
                    <a href="#"> {product?.category_name}</a>
                  </span>
                </div>
                <div className="product-sku">
                  SKU: <span>MS46891340</span>
                </div>
              </div>
            </div>

            <hr className="product-divider" />

            <div className="product-price">${product?.unit_price}</div>

            {/* <div className="ratings-container">
              <div className="ratings-full">
                {product && (
                  <span
                    className="ratings"
                    style={{ width: `${parseInt(product?.rating) * 20}%` }}
                  ></span>
                )}
                <span className="tooltiptext tooltip-top"></span>
              </div>
              <a href="#" className="rating-reviews">
                (3 Reviews)
              </a>
            </div> */}

            <div className="product-short-desc">
              <ul className="list-type-check list-style-none">
                <li> {product?.short_description}</li>
                <li>Volutpat ac tincidunt vitae semper quis lectus.</li>
                <li>Aliquam id diam maecenas ultricies mi eget mauris.</li>
              </ul>
            </div>

            <hr className="product-divider" />

            <div className="product-form product-variation-form product-color-swatch">
              <label>Color:</label>
              <div className="d-flex align-items-center product-variations">
                <a
                  href="#"
                  className="color"
                  style={{ backgroundColor: "#ffcc01" }}
                ></a>
                <a
                  href="#"
                  className="color"
                  style={{ backgroundColor: "#ca6d00" }}
                ></a>
                <a
                  href="#"
                  className="color"
                  style={{ backgroundColor: "#1c93cb" }}
                ></a>
                <a
                  href="#"
                  className="color"
                  style={{ backgroundColor: "#ccc" }}
                ></a>
                <a
                  href="#"
                  className="color"
                  style={{ backgroundColor: "#333" }}
                ></a>
              </div>
            </div>
            <div className="product-form product-variation-form product-size-swatch">
              <label className="mb-1">Size:</label>
              <div className="flex-wrap d-flex align-items-center product-variations">
                <a href="#" className="size">
                  Small
                </a>
                <a href="#" className="size">
                  Medium
                </a>
                <a href="#" className="size">
                  Large
                </a>
                <a href="#" className="size">
                  Extra Large
                </a>
              </div>
              <a href="#" className="product-variation-clean">
                Clean All
              </a>
            </div>

            <div className="product-variation-price">
              <span></span>
            </div>

            <div className="product-form">
              <div className="product-qty-form">
                <div className="input-group">
                  <input
                    className="quantity form-control"
                    type="number"
                    min="1"
                    max="10000000"
                    value={quantity}
                    onChange={() => {}}
                  />
                  <button
                    onClick={() => setQuantity((quantity += 1))}
                    className="quantity-plus w-icon-plus"
                  ></button>
                  <button
                    onClick={() =>
                      quantity > 1 ? setQuantity((quantity -= 1)) : ""
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
                  href="#"
                  className="btn-product-icon btn-wishlist w-icon-heart"
                >
                  <span></span>
                </a>
                <a
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
    </div>
  );
};

export default ProductQuickView;
