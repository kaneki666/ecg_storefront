import React from "react";

const CheckoutBreadcrumb = () => {
  return (
    <div>
      <nav className="breadcrumb-nav">
        <div className="container">
          <ul className="breadcrumb shop-breadcrumb bb-no">
            <li className="passed">
              <a href="cart">Shopping Cart</a>
            </li>
            <li className="active">
              <a href="checkout">Checkout</a>
            </li>
            <li>
              <a href="order">Order Complete</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default CheckoutBreadcrumb;
