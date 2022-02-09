import React from "react";

const WelcomeNavBar = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-left">
          <p className="welcome-msg">WELCOME TO Miaki STORE</p>
        </div>
        <div className="header-right">
          <a href="/contactus" className="d-lg-show">
            Contact Us
          </a>
          <a href="/profile" className="d-lg-show">
            My Account
          </a>
          <a href="/login" className="d-lg-show">
            <i className="w-icon-account"></i>Sign In
          </a>
          <span className="delimiter d-lg-show">/</span>
          <a href="/login" className="d-lg-show">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeNavBar;
