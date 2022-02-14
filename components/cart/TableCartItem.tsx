import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCartAction,
  deleteItemFromCartAction,
  removeFromCartAction,
} from "../../store/products/actions";
import { CartItemProps } from "../../utils/types/reduxTypes";

const TableCartItem = ({ cartItem }: { cartItem: CartItemProps }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => dispatch(addToCartAction(cartItem));
  const handleRemoveFromCart = () => dispatch(removeFromCartAction(cartItem));
  const handleDeleteItemFromCart = () =>
    dispatch(deleteItemFromCartAction(cartItem.id));
  return (
    <tr>
      <td className="product-thumbnail">
        <div className="p-relative">
          <a href="product-default.html">
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
        <a href="product-default.html">{cartItem.title}</a>
      </td>
      <td className="product-price">
        <span className="amount">${cartItem.price}</span>
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
        <span className="amount">${cartItem.totalPrice}</span>
      </td>
    </tr>
  );
};

export default TableCartItem;
