import React from "react";

const OrderView = () => {
  return (
  <div>
   <ul className="order-view list-style-none">
        <li>
            <label>Order number</label>
            <strong>945</strong>
        </li>
        <li>
            <label>Status</label>
            <strong>On hold</strong>
        </li>
        <li>
            <label>Date</label>
            <strong>April 27, 2021</strong>
        </li>
        <li>
            <label>Total</label>
            <strong>$1,646.36</strong>
        </li>
        <li>
            <label>Payment method</label>
            <strong>Direct bank transfor</strong>
        </li>
    </ul> 
  </div>  
  );
};

export default OrderView;
