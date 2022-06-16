import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCartAction } from "../../store/products/actions";
import { CartItemProps, RootAppStateProps } from "../../utils/types/reduxTypes";

const NavCartItem = ({ cartItem }: { cartItem: CartItemProps }) => {
  const dispatch = useDispatch();

  const { currency } = useSelector(
    (state: RootAppStateProps) => state.AuthReducer
  );

  const handleDeleteItemFromCart = () =>
    dispatch(deleteItemFromCartAction(cartItem.id));
  return (
    <div className="product product-cart">
      <div className="product-detail">
        <a href="#" className="product-name">
          {cartItem.title}
          {/* <br />
          tic runner shoes */}
        </a>
        <div className="price-box">
          <span className="product-quantity">{cartItem.quantity}</span>
          <span className="product-price">
            {currency.currency_symbol} {cartItem.price * currency.currency_rate}
          </span>
        </div>
      </div>
      <figure className="product-media">
        <a href="#">
          <img src={cartItem.thumbnail} alt="product" height="84" width="94" />
        </a>
      </figure>
      <button
        style={{ position: "absolute", right: 68 }}
        onClick={handleDeleteItemFromCart}
        className="btn btn-link btn-close"
        aria-label="button"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default NavCartItem;
