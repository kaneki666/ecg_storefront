import { SingleProductProps } from "../../utils/types/landingpage";
import { CartItemProps } from "../../utils/types/reduxTypes";
import {
  ADD_PRODUCT_QUICKVIEW,
  ADD_PRODUCT_RECENTVIEW,
  ADD_TO_CART,
  APPLY_COUPON,
  CLEAR_CART,
  REMOVE_FROM_CART,
  REMOVE_ITEM_FROM_CART,
} from "./types";

export const addToQuickViewAction = (product: SingleProductProps) => {
  return (
    dispatch: (arg0: { type: string; payload: SingleProductProps }) => void
  ) => {
    dispatch({
      type: ADD_PRODUCT_QUICKVIEW,
      payload: product,
    });
  };
};

export const addToCartAction = (product: CartItemProps) => {
  return (
    dispatch: (arg0: { type: string; payload: CartItemProps }) => void
  ) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };
};

export const removeFromCartAction = (product: CartItemProps) => {
  return (
    dispatch: (arg0: { type: string; payload: CartItemProps }) => void
  ) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: product,
    });
  };
};

export const deleteItemFromCartAction = (id: number) => {
  return (dispatch: (arg0: { type: string; payload: number }) => void) => {
    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      payload: id,
    });
  };
};

export const addCouponAction = (value: number) => {
  return (dispatch: (arg0: { type: string; payload: number }) => void) => {
    dispatch({
      type: APPLY_COUPON,
      payload: value,
    });
  };
};

export const clearCartAction = (id: boolean) => {
  return (dispatch: (arg0: { type: string; payload: boolean }) => void) => {
    dispatch({
      type: CLEAR_CART,
      payload: id,
    });
  };
};

export const addToRecentViewAction = (product: SingleProductProps) => {
  return (
    dispatch: (arg0: { type: string; payload: SingleProductProps }) => void
  ) => {
    dispatch({
      type: ADD_PRODUCT_RECENTVIEW,
      payload: product,
    });
  };
};
