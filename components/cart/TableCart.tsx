import React from "react";
import { useSelector } from "react-redux";
import { CartItemProps, RootAppStateProps } from "../../utils/types/reduxTypes";
import TableCartItem from "./TableCartItem";

const TableCart = () => {
  const { cart } = useSelector(
    (state: RootAppStateProps) => state.ProductReducer
  );
  return (
    <table className="shop-table cart-table">
      <thead>
        <tr>
          <th className="product-name">
            <span>Product</span>
          </th>
          <th></th>
          <th className="product-price">
            <span>Price</span>
          </th>
          <th className="product-quantity">
            <span>Quantity</span>
          </th>
          <th className="product-subtotal">
            <span>Subtotal</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {cart &&
          cart.map((cartItem: CartItemProps) => (
            <TableCartItem cartItem={cartItem} />
          ))}
      </tbody>
    </table>
  );
};

export default TableCart;
