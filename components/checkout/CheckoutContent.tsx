import React, { useState } from "react";
import BillingDetails from "./BillingDetails";
import PlaceOrder from "./PlaceOrder";
import { useForm } from "react-hook-form";
const CheckoutContent = () => {
  const checkoutForm = useForm({ mode: "onChange" });
  return (
    <div>
      <form>
        <div className="row mb-9">
          <div className="col-lg-7 pr-lg-4 mb-4">
            <BillingDetails checkoutForm={checkoutForm} />
          </div>
          <div className="col-lg-5 mb-4 sticky-sidebar-wrapper">
            <div className="order-summary-wrapper sticky-sidebar">
              <PlaceOrder checkoutForm={checkoutForm} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutContent;
