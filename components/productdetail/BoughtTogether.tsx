import React from "react";

const BoughtTogether = () => {
  return (
    <div className="frequently-bought-together mt-5">
      <h2 className="title title-underline">Frequently Bought Together</h2>
      <div className="bought-together-products row mt-8 pb-4">
        <div className="product product-wrap text-center">
          <figure className="product-media">
            <img
              src="/images/products/default/bought-1.jpg"
              alt="Product"
              width="138"
              height="138"
            />
            <div className="product-checkbox">
              <input
                type="checkbox"
                className="custom-checkbox"
                id="product_check1"
                name="product_check1"
              />
              <label></label>
            </div>
          </figure>
          <div className="product-details">
            <h4 className="product-name">
              <a href="#">Electronics Black Wrist Watch</a>
            </h4>
            <div className="product-price">$40.00</div>
          </div>
        </div>
        <div className="product product-wrap text-center">
          <figure className="product-media">
            <img
              src="/images/products/default/bought-2.jpg"
              alt="Product"
              width="138"
              height="138"
            />
            <div className="product-checkbox">
              <input
                type="checkbox"
                className="custom-checkbox"
                id="product_check2"
                name="product_check2"
              />
              <label></label>
            </div>
          </figure>
          <div className="product-details">
            <h4 className="product-name">
              <a href="#">Apple Laptop</a>
            </h4>
            <div className="product-price">$1,800.00</div>
          </div>
        </div>
        <div className="product product-wrap text-center">
          <figure className="product-media">
            <img
              src="/images/products/default/bought-3.jpg"
              alt="Product"
              width="138"
              height="138"
            />
            <div className="product-checkbox">
              <input
                type="checkbox"
                className="custom-checkbox"
                id="product_check3"
                name="product_check3"
              />
              <label></label>
            </div>
          </figure>
          <div className="product-details">
            <h4 className="product-name">
              <a href="#">White Lenovo Headphone</a>
            </h4>
            <div className="product-price">$34.00</div>
          </div>
        </div>
        <div className="product-button">
          <div className="bought-price font-weight-bolder text-primary ls-50">
            $1,874.00
          </div>
          <div className="bought-count">For 3 items</div>
          <a href="cart.html" className="btn btn-dark btn-rounded">
            Add All To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default BoughtTogether;
