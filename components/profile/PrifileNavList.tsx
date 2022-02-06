import React from "react";

const PrifileNavList = () => {
  return (
    <ul className="nav nav-tabs mb-6" role="tablist">
      <li className="nav-item">
        <a href="#account-dashboard" className="nav-link active">
          Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a href="#account-orders" className="nav-link">
          Orders
        </a>
      </li>
      <li className="nav-item">
        <a href="#account-downloads" className="nav-link">
          Downloads
        </a>
      </li>
      <li className="nav-item">
        <a href="#account-addresses" className="nav-link">
          Addresses
        </a>
      </li>
      <li className="nav-item">
        <a href="#account-details" className="nav-link">
          Account details
        </a>
      </li>
      <li className="link-item">
        <a href="wishlist.html">Wishlist</a>
      </li>
      <li className="link-item">
        <a href="login.html">Logout</a>
      </li>
    </ul>
  );
};

export default PrifileNavList;
