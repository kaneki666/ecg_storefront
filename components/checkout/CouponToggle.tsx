import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addCouponAction } from "../../store/products/actions";
import { CouponProps } from "../../utils/types/landingpage";
import { RootAppStateProps } from "../../utils/types/reduxTypes";

const CouponToggle = ({ couponData }: { couponData: CouponProps[] }) => {
  const dispatch = useDispatch();
  const { usedCoupon } = useSelector(
    (state: RootAppStateProps) => state.ProductReducer
  );
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<CouponProps>();

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
                <button onClick={handleSubmit(onSubmit)} type="submit" className="btn button btn-rounded btn-coupon mb-2" name="apply_coupon" value="Apply coupon">Apply Coupon</button>
            </div>
      </div>
    </div>
  );
};

export default CouponToggle;
