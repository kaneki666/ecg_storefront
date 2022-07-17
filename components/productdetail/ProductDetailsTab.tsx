import React from "react";
import { SingleProductProps } from "../../utils/types/landingpage";
import CustomerReview from "./CustomerReview";

const ProductDetailsTab = ({ product }: { product: SingleProductProps }) => {

  return (
    <div className="tab tab-nav-boxed tab-nav-underline product-tabs">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <a href="#product-tab-description" className="nav-link active">
            Description
          </a>
        </li>
        <li className="nav-item">
          <a href="#product-tab-specification" className="nav-link">
            Specification
          </a>
        </li>
        <li className="nav-item">
          <a href="#product-tab-vendor" className="nav-link">
            Vendor Info
          </a>
        </li>
        <li className="nav-item">
          <a href="#product-tab-reviews" className="nav-link">
            Customer Reviews ({product.product_reviews.length})
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane active" id="product-tab-description">
          <div className="row mb-4">
            <div className="col-md-6 mb-5">
              <h4 className="title tab-pane-title font-weight-bold mb-2">
                Detail
              </h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt arcu cursus vitae congue mauris.
                Sagittis id consectetur purus ut. Tellus rutrum tellus pelle Vel
                pretium lectus quam id leo in vitae turpis massa.
              </p>
              <ul className="list-type-check">
                <li>
                  Nunc nec porttitor turpis. In eu risus enim. In vitae mollis
                  elit.
                </li>
                <li>Vivamus finibus vel mauris ut vehicula.</li>
                <li>
                  Nullam a magna porttitor, dictum risus nec, faucibus sapien.
                </li>
              </ul>
            </div>
            <div className="col-md-6 mb-5">
              <div className="banner banner-video product-video br-xs">
                <figure className="banner-media">
                  <a href="#">
                    <img
                      src="/images/products/video-banner-610x300.jpg"
                      alt="banner"
                      width="610"
                      height="300"
                      style={{ backgroundColor: "#bebebe" }}
                    />
                  </a>
                  <a
                    className="btn-play-video btn-iframe"
                    href="/video/memory-of-a-woman.mp4"
                  ></a>
                </figure>
              </div>
            </div>
          </div>
          <div className="row cols-md-3">
            <div className="mb-3">
              <h5 className="sub-title font-weight-bold">
                <span className="mr-3">1.</span>Free Shipping &amp; Return
              </h5>
              <p className="detail pl-5">
                We offer free shipping for products on orders above 50$ and
                offer free delivery for all orders in US.
              </p>
            </div>
            <div className="mb-3">
              <h5 className="sub-title font-weight-bold">
                <span>2.</span>Free and Easy Returns
              </h5>
              <p className="detail pl-5">
                We guarantee our products and you could get back all of your
                money anytime you want in 30 days.
              </p>
            </div>
            <div className="mb-3">
              <h5 className="sub-title font-weight-bold">
                <span>3.</span>Special Financing
              </h5>
              <p className="detail pl-5">
                Get 20%-50% off items over 50$ for a month or over 250$ for a
                year with our special credit card.
              </p>
            </div>
          </div>
        </div>
        <div className="tab-pane" id="product-tab-specification">
          <ul className="list-none">
            <li>
              <label>Model</label>
              <p>Skysuite 320</p>
            </li>
            <li>
              <label>Color</label>
              <p>Black</p>
            </li>
            <li>
              <label>Size</label>
              <p>Large, Small</p>
            </li>
            <li>
              <label>Guarantee Time</label>
              <p>3 Months</p>
            </li>
          </ul>
        </div>
        <div className="tab-pane" id="product-tab-vendor">
          <div className="row mb-3">
            <div className="col-md-6 mb-4">
              <figure className="vendor-banner br-sm">
                <img
                  src="/images/products/vendor-banner.jpg"
                  alt="Vendor Banner"
                  width="610"
                  height="295"
                  style={{ backgroundColor: "#353B55" }}
                />
              </figure>
            </div>
            <div className="col-md-6 pl-2 pl-md-6 mb-4">
              <div className="vendor-user">
                <figure className="vendor-logo mr-4">
                  <a href="#">
                    <img
                      src="/images/products/vendor-logo.jpg"
                      alt="Vendor Logo"
                      width="80"
                      height="80"
                    />
                  </a>
                </figure>
                <div>
                  <div className="vendor-name">
                    <a href="#">Jone Doe</a>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "90%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="#" className="rating-reviews">
                      (32 Reviews)
                    </a>
                  </div>
                </div>
              </div>
              <ul className="vendor-info list-style-none">
                <li className="store-name">
                  <label>Store Name:</label>
                  <span className="detail">OAIO Store</span>
                </li>
                <li className="store-address">
                  <label>Address:</label>
                  <span className="detail">
                    Steven Street, El Carjon, CA 92020, United States (US)
                  </span>
                </li>
                <li className="store-phone">
                  <label>Phone:</label>
                  <a href="#tel:">1234567890</a>
                </li>
              </ul>
              <a
                href="#"
                className="btn btn-dark btn-link btn-underline btn-icon-right"
              >
                Visit Store<i className="w-icon-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <p className="mb-5">
            <strong className="text-dark">L</strong>orem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Venenatis tellus in metus vulputate
            eu scelerisque felis. Vel pretium lectus quam id leo in vitae turpis
            massa. Nunc id cursus metus aliquam. Libero id faucibus nisl
            tincidunt eget. Aliquam id diam maecenas ultricies mi eget mauris.
            Volutpat ac tincidunt vitae semper quis lectus. Vestibulum mattis
            ullamcorper velit sed. A arcu cursus vitae congue mauris.
          </p>
          <p className="mb-2">
            <strong className="text-dark">A</strong> arcu cursus vitae congue
            mauris. Sagittis id consectetur purus ut. Tellus rutrum tellus
            pellentesque eu tincidunt tortor aliquam nulla. Diam in arcu cursus
            euismod quis. Eget sit amet tellus cras adipiscing enim eu. In
            fermentum et sollicitudin ac orci phasellus. A condimentum vitae
            sapien pellentesque habitant morbi tristique senectus et. In dictum
            non consectetur a erat. Nunc scelerisque viverra mauris in aliquam
            sem fringilla.
          </p>
        </div>
        <div className="tab-pane" id="product-tab-reviews">
          <div className="row mb-4">
            <div className="col-xl-4 col-lg-5 mb-4">
              <div className="ratings-wrapper">
                <div className="avg-rating-container">
                  <h4 className="avg-mark font-weight-bolder ls-50">3.3</h4>
                  <div className="avg-rating">
                    <p className="text-dark mb-1">Average Rating</p>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span
                          className="ratings"
                          style={{ width: "90%" }}
                        ></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="#" className="rating-reviews">
                        (3 Reviews)
                      </a>
                    </div>
                  </div>
                </div>
                <div className="ratings-value d-flex align-items-center text-dark ls-25">
                  <span className="text-dark font-weight-bold">66.7%</span>
                  Recommended<span className="count">(2 of 3)</span>
                </div>
                <div className="ratings-list">
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "90%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <div className="progress-bar progress-bar-sm ">
                      <span></span>
                    </div>
                    <div className="progress-value">
                      <mark>70%</mark>
                    </div>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "90%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <div className="progress-bar progress-bar-sm ">
                      <span></span>
                    </div>
                    <div className="progress-value">
                      <mark>30%</mark>
                    </div>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "90%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <div className="progress-bar progress-bar-sm ">
                      <span></span>
                    </div>
                    <div className="progress-value">
                      <mark>40%</mark>
                    </div>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "90%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <div className="progress-bar progress-bar-sm ">
                      <span></span>
                    </div>
                    <div className="progress-value">
                      <mark>0%</mark>
                    </div>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "90%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <div className="progress-bar progress-bar-sm ">
                      <span></span>
                    </div>
                    <div className="progress-value">
                      <mark>0%</mark>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 mb-4">
              <div className="review-form-wrapper">
                <h3 className="title tab-pane-title font-weight-bold mb-1">
                  Submit Your Review
                </h3>
                <p className="mb-3">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form action="#" method="POST" className="review-form">
                  <div className="rating-form">
                    <label htmlFor="rating">
                      Your Rating Of This Product :
                    </label>
                    <span className="rating-stars">
                      <a className="star-1" href="#">
                        1
                      </a>
                      <a className="star-2" href="#">
                        2
                      </a>
                      <a className="star-3" href="#">
                        3
                      </a>
                      <a className="star-4" href="#">
                        4
                      </a>
                      <a className="star-5" href="#">
                        5
                      </a>
                    </span>
                    <select
                      name="rating"
                      id="rating"
                      required={true}
                      style={{ display: "none" }}
                    >
                      <option value="">Rate…</option>
                      <option value="5">Perfect</option>
                      <option value="4">Good</option>
                      <option value="3">Average</option>
                      <option value="2">Not that bad</option>
                      <option value="1">Very poor</option>
                    </select>
                  </div>
                  <textarea
                    cols={30}
                    rows={6}
                    placeholder="Write Your Review Here..."
                    className="form-control"
                    id="review"
                  ></textarea>
                  <div className="row gutter-md">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        id="author"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email"
                        id="email_1"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="save-checkbox"
                    />
                    <label htmlFor="save-checkbox">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          </div>

          <CustomerReview product={product}/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsTab;
