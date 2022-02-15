import React from "react";

const BreadCrumbCart = () => {
  return (
    <nav className="breadcrumb-nav">
      <div className="container">
        <ul className="breadcrumb shop-breadcrumb bb-no">
          <li className="active">
            <a href="cart">Shopping Cart</a>
          </li>
          <li>
            <a href="checkout">Checkout</a>
          </li>
          <li>
            <a href="order">Order Complete</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BreadCrumbCart;
