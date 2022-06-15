import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartAction,
  addToQuickViewAction,
  addToWishlistAction,
} from "../../store/products/actions";
import { SingleProductProps } from "../../utils/types/landingpage";
import { CartItemProps, RootAppStateProps } from "../../utils/types/reduxTypes";

const ProductItem = ({ productItem }: { productItem: SingleProductProps }) => {
  const currency = useSelector(
    (state: RootAppStateProps) => state.AuthReducer.currency
  );

  const dispatch = useDispatch();

  const handleAddToQuickView = () =>
    dispatch(addToQuickViewAction(productItem));

  const handleAddToCart = () => {
    const cartItem: CartItemProps = {
      id: productItem.id,
      thumbnail: productItem.thumbnail,
      title: productItem.title,
      price: productItem.price,
      quantity: 1,
      totalPrice: productItem.price,
    };
    dispatch(addToCartAction(cartItem));
  };
  const handleWishlist = () => {
    dispatch(addToWishlistAction(productItem));
  };
  return (
    <div className="product-wrap">
      <div className="product text-center">
        <figure className="product-media">
          <a href={`productdetail?slug=${productItem.slug}`}>
            <img src={productItem.thumbnail} width="300" height="338" />
          </a>
          <div className="product-action-vertical">
            <a
              onClick={handleAddToCart}
              href="#"
              className="btn-product-icon btn-cart w-icon-cart"
              title="Add to cart"
            ></a>
            <a
              onClick={handleWishlist}
              href="#"
              className="btn-product-icon btn-wishlist w-icon-heart"
              title="Add to wishlist"
            ></a>
            <a
              onClick={handleAddToQuickView}
              href="#"
              className="btn-product-icon btn-quickview w-icon-search"
              title="Quickview"
            ></a>
            <a
              href="#"
              className="btn-product-icon btn-compare w-icon-compare"
              title="Add to Compare"
            ></a>
          </div>
        </figure>
        <div className="product-details">
          <h4 className="product-name">
            <a href={`productdetail?slug=${productItem.slug}`}>
              {productItem.title}
            </a>
          </h4>
          <div className="ratings-container">
            <div className="ratings-full">
              <span
                className="ratings"
                style={{ width: `${parseInt(productItem.rating) * 20}%` }}
              ></span>
              <span className="tooltiptext tooltip-top"></span>
            </div>
            <a href="#" className="rating-reviews">
              (3 reviews)
            </a>
          </div>
          <div className="product-price">
            <ins className="new-price">
              {currency.currency_symbol}{" "}
              {productItem.price * currency.currency_rate}
            </ins>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
