import React from "react";

const CouponToggle = () => {
  return (
    <div>
      <div className="coupon-toggle">
            Have a coupon? <a href="#"
                className="show-coupon font-weight-bold text-uppercase text-dark">Enter your
                code</a>
        </div>
        <div className="coupon-content mb-4">
            <p>If you have a coupon code, please apply it below.</p>
            <div className="input-wrapper-inline">
                <input type="text" name="coupon_code" className="form-control form-control-md mr-1 mb-2" placeholder="Coupon code" id="coupon_code"/>
                <button type="submit" className="btn button btn-rounded btn-coupon mb-2" name="apply_coupon" value="Apply coupon">Apply Coupon</button>
            </div>
        </div>
    </div>
  );
};

export default CouponToggle;
