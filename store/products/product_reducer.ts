import { SingleProductProps } from "./../../utils/types/landingpage";
import {
  CartItemProps,
  QickViewStateProps,
} from "./../../utils/types/reduxTypes";
import { AnyAction } from "redux";

import {
  ADD_PRODUCT_QUICKVIEW,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ITEM_FROM_CART,
} from "./types";

const initialState: QickViewStateProps = {
  product: null,
  cart: [],
};

export const ProductReducer = (
  state = initialState,

  action: AnyAction
): QickViewStateProps => {
  switch (action.type) {
    case ADD_PRODUCT_QUICKVIEW:
      return { ...state, product: action.payload };

    case ADD_TO_CART:
      const cartItems = state.cart;
      const newItem: CartItemProps = action.payload;

      const findIndex = cartItems.findIndex(
        (item: CartItemProps) => item.id === newItem.id
      );
      if (findIndex === -1) {
        cartItems.push(newItem);
      } else {
        cartItems[findIndex].quantity += newItem.quantity;
        cartItems[findIndex].totalPrice =
          cartItems[findIndex].quantity * newItem.price;
      }

      return { ...state, cart: cartItems };

    case REMOVE_FROM_CART:
      const cartItemsRemove = state.cart;
      const newItemRemove: CartItemProps = action.payload;

      const findIndexRemove = cartItemsRemove.findIndex(
        (item: CartItemProps) => item.id === newItemRemove.id
      );

      if (cartItemsRemove[findIndexRemove].quantity > 1) {
        cartItemsRemove[findIndexRemove].quantity -= 1;
        cartItemsRemove[findIndexRemove].totalPrice =
          cartItemsRemove[findIndexRemove].quantity * newItemRemove.price;
      } else {
        cartItemsRemove.splice(findIndexRemove, 1);
      }

      return { ...state, cart: cartItemsRemove };

    case REMOVE_ITEM_FROM_CART:
      const cartItemsToRemove = state.cart;
      const findIndexToRemove = cartItemsToRemove.findIndex(
        (item: CartItemProps) => item.id === action.payload
      );
      cartItemsToRemove.splice(findIndexToRemove, 1);
      return { ...state, cart: cartItemsToRemove };

    default:
      return state;
  }
};
