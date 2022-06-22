import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../store/user/actions";
const PrifileNavList = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    router.push("../");
    dispatch(logoutAction(false));
  };
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
        <a href="wishlist">Wishlist</a>
      </li>
      <li onClick={handleLogout} className="link-item">
        <a href="login">Logout</a>
      </li>
    </ul>
  );
};

export default PrifileNavList;
