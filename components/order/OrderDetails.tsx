import React from "react";

const OrderDetails = () => {
  return (
  <div>
    <div className="order-details-wrapper mb-5">
        <h4 className="title text-uppercase ls-25 mb-5">Order Details</h4>
        <table className="order-table">
            <thead>
                <tr>
                    <th className="text-dark">Product</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <a href="#">Palm Print Jacket</a>&nbsp;<strong>x 1</strong><br/>
                        Vendor : <a href="#">Vendor 1</a>
                    </td>
                    <td>$40.00</td>
                </tr>
                <tr>
                    <td>
                        <a href="#">Brown Backpack</a>&nbsp;<strong>x 1</strong><br/>
                        Vendor : <a href="#">Vendor 1</a>
                    </td>
                    <td>$60.00</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>Subtotal:</th>
                    <td>$100.00</td>
                </tr>
                <tr>
                    <th>Shipping:</th>
                    <td>Flat rate</td>
                </tr>
                <tr>
                    <th>Payment method:</th>
                    <td>Direct bank transfor</td>
                </tr>
                <tr className="total">
                    <th className="border-no">Total:</th>
                    <td className="border-no">$100.00</td>
                </tr>
            </tfoot>
        </table>
    </div>
  </div>  
  );
};

export default OrderDetails;
