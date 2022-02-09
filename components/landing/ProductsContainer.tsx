import React from "react";
import ProductCategorize from "./ProductCategorize";

const ProductsContainer = () => {
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
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-1-1.jpg"
                      alt="Product"
                      width="300"
                      height="338"
                    />
                    <img
                      src="/images/demos/demo1/products/3-1-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">classNameic Hat</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (1 Reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$53.00</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Women’s White Handbag</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "80%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (3 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$26.62</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-3.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                      Multi Funtional Apple iPhone
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
                    <a href="product-default.html" className="rating-reviews">
                      (5 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">136.26</ins>
                    <del className="old-price">$145.90</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-4-1.jpg"
                      alt="Product"
                      width="300"
                      height="338"
                    />
                    <img
                      src="/images/demos/demo1/products/3-4-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Fashion Blue Towel</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (8 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$26.55 - $29.99</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-5.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                      4% Off
                    </label>
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name">
                    <a href="product-default.html">Apple Super Notecom</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (4 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$243.30</ins>
                    <del className="old-price">$253.50</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-6-1.jpg"
                      alt="Product"
                      width="300"
                      height="338"
                    />
                    <img
                      src="/images/demos/demo1/products/3-6-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Women’s Comforter</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (10 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$32.00 - $33.26</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-7.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Multi-colorful Music</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (3 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$260.59 - $297.83</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-8-1.jpg"
                      alt="Product"
                      width="300"
                      height="338"
                    />
                    <img
                      src="/images/demos/demo1/products/3-8-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Comfortable Backpack</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (6 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$45.90</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-9.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (3 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <span className="price">$64.47</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-10.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Women’s hairdye</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (3 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <span className="price">$173.84</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End of Tab Pane --> */}
        <div className="tab-pane pt-4" id="tab1-2">
          <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-4-1.jpg"
                      alt="Product"
                      width="300"
                      height="338"
                    />
                    <img
                      src="/images/demos/demo1/products/3-4-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Fashion Blue Towel</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (8 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$26.55 - $29.99</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-3.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                      Multi Funtional Apple iPhone
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
                    <a href="product-default.html" className="rating-reviews">
                      (5 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">136.26</ins>
                    <del className="old-price">$145.90</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-8-1.jpg"
                      alt="Product"
                      width="300"
                      height="338"
                    />
                    <img
                      src="/images/demos/demo1/products/3-8-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Comfortable Backpack</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (6 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$45.90</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-9.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (3 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <span className="price">$64.47</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-5.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                      4% Off
                    </label>
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name">
                    <a href="product-default.html">Apple Super Notecom</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (4 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$243.30</ins>
                    <del className="old-price">$253.50</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-6-1.jpg"
                      alt="Product"
                      width="300"
                      height="338"
                    />
                    <img
                      src="/images/demos/demo1/products/3-6-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Women’s Comforter</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (10 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$32.00 - $33.26</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-7.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Multi-colorful Music</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (3 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$260.59 - $297.83</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-1-1.jpg"
                      alt="Product"
                      width="300"
                      height="338"
                    />
                    <img
                      src="/images/demos/demo1/products/3-1-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">classNameic Hat</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (1 Reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$53.00</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Women’s White Handbag</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "80%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (3 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$26.62</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-10.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Women’s hairdye</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (3 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <span className="price">$173.84</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End of Tab Pane --> */}
        <div className="tab-pane pt-4" id="tab1-3">
          <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-9.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (3 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <span className="price">$64.47</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-1-1.jpg"
                      alt="Product"
                      width="300"
                      height="338"
                    />
                    <img
                      src="/images/demos/demo1/products/3-1-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">classNameic Hat</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (1 Reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$53.00</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-3.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                      Multi Funtional Apple iPhone
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
                    <a href="product-default.html" className="rating-reviews">
                      (5 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">136.26</ins>
                    <del className="old-price">$145.90</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Women’s White Handbag</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "80%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (3 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$26.62</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-10.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Women’s hairdye</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (3 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <span className="price">$173.84</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-8-1.jpg"
                      alt="Product"
                      width="300"
                      height="338"
                    />
                    <img
                      src="/images/demos/demo1/products/3-8-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Comfortable Backpack</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (6 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$45.90</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-5.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                      4% Off
                    </label>
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name">
                    <a href="product-default.html">Apple Super Notecom</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (4 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$243.30</ins>
                    <del className="old-price">$253.50</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-7.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Multi-colorful Music</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (3 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$260.59 - $297.83</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-6-1.jpg"
                      alt="Product"
                      width="300"
                      height="338"
                    />
                    <img
                      src="/images/demos/demo1/products/3-6-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Women’s Comforter</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (10 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$32.00 - $33.26</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-4-1.jpg"
                      alt="Product"
                      width="300"
                      height="338"
                    />
                    <img
                      src="/images/demos/demo1/products/3-4-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Fashion Blue Towel</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (8 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$26.55 - $29.99</ins>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End of Tab Pane --> */}
        <div className="tab-pane pt-4" id="tab1-4">
          <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-4-1.jpg"
                      alt="Product"
                      width="300"
                      height="338"
                    />
                    <img
                      src="/images/demos/demo1/products/3-4-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Fashion Blue Towel</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (8 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$26.55 - $29.99</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-10.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Women’s hairdye</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (3 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <span className="price">$173.84</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-9.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html" className="rating-reviews">
                      (3 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <span className="price">$64.47</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-8-1.jpg"
                      alt="Product"
                      width="300"
                      height="338"
                    />
                    <img
                      src="/images/demos/demo1/products/3-8-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Comfortable Backpack</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (6 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$45.90</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Women’s White Handbag</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (3 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$26.62</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-5.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                      4% Off
                    </label>
                  </div>
                </figure>
                <div className="product-details">
                  <h4 className="product-name">
                    <a href="product-default.html">Apple Super Notecom</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (4 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$243.30</ins>
                    <del className="old-price">$253.50</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-3.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                      Multi Funtional Apple iPhone
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
                    <a href="product-default.html" className="rating-reviews">
                      (5 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">136.26</ins>
                    <del className="old-price">$145.90</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-7.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Multi-colorful Music</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (3 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$260.59 - $297.83</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-6-1.jpg"
                      alt="Product"
                      width="300"
                      height="338"
                    />
                    <img
                      src="/images/demos/demo1/products/3-6-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">Women’s Comforter</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (10 reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$32.00 - $33.26</ins>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="/images/demos/demo1/products/3-1-1.jpg"
                      alt="Product"
                      width="300"
                      height="338"
                    />
                    <img
                      src="/images/demos/demo1/products/3-1-2.jpg"
                      alt="Product"
                      width="300"
                      height="338"
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
                    <a href="product-default.html">classNameic Hat</a>
                  </h4>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (1 Reviews)
                    </a>
                  </div>
                  <div className="product-price">
                    <ins className="new-price">$53.00</ins>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End of Tab Pane --> */}
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
                href="shop-banner-sidebar.html"
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
                href="shop-banner-sidebar.html"
                className="btn btn-dark btn-link btn-underline btn-icon-right"
              >
                Shop Now<i className="w-icon-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End of Category Cosmetic Lifestyle --> */}

      <ProductCategorize/>
      {/* <!-- End of Product Wrapper 1 --> */}

      {/* <h2 className="title title-underline mb-4 ls-normal appear-animate">
        Our Clients
      </h2>
      <div
        className="swiper-container swiper-theme brands-wrapper mb-9 appear-animate"
        data-swiper-options="{
      'spaceBetween': 0,
      'slidesPerView': 2,
      'breakpoints': {
          '576': {
              'slidesPerView': 3
          },
          '768': {
              'slidesPerView': 4
          },
          '992': {
              'slidesPerView': 5
          },
          '1200': {
              'slidesPerView': 6
          }
      }
  }"
      >
        <div className="swiper-wrapper row gutter-no cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2">
          <div className="swiper-slide brand-col">
            <figure className="brand-wrapper">
              <img
                src="/images/demos/demo1/brands/1.png"
                alt="Brand"
                width="410"
                height="186"
              />
            </figure>
            <figure className="brand-wrapper">
              <img
                src="/images/demos/demo1/brands/2.png"
                alt="Brand"
                width="410"
                height="186"
              />
            </figure>
          </div>
          <div className="swiper-slide brand-col">
            <figure className="brand-wrapper">
              <img
                src="/images/demos/demo1/brands/3.png"
                alt="Brand"
                width="410"
                height="186"
              />
            </figure>
            <figure className="brand-wrapper">
              <img
                src="/images/demos/demo1/brands/4.png"
                alt="Brand"
                width="410"
                height="186"
              />
            </figure>
          </div>
          <div className="swiper-slide brand-col">
            <figure className="brand-wrapper">
              <img
                src="/images/demos/demo1/brands/5.png"
                alt="Brand"
                width="410"
                height="186"
              />
            </figure>
            <figure className="brand-wrapper">
              <img
                src="/images/demos/demo1/brands/6.png"
                alt="Brand"
                width="410"
                height="186"
              />
            </figure>
          </div>
          <div className="swiper-slide brand-col">
            <figure className="brand-wrapper">
              <img
                src="/images/demos/demo1/brands/7.png"
                alt="Brand"
                width="410"
                height="186"
              />
            </figure>
            <figure className="brand-wrapper">
              <img
                src="/images/demos/demo1/brands/8.png"
                alt="Brand"
                width="410"
                height="186"
              />
            </figure>
          </div>
          <div className="swiper-slide brand-col">
            <figure className="brand-wrapper">
              <img
                src="/images/demos/demo1/brands/9.png"
                alt="Brand"
                width="410"
                height="186"
              />
            </figure>
            <figure className="brand-wrapper">
              <img
                src="/images/demos/demo1/brands/10.png"
                alt="Brand"
                width="410"
                height="186"
              />
            </figure>
          </div>
          <div className="swiper-slide brand-col">
            <figure className="brand-wrapper">
              <img
                src="/images/demos/demo1/brands/11.png"
                alt="Brand"
                width="410"
                height="186"
              />
            </figure>
            <figure className="brand-wrapper">
              <img
                src="/images/demos/demo1/brands/12.png"
                alt="Brand"
                width="410"
                height="186"
              />
            </figure>
          </div>
        </div>
      </div> */}
      {/* <!-- End of Brands Wrapper --> */}

      {/* <div className="post-wrapper appear-animate mb-4">
        <div className="title-link-wrapper pb-1 mb-4">
          <h2 className="title ls-normal mb-0">From Our Blog</h2>
          <a
            href="blog-listing.html"
            className="font-weight-bold font-size-normal"
          >
            View All Articles
          </a>
        </div>
        <div className="swiper">
          <div
            className="swiper-container swiper-theme"
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
                      'slidesPerView': 4
                  }
              }
          }"
          >
            <div className="swiper-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-1">
              <div className="swiper-slide post text-center overlay-zoom">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <img
                      src="/images/demos/demo1/blogs/1.jpg"
                      alt="Post"
                      width="280"
                      height="180"
                      style={{ backgroundColor: "#4b6e91" }}
                    />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-meta">
                    by{" "}
                    <a href="#" className="post-author">
                      John Doe
                    </a>
                    -{" "}
                    <a href="#" className="post-date mr-0">
                      03.05.2021
                    </a>
                  </div>
                  <h4 className="post-title">
                    <a href="post-single.html">
                      Aliquam tincidunt mauris eurisus
                    </a>
                  </h4>
                  <a
                    href="post-single.html"
                    className="btn btn-link btn-dark btn-underline"
                  >
                    Read More<i className="w-icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="swiper-slide post text-center overlay-zoom">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <img
                      src="/images/demos/demo1/blogs/2.jpg"
                      alt="Post"
                      width="280"
                      height="180"
                      style={{ backgroundColor: "#cec9cf" }}
                    />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-meta">
                    by{" "}
                    <a href="#" className="post-author">
                      John Doe
                    </a>
                    -{" "}
                    <a href="#" className="post-date mr-0">
                      03.05.2021
                    </a>
                  </div>
                  <h4 className="post-title">
                    <a href="post-single.html">Cras ornare tristique elit</a>
                  </h4>
                  <a
                    href="post-single.html"
                    className="btn btn-link btn-dark btn-underline"
                  >
                    Read More<i className="w-icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="swiper-slide post text-center overlay-zoom">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <img
                      src="/images/demos/demo1/blogs/3.jpg"
                      alt="Post"
                      width="280"
                      height="180"
                      style={{ backgroundColor: "#c9c7bb" }}
                    />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-meta">
                    by{" "}
                    <a href="#" className="post-author">
                      John Doe
                    </a>
                    -{" "}
                    <a href="#" className="post-date mr-0">
                      03.05.2021
                    </a>
                  </div>
                  <h4 className="post-title">
                    <a href="post-single.html">
                      Vivamus vestibulum ntulla nec ante
                    </a>
                  </h4>
                  <a
                    href="post-single.html"
                    className="btn btn-link btn-dark btn-underline"
                  >
                    Read More<i className="w-icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="swiper-slide post text-center overlay-zoom">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <img
                      src="/images/demos/demo1/blogs/4.jpg"
                      alt="Post"
                      width="280"
                      height="180"
                      style={{ backgroundColor: "#d8dce0" }}
                    />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-meta">
                    by{" "}
                    <a href="#" className="post-author">
                      John Doe
                    </a>
                    -{" "}
                    <a href="#" className="post-date mr-0">
                      03.05.2021
                    </a>
                  </div>
                  <h4 className="post-title">
                    <a href="post-single.html">Fusce lacinia arcuet nulla</a>
                  </h4>
                  <a
                    href="post-single.html"
                    className="btn btn-link btn-dark btn-underline"
                  >
                    Read More<i className="w-icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div> */}
      {/* <!-- Post Wrapper --> */}

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
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src="/images/demos/demo1/products/7-1.jpg"
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">Women's Fashion Handbag</a>
              </h4>
            </div>
          </div>
          {/* <!-- End of Product Wrap --> */}
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src="/images/demos/demo1/products/7-2.jpg"
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">Electric Frying Pan</a>
              </h4>
            </div>
          </div>
          {/* <!-- End of Product Wrap --> */}
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src="/images/demos/demo1/products/7-3.jpg"
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">Black Winter Skating</a>
              </h4>
            </div>
          </div>
          {/* <!-- End of Product Wrap --> */}
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src="/images/demos/demo1/products/7-4.jpg"
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">HD Television</a>
              </h4>
            </div>
          </div>
          {/* <!-- End of Product Wrap --> */}
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src="/images/demos/demo1/products/7-5.jpg"
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">Home Sofa</a>
              </h4>
            </div>
          </div>
          {/* <!-- End of Product Wrap --> */}
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src="/images/demos/demo1/products/7-6.jpg"
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">USB Receipt</a>
              </h4>
            </div>
          </div>
          {/* <!-- End of Product Wrap --> */}
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src="/images/demos/demo1/products/7-7.jpg"
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">Electric Rice-Cooker</a>
              </h4>
            </div>
          </div>
          {/* <!-- End of Product Wrap --> */}
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src="/images/demos/demo1/products/7-8.jpg"
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">Table Lamp</a>
              </h4>
            </div>
          </div>
          {/* <!-- End of Product Wrap --> */}
        </div>
        <div className="swiper-pagination"></div>
      </div>
      {/* <!-- End of Reviewed Producs --> */}
    </div>
  );
};

export default ProductsContainer;
