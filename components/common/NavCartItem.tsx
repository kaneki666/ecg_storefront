import React from "react";
import { CartItemProps } from "../../utils/types/reduxTypes";

const NavCartItem = ({ cartItem }: { cartItem: CartItemProps }) => {
  return (
    <div className="product product-cart">
      <div className="product-detail">
        <a href="product-default.html" className="product-name">
          {cartItem.title}
          {/* <br />
          tic runner shoes */}
        </a>
        <div className="price-box">
          <span className="product-quantity">{cartItem.quantity}</span>
          <span className="product-price">${cartItem.price}</span>
        </div>
      </div>
      <figure className="product-media">
        <a href="product-default.html">
          <img src={cartItem.thumbnail} alt="product" height="84" width="94" />
        </a>
      </figure>
      <button className="btn btn-link btn-close" aria-label="button">
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default NavCartItem;
