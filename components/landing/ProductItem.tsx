import Image from "next/image";
import React from "react";
import { SingleProductprops } from "../../utils/types/landingpage";

const ProductItem = ({ productItem }: { productItem: SingleProductprops }) => {
  return (
    <div className="product-wrap">
      <div className="product text-center">
        <figure className="product-media">
          <a href="#">
            <img
              src="/images/demos/demo1/products/3-2.jpg"
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
            <a href="product-default.html">{productItem.title}</a>
          </h4>
          <div className="ratings-container">
            <div className="ratings-full">
              <span
                className="ratings"
                style={{ width: `${parseInt(productItem.rating) * 20}%` }}
              ></span>
              <span className="tooltiptext tooltip-top"></span>
            </div>
            <a href="product-default.html" className="rating-reviews">
              (3 reviews)
            </a>
          </div>
          <div className="product-price">
            <ins className="new-price">${productItem.price}</ins>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
