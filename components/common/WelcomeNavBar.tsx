import React from "react";

const WelcomeNavBar = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-left">
          <p className="welcome-msg">WELCOME TO Miaki STORE</p>
        </div>
        <div className="header-right">
          <a href="contact-us.html" className="d-lg-show">
            Contact Us
          </a>
          <a href="my-account.html" className="d-lg-show">
            My Account
          </a>
          <a href="assets/ajax/login.html" className="d-lg-show login sign-in">
            <i className="w-icon-account"></i>Sign In
          </a>
          <span className="delimiter d-lg-show">/</span>
          <a
            href="assets/ajax/login.html"
            className="ml-0 d-lg-show login register"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeNavBar;
