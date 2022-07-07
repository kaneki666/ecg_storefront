import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleProductProps } from "../../utils/types/landingpage";
import { RootAppStateProps } from "../../utils/types/reduxTypes";

const BestSeller = ({ productItem }: { productItem: SingleProductProps }) => {
  const currency = useSelector(
    (state: RootAppStateProps) => state.AuthReducer.currency
  );

  return (
    <div className="product product-widget bb-no">
      <figure className="product-media">
        <a href={`productdetail?slug=${productItem.slug}`}>
          <img src={productItem.thumbnail} width="105" height="118" />
        </a>
      </figure>
      <div className="product-details">
        <h4 className="product-name">
          <a href={`productdetail?slug=${productItem.slug}`}>
            {productItem.title}
          </a>
        </h4>
        <div className="ratings-container">
          <div className="ratings-full">
            {/* <span
              className="ratings"
              style={{ width: `${parseInt(productItem.rating) * 20}%` }}
            ></span> */}
            <span className="tooltiptext tooltip-top"></span>
          </div>
        </div>
        <div className="product-price">
          <ins className="new-price">
            {currency.currency_symbol}{" "}
            {productItem.price * currency.currency_rate}
          </ins>
        </div>
        <div className="product-price">
          {productItem.price && (
            <del className="old-price">
              {currency.currency_symbol}{" "}
              {productItem.price * currency.currency_rate}
            </del>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
