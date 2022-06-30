import { useRouter } from "next/router";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { API_BASE_URL } from "../../pages/api/hello";
import { loginAction, saveUserinfoAction } from "../../store/products/actions";

import { UserLoginProps } from "../../utils/types/reduxTypes";
import { LoginProps } from "../../utils/types/types";

const FormLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<LoginProps>();

  const onSubmit: SubmitHandler<LoginProps> = async (data) => {
    const request = await fetch(`${API_BASE_URL}/login/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (request.status === 200) {
      const response: UserLoginProps = await request.json();
      dispatch(loginAction(true));
      dispatch(saveUserinfoAction(response));
      toast("Login Successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => router.back(), 4000);
    } else {
      const response = await request.json();

      toast(`Login Failed. ${response.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="tab-pane active" id="sign-in">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Username or email address *</label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            {...register("email", { required: true })}
          />
        </div>
        <div className="form-group mb-0">
          <label>Password *</label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            {...register("password", { required: true })}
          />
        </div>
        <div className="form-checkbox d-flex align-items-center justify-content-between">
          <input
            type="checkbox"
            className="custom-checkbox"
            id="remember1"
            name="remember1"
          />
          <label>Remember me</label>
          <a href="#">Lost your password?</a>
        </div>
        <div className="d-flex justify-content-center">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
