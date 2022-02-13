import React from "react";
import FormLogin from "./FormLogin";
import { ToastContainer } from "react-toastify";
import FormSignup from "./FormSignup";

const PageContent = () => {
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
                <FormLogin />
                <FormSignup />
                
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
