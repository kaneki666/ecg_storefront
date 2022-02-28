import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { API_BASE_URL } from "../../pages/api/hello";
import { loginAction, saveUserinfoAction } from "../../store/user/actions";
import { UserLoginProps } from "../../utils/types/reduxTypes";
import { LoginProps } from "../../utils/types/types";

const LoginToggle = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginProps>();
  console.log(getValues("email"));

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
    <div>
      <div className="login-toggle">
        Returning customer?{" "}
        <a
          href="#"
          className="show-login font-weight-bold text-uppercase text-dark"
        >
          Login
        </a>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          If you have shopped with us before, please enter your details below.
          If you are a new customer, please proceed to the Billing section.
        </p>
        <div className="row">
          <div className="col-xs-6">
            <div className="form-group">
              <label>Username or email *</label>
              <input
                type="text"
                className="form-control form-control-md"
                {...register("email", { required: true })}
                required
              />
              {errors.email && <p className="errorInput">Email is required</p>}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="form-group">
              <label>Password *</label>
              <input
                {...register("password", { required: true })}
                type="password"
                className="form-control form-control-md"
                required
              />
              {errors.password && (
                <p className="errorInput">Password is required</p>
              )}
            </div>
          </div>
        </div>
        {/* <div className="form-group checkbox">
          <input
            type="checkbox"
            className="custom-checkbox"
            id="remember"
            name="remember"
          />
          <label htmlFor="remember" className="mb-0 lh-2">
            Remember me
          </label>
          <a href="#" className="ml-3">
            Last your password?
          </a>
        </div> */}
        <button type="submit" className="btn btn-rounded btn-login">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginToggle;
