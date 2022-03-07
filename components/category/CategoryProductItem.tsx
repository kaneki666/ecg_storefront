import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartAction,
  addToQuickViewAction,
} from "../../store/products/actions";
import { SingleProductProps } from "../../utils/types/landingpage";
import { CartItemProps, RootAppStateProps } from "../../utils/types/reduxTypes";

const CategoryProductItem = ({ product }: { product: SingleProductProps }) => {
  const currency = useSelector(
    (state: RootAppStateProps) => state.AuthReducer.currency
  );

  const dispatch = useDispatch();

  const handleAddToQuickView = () => dispatch(addToQuickViewAction(product));

  const handleAddToCart = () => {
    const cartItem: CartItemProps = {
      id: product.id,
      thumbnail: product.thumbnail,
      title: product.title,
      price: product.price,
      quantity: 1,
      totalPrice: product.price,
    };
    dispatch(addToCartAction(cartItem));
  };
  return (
    <div className="product-wrap">
      <div className="product text-center">
        <figure className="product-media">
          <a href={`productdetail?slug=${product.slug}`}>
            <img
              src={product.thumbnail}
              alt="Product"
              width="300"
              height="338"
            />
          </a>
          <div className="product-action-horizontal">
            <a
              onClick={handleAddToCart}
              href="#"
              className="btn-product-icon btn-cart w-icon-cart"
              title="Add to cart"
            ></a>
            <a
              href="#"
              className="btn-product-icon btn-wishlist w-icon-heart"
              title="Wishlist"
            ></a>
            <a
              href="#"
              className="btn-product-icon btn-compare w-icon-compare"
              title="Compare"
            ></a>
            <a
              onClick={handleAddToQuickView}
              href="#"
              className="btn-product-icon btn-quickview w-icon-search"
              title="Quick View"
            ></a>
          </div>
        </figure>
        <div className="product-details">
          <div className="product-cat">
            <a href="category">{product.product_category_name}</a>
          </div>
          <h3 className="product-name">
            <a href="#">{product.title}</a>
          </h3>
          <div className="ratings-container">
            <div className="ratings-full">
              <span
                className="ratings"
                style={{ width: `${parseInt(product.rating) * 20}%` }}
              ></span>
              <span className="tooltiptext tooltip-top"></span>
            </div>
            <a href="#" className="rating-reviews">
              (3 reviews)
            </a>
          </div>
          <div className="product-pa-wrapper">
            <div className="product-price">
              {" "}
              {currency.currency_symbol}{" "}
              {product.price * currency.currency_rate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductItem;
