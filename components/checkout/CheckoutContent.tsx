import React from "react";
import BillingDetails from "./BillingDetails";
import PlaceOrder from "./PlaceOrder";

const CheckoutContent = () => {
  return (
    <div>
        <form className="form checkout-form" action="#" method="post">
            <div className="row mb-9">
                <div className="col-lg-7 pr-lg-4 mb-4">
                    <BillingDetails/>
                </div>
                <div className="col-lg-5 mb-4 sticky-sidebar-wrapper">
                    <div className="order-summary-wrapper sticky-sidebar">
                        <PlaceOrder/>
                    </div>
                </div>
            </div>
        </form>   
    </div>
  );
};

export default CheckoutContent;
