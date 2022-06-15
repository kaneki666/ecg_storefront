import React from "react";
import { useSelector } from "react-redux";
import { CartItemProps, RootAppStateProps } from "../../utils/types/reduxTypes";
import NavCartItem from "./NavCartItem";

const NavbarCart = () => {
  const { cart, totalPrice } = useSelector(
    (state: RootAppStateProps) => state.ProductReducer
  );

  const { currency } = useSelector(
    (state: RootAppStateProps) => state.AuthReducer
  );

  return (
    <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
      <div className="cart-overlay"></div>
      <a href="#" className="cart-toggle label-down link">
        <i className="w-icon-cart">
          <span className="cart-count">{cart.length}</span>
        </i>
        <span className="cart-label">Cart</span>
      </a>
      <div className="dropdown-box">
        <div className="cart-header">
          <span>Shopping Cart</span>
          <a href="#" className="btn-close">
            Close<i className="w-icon-long-arrow-right"></i>
          </a>
        </div>

        <div className="products">
          {cart && cart.length > 2
            ? cart
                .slice(0, 2)
                .map((cartItem: CartItemProps) => (
                  <NavCartItem
                    key={cartItem.id.toString()}
                    cartItem={cartItem}
                  />
                ))
            : cart.map((cartItem: CartItemProps) => (
                <NavCartItem key={cartItem.id.toString()} cartItem={cartItem} />
              ))}
        </div>

        <div className="cart-total">
          <label>Subtotal:</label>
          <span className="price">
            {currency.currency_symbol} {totalPrice * currency.currency_rate}
          </span>
        </div>

        <div className="cart-action">
          <a href="cart" className="btn btn-dark btn-outline btn-rounded">
            View Cart
          </a>
          <a href="checkout" className="btn btn-primary  btn-rounded">
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarCart;
