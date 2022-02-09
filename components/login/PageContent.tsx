import React, { FormEvent, useState } from "react";

const PageContent = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handlePress = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setUserData({
      ...userData,
      [event.currentTarget.name]: value,
    });
  };

  return (
    <div>
      <div className="page-content">
        <div className="container">
          <div className="login-popup">
            <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
              <ul className="nav nav-tabs text-uppercase" role="tablist">
                <li className="nav-item">
                  <a href="#sign-in" className="nav-link active">
                    Sign In
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#sign-up" className="nav-link">
                    Sign Up
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div className="tab-pane active" id="sign-in">
                  <div className="form-group">
                    <label>Username or email address *</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required
                      onChange={handlePress}
                    />
                  </div>
                  <div className="form-group mb-0">
                    <label>Password *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="password"
                      id="password"
                      required
                      onChange={handlePress}
                    />
                  </div>
                  <div className="form-checkbox d-flex align-items-center justify-content-between">
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="remember1"
                      name="remember1"
                      required
                    />
                    <label>Remember me</label>
                    <a href="#">Last your password?</a>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Sign In
                  </a>
                </div>

                <div className="tab-pane" id="sign-up">
                  <div className="form-group">
                    <label>Your email address *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email_1"
                      id="email_1"
                      required
                    />
                  </div>
                  <div className="form-group mb-5">
                    <label>Password *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="password_1"
                      id="password_1"
                      required
                    />
                  </div>
                  <div className="checkbox-content login-vendor">
                    <div className="form-group mb-5">
                      <label>First Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="first-name"
                        id="first-name"
                        required
                      />
                    </div>
                    <div className="form-group mb-5">
                      <label>Last Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="last-name"
                        id="last-name"
                        required
                      />
                    </div>
                    <div className="form-group mb-5">
                      <label>Shop Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="shop-name"
                        id="shop-name"
                        required
                      />
                    </div>
                    <div className="form-group mb-5">
                      <label>Shop URL *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="shop-url"
                        id="shop-url"
                        required
                      />
                      <small>
                        https://d-themes.com/wordpress/wolmart/demo-1/store/
                      </small>
                    </div>
                    <div className="form-group mb-5">
                      <label>Phone Number *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone-number"
                        id="phone-number"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-checkbox user-checkbox mt-0">
                    <input
                      type="checkbox"
                      className="custom-checkbox checkbox-round active"
                      id="check-customer"
                      name="check-customer"
                      required
                    />
                    <label className="check-customer mb-1">
                      I am a customer
                    </label>
                    <br />
                    <input
                      type="checkbox"
                      className="custom-checkbox checkbox-round"
                      id="check-seller"
                      name="check-seller"
                      required
                    />
                    <label className="check-seller">I am a vendor</label>
                  </div>
                  <p>
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our{" "}
                    <a href="#" className="text-primary">
                      privacy policy
                    </a>
                    .
                  </p>
                  <a href="#" className="d-block mb-5 text-primary">
                    Signup as a vendor?
                  </a>
                  <div className="form-checkbox d-flex align-items-center justify-content-between mb-5">
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="remember"
                      name="remember"
                      required
                    />
                    <label className="font-size-md">
                      I agree to the{" "}
                      <a href="#" className="text-primary font-size-md">
                        privacy policy
                      </a>
                    </label>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Sign Up
                  </a>
                </div>
              </div>

              <div className="social-icons social-icon-border-color d-flex justify-content-center">
                <a
                  href="#"
                  className="social-icon social-facebook w-icon-facebook"
                ></a>
                <a
                  href="#"
                  className="social-icon social-twitter w-icon-twitter"
                ></a>
                <a
                  href="#"
                  className="social-icon social-google fab fa-google"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
