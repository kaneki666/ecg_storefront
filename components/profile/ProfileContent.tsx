import React from "react";
import { GetUserInfoProps } from "../../utils/types/types";
import DashboardProfile from "./DashboardProfile";
import PasswordChange from "./PasswordChange";
import PrifileNavList from "./PrifileNavList";
import ProfilDetails from "./ProfilDetails";
import ProfileOrders from "./ProfileOrders";

const ProfileContent = ({ userInfos }: { userInfos: GetUserInfoProps }) => {
  return (
    <div className="tab tab-vertical row gutter-lg">
      <PrifileNavList />

      <div className="tab-content mb-6">
        <DashboardProfile userInfos={userInfos} />

        <ProfileOrders />

        <div className="tab-pane" id="account-downloads">
          <div className="icon-box icon-box-side icon-box-light">
            <span className="icon-box-icon icon-downloads mr-2">
              <i className="w-icon-download"></i>
            </span>
            <div className="icon-box-content">
              <h4 className="icon-box-title ls-normal">Downloads</h4>
            </div>
          </div>
          <p className="mb-4">No downloads available yet.</p>
          <a
            href="category"
            className="btn btn-dark btn-rounded btn-icon-right"
          >
            Go Shop<i className="w-icon-long-arrow-right"></i>
          </a>
        </div>

        <div className="tab-pane" id="account-addresses">
          <div className="icon-box icon-box-side icon-box-light">
            <span className="icon-box-icon icon-map-marker">
              <i className="w-icon-map-marker"></i>
            </span>
            <div className="icon-box-content">
              <h4 className="icon-box-title mb-0 ls-normal">Addresses</h4>
            </div>
          </div>
          <p>
            The following addresses will be used on the checkout page by
            default.
          </p>
          <div className="row">
            <div className="col-sm-6 mb-6">
              <div className="ecommerce-address billing-address pr-lg-8">
                <h4 className="title title-underline ls-25 font-weight-bold">
                  Billing Address
                </h4>
                <address className="mb-4">
                  <table className="address-table">
                    <tbody>
                      <tr>
                        <th>Name:</th>
                        <td>
                          {userInfos.user.first_name} {userInfos.user.last_name}
                        </td>
                      </tr>
                      <tr>
                        <th>Email:</th>
                        <td>{userInfos.user.email}</td>
                      </tr>
                      <tr>
                        <th>Address:</th>
                        <td>{userInfos.address}</td>
                      </tr>

                      <tr>
                        <th>Phone:</th>
                        <td>{userInfos.phone}</td>
                      </tr>
                    </tbody>
                  </table>
                </address>
                <a
                  href="#"
                  className="btn btn-link btn-underline btn-icon-right text-primary"
                >
                  Edit your billing address
                  <i className="w-icon-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-6 mb-6">
              <div className="ecommerce-address shipping-address pr-lg-8">
                <h4 className="title title-underline ls-25 font-weight-bold">
                  Shipping Address
                </h4>
                <address className="mb-4">
                  <table className="address-table">
                    <tbody>
                      <tr>
                        <th>Name:</th>
                        <td>
                          {userInfos.user.first_name} {userInfos.user.last_name}
                        </td>
                      </tr>
                      <tr>
                        <th>Email:</th>
                        <td>{userInfos.user.email}</td>
                      </tr>
                      <tr>
                        <th>Address:</th>
                        <td>{userInfos.address}</td>
                      </tr>

                      <tr>
                        <th>Phone:</th>
                        <td>{userInfos.phone}</td>
                      </tr>
                    </tbody>
                  </table>
                </address>
                <a
                  href="#"
                  className="btn btn-link btn-underline btn-icon-right text-primary"
                >
                  Edit your shipping address
                  <i className="w-icon-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <ProfilDetails userInfos={userInfos} />
        <PasswordChange />
      </div>
    </div>
  );
};

export default ProfileContent;
