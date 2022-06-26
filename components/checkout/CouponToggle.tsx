import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { API_BASE_URL } from "../../pages/api/hello";
import { addCouponAction } from "../../store/products/actions";

import { CouponItem, RootAppStateProps } from "../../utils/types/reduxTypes";

const CouponToggle = () =>
  // { couponData }: { couponData: CouponItem[] }
  {
    const dispatch = useDispatch();
    const { userInfo } = useSelector(
      (state: RootAppStateProps) => state.AuthReducer
    );
    const {
      register,
      handleSubmit,

      formState: { errors },
    } = useForm<{
      code: string;
    }>();

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
        <div className="coupon-toggle">
          Have a coupon?{" "}
          <a
            href="#"
            className="show-coupon font-weight-bold text-uppercase text-dark"
          >
            Enter your code
          </a>
        </div>
        <div className="coupon-content mb-4">
          <p>If you have a coupon code, please apply it below.</p>
          <div className="input-wrapper-inline">
            <input
              type="text"
              className="form-control form-control-md mr-1 mb-2"
              placeholder="Coupon code"
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
          </div>
        </div>
      </div>
    );
  };

export default CouponToggle;
