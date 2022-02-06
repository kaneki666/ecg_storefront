import React from "react";
import DashboardProfile from "./DashboardProfile";
import PrifileNavList from "./PrifileNavList";
import ProfilDetails from "./ProfilDetails";
import ProfileOrders from "./ProfileOrders";

const ProfileContent = () => {
  return (
    <div className="tab tab-vertical row gutter-lg">
      <PrifileNavList />

      <div className="tab-content mb-6">
        <DashboardProfile />

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
            href="shop-banner-sidebar.html"
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
                        <td>John Doe</td>
                      </tr>
                      <tr>
                        <th>Company:</th>
                        <td>Conia</td>
                      </tr>
                      <tr>
                        <th>Address:</th>
                        <td>Wall Street</td>
                      </tr>
                      <tr>
                        <th>City:</th>
                        <td>California</td>
                      </tr>
                      <tr>
                        <th>Country:</th>
                        <td>United States (US)</td>
                      </tr>
                      <tr>
                        <th>Postcode:</th>
                        <td>92020</td>
                      </tr>
                      <tr>
                        <th>Phone:</th>
                        <td>1112223334</td>
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
                        <td>John Doe</td>
                      </tr>
                      <tr>
                        <th>Company:</th>
                        <td>Conia</td>
                      </tr>
                      <tr>
                        <th>Address:</th>
                        <td>Wall Street</td>
                      </tr>
                      <tr>
                        <th>City:</th>
                        <td>California</td>
                      </tr>
                      <tr>
                        <th>Country:</th>
                        <td>United States (US)</td>
                      </tr>
                      <tr>
                        <th>Postcode:</th>
                        <td>92020</td>
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

        <ProfilDetails />
      </div>
    </div>
  );
};

export default ProfileContent;
