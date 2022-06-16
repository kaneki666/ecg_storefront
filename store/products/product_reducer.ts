import { SingleProductProps } from "./../../utils/types/landingpage";
import {
  CartItemProps,
  ProductCartReducerStateProps,
} from "./../../utils/types/reduxTypes";
import { AnyAction } from "redux";

import {
  ADD_PRODUCT_COMPARE,
  ADD_PRODUCT_QUICKVIEW,
  ADD_PRODUCT_RECENTVIEW,
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  APPLY_COUPON,
  CLEAR_CART,
  INITILIZE_WISHLIST,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
  REMOVE_ITEM_FROM_CART,
} from "./types";

const initialState: ProductCartReducerStateProps = {
  product: null,
  cart: [],

  totalPrice: 0,
  usedCoupon: false,
  recentProducts: [],
  compareProducts: [],
};

export const ProductReducer = (
  state = initialState,

  action: AnyAction
): ProductCartReducerStateProps => {
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
      let total = cartItems.reduce(
        (prev, item: CartItemProps) => prev + item.totalPrice,
        0
      );
      return { ...state, cart: cartItems, totalPrice: total };

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
      let totalRemoved = cartItemsRemove.reduce(
        (prev, item: CartItemProps) => prev + item.totalPrice,
        0
      );
      return { ...state, cart: cartItemsRemove, totalPrice: totalRemoved };

    case REMOVE_ITEM_FROM_CART:
      const cartItemsToRemove = state.cart;
      const findIndexToRemove = cartItemsToRemove.findIndex(
        (item: CartItemProps) => item.id === action.payload
      );
      cartItemsToRemove.splice(findIndexToRemove, 1);
      let totalcartItemsToRemoved = cartItemsToRemove.reduce(
        (prev, item: CartItemProps) => prev + item.totalPrice,
        0
      );
      return {
        ...state,
        cart: cartItemsToRemove,
        totalPrice: totalcartItemsToRemoved,
      };

    case APPLY_COUPON:
      return {
        ...state,
        totalPrice: state.totalPrice - action.payload,
        usedCoupon: true,
      };

    case CLEAR_CART:
      return { ...state, cart: [], totalPrice: 0 };

    case ADD_PRODUCT_RECENTVIEW:
      var recentItems = state.recentProducts;
      const newRecentItem: SingleProductProps = action.payload;

      if (recentItems) {
        const findIndexRecent = recentItems.findIndex(
          (item: SingleProductProps) => item.id === newRecentItem.id
        );
        if (findIndexRecent === -1) {
          recentItems.push(newRecentItem);
        } else {
        }
      } else {
        recentItems = [];
        recentItems.push(newRecentItem);
      }
      return { ...state, recentProducts: recentItems };

    case ADD_PRODUCT_COMPARE:
      var compareItems = state.compareProducts;
      const newCompareItem: SingleProductProps = action.payload;

      if (compareItems) {
        const findIndexRecent = compareItems.findIndex(
          (item: SingleProductProps) => item.id === newCompareItem.id
        );
        if (compareItems.length == 3) {
          compareItems.slice(1);
          if (findIndexRecent === -1) {
            compareItems.push(newCompareItem);
          } else {
          }
        } else {
          if (findIndexRecent === -1) {
            compareItems.push(newCompareItem);
          } else {
          }
        }
      } else {
        compareItems = [];
        compareItems.push(newCompareItem);
      }
      return { ...state, compareProducts: compareItems };
    case INITILIZE_WISHLIST:
      return { ...state, wishlist: [] };
    case ADD_TO_WISHLIST:
      const addWishList = state.wishlist;
      const wishListItem = action.payload;

      const findIndexWishlist = addWishList?.findIndex(
        (item: SingleProductProps) => item.id === wishListItem.id
      );

      if (findIndexWishlist === -1) {
        addWishList?.push(wishListItem);
      } else {
        addWishList?.splice(findIndexWishlist!, 1);
      }

      return { ...state, wishlist: addWishList };
    case REMOVE_FROM_WISHLIST:
      const wishListItemRemove = action.payload;
      const findIndexWishlistRemove = state.wishlist?.findIndex(
        (item: SingleProductProps) => item.id === wishListItemRemove
      );

      state.wishlist?.splice(findIndexWishlistRemove!, 1);

      return { ...state, wishlist: state.wishlist };
    default:
      return state;
  }
};
