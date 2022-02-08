import React from "react";

const TableCartFooter = () => {
  return (<div>
      <div className="cart-action mb-6">
            <a
            href="#"
            className="btn btn-dark btn-rounded btn-icon-left btn-shopping mr-auto"
            >
            <i className="w-icon-long-arrow-left"></i>Continue
            Shopping
            </a>
            <button
            type="submit"
            className="btn btn-rounded btn-default btn-clear"
            name="clear_cart"
            value="Clear Cart"
            >
            Clear Cart
            </button>
            <button
            type="submit"
            className="btn btn-rounded btn-update disabled"
            name="update_cart"
            value="Update Cart"
            >
            Update Cart
            </button>
        </div>

        <form className="coupon">
            <h5 className="title coupon-title font-weight-bold text-uppercase">
            Coupon Discount
            </h5>
            <input
            type="text"
            className="form-control mb-4"
            placeholder="Enter coupon code here..."
            required
            />
            <button className="btn btn-dark btn-outline btn-rounded">
            Apply Coupon
            </button>
        </form>
  </div>
  );
};

export default TableCartFooter;
