import React from "react";
import { GetUserInfoProps } from "../../utils/types/types";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../store/user/actions";
import { useRouter } from "next/router";
const DashboardProfile = ({ userInfos }: { userInfos: GetUserInfoProps }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    router.push("../");
    dispatch(logoutAction(false));
  };
  return (
    <div className="tab-pane active in" id="account-dashboard">
      <p className="greeting">
        Hello
        <span className="text-dark font-weight-bold">
          {" "}
          {userInfos.user.first_name} {userInfos.user.last_name}
        </span>
        (not
        <span className="text-dark font-weight-bold">
          {" "}
          {userInfos.user.first_name} {userInfos.user.last_name}
        </span>
        ?
        <a onClick={handleLogout} href="#" className="text-primary">
          Log out
        </a>
        )
      </p>

      <p className="mb-4">
        From your account dashboard you can view your{" "}
        <a href="#account-orders" className="text-primary link-to-tab">
          recent orders
        </a>
        , manage your{" "}
        <a href="#account-addresses" className="text-primary link-to-tab">
          shipping and billing addresses
        </a>
        , and
        <a href="#account-details" className="text-primary link-to-tab">
          edit your password and account details.
        </a>
      </p>

      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
          <a href="#account-orders" className="link-to-tab">
            <div className="icon-box text-center">
              <span className="icon-box-icon icon-orders">
                <i className="w-icon-orders"></i>
              </span>
              <div className="icon-box-content">
                <p className="text-uppercase mb-0">Orders</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
          <a href="#account-downloads" className="link-to-tab">
            <div className="icon-box text-center">
              <span className="icon-box-icon icon-download">
                <i className="w-icon-download"></i>
              </span>
              <div className="icon-box-content">
                <p className="text-uppercase mb-0">Downloads</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
          <a href="#account-addresses" className="link-to-tab">
            <div className="icon-box text-center">
              <span className="icon-box-icon icon-address">
                <i className="w-icon-map-marker"></i>
              </span>
              <div className="icon-box-content">
                <p className="text-uppercase mb-0">Addresses</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
          <a href="#account-details" className="link-to-tab">
            <div className="icon-box text-center">
              <span className="icon-box-icon icon-account">
                <i className="w-icon-user"></i>
              </span>
              <div className="icon-box-content">
                <p className="text-uppercase mb-0">Account Details</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
          <a
            onClick={() => router.push("/wishlist")}
            href="/wishlist"
            className="link-to-tab"
          >
            <div className="icon-box text-center">
              <span className="icon-box-icon icon-wishlist">
                <i className="w-icon-heart"></i>
              </span>
              <div className="icon-box-content">
                <p className="text-uppercase mb-0">Wishlist</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
          <a onClick={handleLogout} href="#">
            <div className="icon-box text-center">
              <span className="icon-box-icon icon-logout">
                <i className="w-icon-logout"></i>
              </span>
              <div className="icon-box-content">
                <p className="text-uppercase mb-0">Logout</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
