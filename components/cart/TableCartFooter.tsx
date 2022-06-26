import { useRouter } from "next/router";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addCouponAction, clearCartAction } from "../../store/products/actions";
import { CouponItem, RootAppStateProps } from "../../utils/types/reduxTypes";

import { SubmitHandler, useForm } from "react-hook-form";

import { API_BASE_URL } from "../../pages/api/hello";

const TableCartFooter = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<{
    code: string;
  }>();
  const { userInfo } = useSelector(
    (state: RootAppStateProps) => state.AuthReducer
  );
  const router = useRouter();

  const handleClearCart = () => dispatch(clearCartAction(true));
  const onSubmit: SubmitHandler<{
    code: string;
  }> = async (data) => {
    const response = await fetch(
      `${API_BASE_URL}/apply-coupon/${data.code}/${userInfo?.data.user_id}/`
    );
    const resposnedata: CouponItem = await response.json();
    if (resposnedata.status === "You already used this coupon!") {
      toast("You already used this coupon!", {
        toastId: "cuponmessage",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (resposnedata.status === "Invalid coupon!") {
      toast("Invalid coupon!", {
        toastId: "cuponmessage",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (resposnedata.status === "Authentic coupon.") {
      dispatch(addCouponAction(resposnedata));
      toast(
        `Coupon added suucesfull. You got ${resposnedata.amount} tk discount.`,
        {
          toastId: "cuponmessage",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };

  return (
    <div>
      <ToastContainer containerId="cuponmessage" draggable={false} />
      <div className="cart-action mb-6">
        <a
          onClick={() => router.back()}
          href="#"
          className="btn btn-dark btn-rounded btn-icon-left btn-shopping mr-auto"
        >
          <i className="w-icon-long-arrow-left"></i>Continue Shopping
        </a>
        <button
          onClick={handleClearCart}
          className="btn btn-rounded btn-default btn-clear"
          name="clear_cart"
          value="Clear Cart"
        >
          Clear Cart
        </button>
        {/* <button
            type="submit"
            className="btn btn-rounded btn-update disabled"
            name="update_cart"
            value="Update Cart"
            >
            Update Cart
            </button> */}
      </div>

      <form className="coupon">
        <h5 className="title coupon-title font-weight-bold text-uppercase">
          Coupon Discount
        </h5>
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Enter coupon code here..."
          id="coupon_code"
          {...register("code", { required: false })}
        />
        <button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          className="btn button btn-rounded btn-coupon mb-2"
          name="apply_coupon"
          value="Apply coupon"
        >
          Apply Coupon
        </button>
      </form>
    </div>
  );
};

export default TableCartFooter;
