import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import useAxios from "../../utils/helperFucntion/useAxios";
import { GetUserInfoProps, UserUpdateProps } from "../../utils/types/types";

const ProfilDetails = ({ userInfos }: { userInfos: GetUserInfoProps }) => {
  const axiosInstance = useAxios();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<UserUpdateProps>({
    defaultValues: {
      first_name: userInfos.user.first_name,
      last_name: userInfos.user.last_name,
      email: userInfos.user.email,
      birth_date: userInfos.birth_date,
      address: userInfos.address,
      phone: userInfos.phone,
    },
  });

  const onSubmit: SubmitHandler<UserUpdateProps> = async (data) => {
    const request = await axiosInstance.put("/customer-profile/update/", data);
    const response: GetUserInfoProps = request.data;
    if (request.status === 200) {
      toast(`Update Successful`, {
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
    <div className="tab-pane" id="account-details">
      <ToastContainer containerId="updateprofile" draggable={false} />
      <div className="icon-box icon-box-side icon-box-light">
        <span className="icon-box-icon icon-account mr-2">
          <i className="w-icon-user"></i>
        </span>
        <div className="icon-box-content">
          <h4 className="icon-box-title mb-0 ls-normal">Account Details</h4>
        </div>
      </div>
      <form
        className="form account-details-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-dark" htmlFor="firstname">
                First name{" "}
              </label>
              <input
                type="text"
                {...register("first_name", { minLength: 5 })}
                className="form-control form-control-md"
              />
              {errors.first_name?.type === "minLength" &&
                "First name must be 5 characters minimum"}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-dark" htmlFor="lastname">
                Last name{" "}
              </label>
              <input
                type="text"
                {...register("last_name", { minLength: 5 })}
                className="form-control form-control-md"
              />
              {errors.last_name?.type === "minLength" &&
                "Last name must be 5 characters minimum"}
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="text-dark" htmlFor="email_1">
            Email address{" "}
          </label>
          <input
            type="email"
            {...register("email", {
              pattern:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            })}
            className="form-control form-control-md"
          />
          {errors.email?.type === "pattern" && "Invalid Email address"}
        </div>

        {/* <div className="form-group">
          <label className="text-dark" htmlFor="conf-password">
            New Password
          </label>
          <input
            type="password"
            className="form-control form-control-md"
            {...register("password")}
          />
        </div> */}

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-dark" htmlFor="conf-password">
                Phone
              </label>
              <input
                type="text"
                className="form-control form-control-md"
                {...register("phone", {
                  pattern: /(^(\+8801))[1|3-9]{1}(\d){8}$/,
                })}
              />
              {errors.phone?.type === "pattern" && "Invalid Phone number"}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-dark" htmlFor="conf-password">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control form-control-md"
                {...register("birth_date", { minLength: 10 })}
              />
              {errors.birth_date?.type === "minLength" && "Invalid Date"}
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="text-dark" htmlFor="conf-password">
            Address
          </label>
          <input
            type="text"
            className="form-control form-control-md"
            {...register("address", { minLength: 10 })}
          />
          {errors.address?.type === "minLength" &&
            "Addres must be minimum 10 charcaters"}
        </div>

        <button type="submit" className="btn btn-dark btn-rounded btn-sm mb-4">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfilDetails;
