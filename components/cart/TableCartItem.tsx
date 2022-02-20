import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartAction,
  deleteItemFromCartAction,
  removeFromCartAction,
} from "../../store/products/actions";
import { CartItemProps, RootAppStateProps } from "../../utils/types/reduxTypes";

const TableCartItem = ({ cartItem }: { cartItem: CartItemProps }) => {
  const dispatch = useDispatch();

  const { currency } = useSelector(
    (state: RootAppStateProps) => state.AuthReducer
  );

  const handleAddToCart = () =>
    dispatch(addToCartAction({ ...cartItem, quantity: 1 }));
  const handleRemoveFromCart = () => dispatch(removeFromCartAction(cartItem));
  const handleDeleteItemFromCart = () =>
    dispatch(deleteItemFromCartAction(cartItem.id));

  return (
    <tr>
      <td className="product-thumbnail">
        <div className="p-relative">
          <a href="#">
            <figure>
              <img
                src={cartItem.thumbnail}
                alt="product"
                width="300"
                height="338"
              />
            </figure>
          </a>
          <button onClick={handleDeleteItemFromCart} className="btn btn-close">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </td>
      <td className="product-name">
        <a href="#">{cartItem.title}</a>
      </td>
      <td className="product-price">
        <span className="amount">
          {currency.currency_symbol} {cartItem.price * currency.currency_rate}
        </span>
      </td>
      <td className="product-quantity">
        <div className="input-group">
          <p className="quantity form-control d-flex align-items-center">
            {cartItem.quantity}
          </p>
          <button
            onClick={handleAddToCart}
            className="quantity-plus w-icon-plus"
          ></button>
          <button
            onClick={handleRemoveFromCart}
            className="quantity-minus w-icon-minus"
          ></button>
        </div>
      </td>
      <td className="product-subtotal">
        <span className="amount">
          {" "}
          {currency.currency_symbol}
          {cartItem.totalPrice * currency.currency_rate}
        </span>
      </td>
    </tr>
  );
};

export default TableCartItem;
