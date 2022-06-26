import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { CartItemProps, RootAppStateProps } from "../../utils/types/reduxTypes";

interface IFormInput {
  divison: string;
}

const SideBarCart = () => {
  const { ProductReducer, AuthReducer } = useSelector(
    (state: RootAppStateProps) => state
  );
  const { totalPrice, coupon } = ProductReducer;
  const { currency } = AuthReducer;

  return (
    <div className="col-lg-4 sticky-sidebar-wrapper">
      <div className="sticky-sidebar">
        <div className="cart-summary mb-4">
          <h3 className="cart-title text-uppercase">Cart Totals</h3>
          <div className="cart-subtotal d-flex align-items-center justify-content-between">
            <label className="ls-25">Subtotal</label>
            <span>
              {currency.currency_symbol} {totalPrice * currency.currency_rate}
            </span>
          </div>
          {coupon?.amount !== undefined && coupon?.amount !== null && (
            <div className="cart-subtotal d-flex align-items-center justify-content-between">
              <label className="ls-25">Coupon Discount</label>
              <span>
                {currency.currency_symbol}{" "}
                {coupon?.amount * currency.currency_rate}
              </span>
            </div>
          )}
          <hr className="divider" />

          <hr className="divider mb-6" />
          <div className="order-total d-flex justify-content-between align-items-center">
            <label>Total</label>
            {coupon?.amount !== undefined && coupon?.amount !== null ? (
              <span className="ls-50">
                {currency.currency_symbol}{" "}
                {(totalPrice - coupon.amount) * currency.currency_rate}
              </span>
            ) : (
              <span className="ls-50">
                {currency.currency_symbol} {totalPrice * currency.currency_rate}
              </span>
            )}
          </div>
          <a
            href="checkout"
            className="btn btn-block btn-dark btn-icon-right btn-rounded  btn-checkout"
          >
            Proceed to checkout<i className="w-icon-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBarCart;

var cities = [
  "Dhaka",
  "Chattogram",
  "Barishal",
  "Khulna",
  "Mymensingh",
  "Rajshahi",
  "Rangpur",
  "Sylhet",
];
