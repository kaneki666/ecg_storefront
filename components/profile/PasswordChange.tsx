import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import useAxios from "../../utils/helperFucntion/useAxios";
import {
  GetUserInfoProps,
  GetUserPasswordProps,
  UserUpdateProps,
} from "../../utils/types/types";

const PasswordChange = () => {
  const axiosInstance = useAxios();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<GetUserPasswordProps>();

  const onSubmit: SubmitHandler<GetUserPasswordProps> = async (data) => {
    if (data.password === data.password2) {
      try{
        const response = await axiosInstance.put(
            `/change_password/`,
            data
          );
          
          if (response.status === 200) {
            toast(`Update Successful`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              toastId: "updateprofile",
            });
          }
          else{
            toast(`Update Failed`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              toastId: "updateprofile",
            });
          }
      }catch(error){
        toast(`Update Failed, old password didn't match` , {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          toastId: "updateprofile",
        });
      }
    }
   else {
        toast(`Password does not match`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            toastId: "updateprofile",
        });
    } 
  };

  return (
    <div className="tab-pane" id="change-password">
      <div className="icon-box icon-box-side icon-box-light">
        <span className="icon-box-icon icon-account mr-2">
          <i className="w-icon-account"></i>
        </span>
        <div className="icon-box-content">
          <h4 className="icon-box-title mb-0 ls-normal">Change Password</h4>
        </div>
      </div>
      <form
        className="form account-details-form mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group">
          <label className="text-dark" htmlFor="conf-password">
            Old Password
          </label>
          <input
            type="password"
            className="form-control form-control-md"
            {...register("old_password")}
          />
        </div>

        <div className="form-group">
          <label className="text-dark" htmlFor="conf-password">
            New Password
          </label>
          <input
            type="password"
            className="form-control form-control-md"
            {...register("password")}
          />
        </div>

        <div className="form-group">
          <label className="text-dark" htmlFor="conf-password">
            Re-type Password
          </label>
          <input
            type="password"
            className="form-control form-control-md"
            {...register("password2")}
          />
        </div>

        <button type="submit" className="btn btn-dark btn-rounded btn-sm mb-4">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default PasswordChange;
