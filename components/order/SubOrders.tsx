import React from "react";

const SubOrders = () => {
  return (
  <div>
    <div className="sub-orders mb-10">
        <h4 className="title mb-5 font-weight-bold ls-25">Sub Orders</h4>
        <div className="alert alert-icon alert-inline mb-5">
            <i className="w-icon-exclamation-triangle"></i>
            <strong>Note: </strong>This order has products from multiple vendors. So we divided this order into multiple vendor orders.
            Each order will be handled by their respective vendor independently.
        </div>
        <table className="order-subtable">
            <thead>
                <tr>
                    <th className="order">Order</th>
                    <th className="date">Date</th>
                    <th className="status">Status</th>
                    <th className="total">Total</th>
                    <th className="action"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="order">950</td>
                    <td className="date">April 23, 2021</td>
                    <td className="status">On hold</td>
                    <td className="total">$40.00 for 1 items</td>
                    <td className="action"><a href="order-view.html" className="btn btn-rounded">View</a></td>
                </tr>
                <tr>
                    <td className="order">951</td>
                    <td className="date">April 25, 2021</td>
                    <td className="status">On hold</td>
                    <td className="total">$60.00 for 1 items</td>
                    <td className="action"><a href="order-view.html" className="btn btn-rounded">View</a></td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>  
  );
};

export default SubOrders;
