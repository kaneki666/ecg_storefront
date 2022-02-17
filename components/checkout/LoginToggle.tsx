import React from "react";

const LoginToggle = () => {
  return (
    <div>
      <div className="login-toggle">
            Returning customer? <a href="#"
                className="show-login font-weight-bold text-uppercase text-dark">Login</a>
        </div>
        <form className="login-content">
            <p>If you have shopped with us before, please enter your details below. 
                If you are a new customer, please proceed to the Billing section.</p>
            <div className="row">
                <div className="col-xs-6">
                    <div className="form-group">
                        <label>Username or email *</label>
                        <input type="text" className="form-control form-control-md" name="name"
                            required/>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="form-group">
                        <label>Password *</label>
                        <input type="text" className="form-control form-control-md" name="password"
                            required/>
                    </div>
                </div>
            </div>
            <div className="form-group checkbox">
                <input type="checkbox" className="custom-checkbox" id="remember" name="remember"/>
                <label htmlFor="remember" className="mb-0 lh-2">Remember me</label>
                <a href="#" className="ml-3">Last your password?</a>
            </div>
            <button className="btn btn-rounded btn-login">Login</button>
        </form>
    </div>
  );
};

export default LoginToggle;