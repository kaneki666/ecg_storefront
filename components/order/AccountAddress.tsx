import React from "react";

const AccountAddress = () => {
  return (<div>
    <div id="account-addresses">
        <div className="row">
            <div className="col-sm-6 mb-8">
                <div className="ecommerce-address billing-address">
                    <h4 className="title title-underline ls-25 font-weight-bold">Billing Address</h4>
                    <address className="mb-4">
                        <table className="address-table">
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                </tr>
                                <tr>
                                    <td>Conia</td>
                                </tr>
                                <tr>
                                    <td>Wall Street</td>
                                </tr>
                                <tr>
                                    <td>California</td>
                                </tr>
                                <tr>
                                    <td>United States (US)</td>
                                </tr>
                                <tr>
                                    <td>92020</td>
                                </tr>
                                <tr>
                                    <td>1112223334</td>
                                </tr>
                                <tr className="email">
                                    <td>nicework125@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </address>
                </div>
            </div>
            <div className="col-sm-6 mb-8">
                <div className="ecommerce-address shipping-address">
                    <h4 className="title title-underline ls-25 font-weight-bold">Shipping Address</h4>
                    <address className="mb-4">
                        <table className="address-table">
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                </tr>
                                <tr>
                                    <td>Conia</td>
                                </tr>
                                <tr>
                                    <td>Wall Street</td>
                                </tr>
                                <tr>
                                    <td>California</td>
                                </tr>
                                <tr>
                                    <td>United States (US)</td>
                                </tr>
                                <tr>
                                    <td>92020</td>
                                </tr>
                            </tbody>
                        </table>
                    </address>
                </div>
            </div>
        </div>
    </div>
  </div>  
  );
};

export default AccountAddress;
