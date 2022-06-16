import { useRouter } from "next/router";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addCouponAction, clearCartAction } from "../../store/products/actions";
import { RootAppStateProps } from "../../utils/types/reduxTypes";
import { CouponProps } from "../../utils/types/landingpage";
import { SubmitHandler, useForm } from "react-hook-form";

const TableCartFooter = ({ couponData }: { couponData: CouponProps[] }) => {
  const dispatch = useDispatch();
  const { usedCoupon } = useSelector(
    (state: RootAppStateProps) => state.ProductReducer
  );
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<CouponProps>();

  const router = useRouter();
  const handleClearCart = () => dispatch(clearCartAction(true));

  const onSubmit: SubmitHandler<CouponProps> = async (data) => {
    var checkCoupon= false
   
    for(let i=0; i<=couponData.length; i++){  
      console.log(usedCoupon)
        try{
          if (data.code===couponData[i].code && usedCoupon===false){
            dispatch(addCouponAction(couponData[i].amount))
            checkCoupon= true
           
          }
        }catch(e){console.log(e)

        } 
    }
    if(checkCoupon===true){
      toast("Coupon Added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else if(usedCoupon==true){
      toast("This Coupon is already used!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }else if(data.code && checkCoupon===false){
      toast("Coupon is incorrect!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else{
      toast("Coupon field is empty! please enter coupon code", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  
  return (
    <div>
      <ToastContainer containerId="an id" draggable={false} />
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
        <button onClick={handleSubmit(onSubmit)} type="submit" className="btn button btn-rounded btn-coupon mb-2" name="apply_coupon" value="Apply coupon">
          Apply Coupon
          </button>
      </form>
    </div>
  );
};

export default TableCartFooter;
