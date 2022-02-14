import React from "react";
import { SingleProductProps } from "../../utils/types/landingpage";

const ProductSingle = ({ product }: { product: SingleProductProps }) => {
  return (
    <div className="product product-single row">
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
              <div className="swiper-slide">
                <figure className="product-image">
                  <img
                    src={product.thumbnail}
                    data-zoom-image="/images/products/default/1-800x900.jpg"
                    alt="Electronics Black Wrist Watch"
                    width="800"
                    height="900"
                  />
                </figure>
              </div>
              <div className="swiper-slide">
                <figure className="product-image">
                  <img
                    src={product.thumbnail}
                    data-zoom-image="/images/products/default/2-800x900.jpg"
                    alt="Electronics Black Wrist Watch"
                    width="488"
                    height="549"
                  />
                </figure>
              </div>
              <div className="swiper-slide">
                <figure className="product-image">
                  <img
                    src={product.thumbnail}
                    data-zoom-image="/images/products/default/3-800x900.jpg"
                    alt="Electronics Black Wrist Watch"
                    width="800"
                    height="900"
                  />
                </figure>
              </div>
              <div className="swiper-slide">
                <figure className="product-image">
                  <img
                    src={product.thumbnail}
                    data-zoom-image="/images/products/default/4-800x900.jpg"
                    alt="Electronics Black Wrist Watch"
                    width="800"
                    height="900"
                  />
                </figure>
              </div>
              <div className="swiper-slide">
                <figure className="product-image">
                  <img
                    src={product.thumbnail}
                    data-zoom-image="/images/products/default/5-800x900.jpg"
                    alt="Electronics Black Wrist Watch"
                    width="800"
                    height="900"
                  />
                </figure>
              </div>
              <div className="swiper-slide">
                <figure className="product-image">
                  <img
                    src={product.thumbnail}
                    data-zoom-image="/images/products/default/6-800x900.jpg"
                    alt="Electronics Black Wrist Watch"
                    width="800"
                    height="900"
                  />
                </figure>
              </div>
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
              <div className="product-thumb swiper-slide">
                <img
                  src={product.thumbnail}
                  alt="Product Thumb"
                  width="800"
                  height="900"
                />
              </div>
              <div className="product-thumb swiper-slide">
                <img
                  src={product.thumbnail}
                  alt="Product Thumb"
                  width="800"
                  height="900"
                />
              </div>
              <div className="product-thumb swiper-slide">
                <img
                  src={product.thumbnail}
                  alt="Product Thumb"
                  width="800"
                  height="900"
                />
              </div>
              <div className="product-thumb swiper-slide">
                <img
                  src={product.thumbnail}
                  alt="Product Thumb"
                  width="800"
                  height="900"
                />
              </div>
              <div className="product-thumb swiper-slide">
                <img
                  src={product.thumbnail}
                  alt="Product Thumb"
                  width="800"
                  height="900"
                />
              </div>
              <div className="product-thumb swiper-slide">
                <img
                  src={product.thumbnail}
                  alt="Product Thumb"
                  width="800"
                  height="900"
                />
              </div>
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
                  <a href="#">Electronics</a>
                </span>
              </div>
              <div className="product-sku">
                SKU: <span>MS46891340</span>
              </div>
            </div>
          </div>

          <hr className="product-divider" />

          <div className="product-price">
            <ins className="new-price">${product.price}</ins>
          </div>

          <div className="ratings-container">
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
          </div>

          <div className="product-short-desc">
            <ul className="list-type-check list-style-none">
              <li>{product.short_description}</li>
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

          <div className="fix-bottom product-sticky-content sticky-content">
            <div className="product-form container">
              <div className="product-qty-form">
                <div className="input-group">
                  <input
                    className="quantity form-control"
                    type="number"
                    min="1"
                    max="10000000"
                  />
                  <button className="quantity-plus w-icon-plus"></button>
                  <button className="quantity-minus w-icon-minus"></button>
                </div>
              </div>
              <button className="btn btn-primary btn-cart">
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
  );
};

export default ProductSingle;
