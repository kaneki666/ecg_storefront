import React from "react";


const PlaceOrder = () => {
  return (
    <div>
      <h3 className="title text-uppercase ls-10">Your Order</h3>
        <div className="order-summary">
            <table className="order-table">
                <thead>
                    <tr>
                        <th //colspan="2" 
                        >
                            <b>Product</b>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bb-no">
                        <td className="product-name">Palm Print Jacket <i
                                className="fas fa-times"></i> <span
                                className="product-quantity">1</span></td>
                        <td className="product-total">$40.00</td>
                    </tr>
                    <tr className="bb-no">
                        <td className="product-name">Brown Backpack <i className="fas fa-times"></i>
                            <span className="product-quantity">1</span></td>
                        <td className="product-total">$60.00</td>
                    </tr>
                    <tr className="cart-subtotal bb-no">
                        <td>
                            <b>Subtotal</b>
                        </td>
                        <td>
                            <b>$100.00</b>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="shipping-methods">
                        <td //colspan="2" 
                        className="text-left">
                            <h4 className="title title-simple bb-no mb-1 pb-0 pt-3">Shipping
                            </h4>
                            <ul id="shipping-method" className="mb-4">
                                <li>
                                    <div className="custom-radio">
                                        <input type="radio" id="free-shipping"
                                            className="custom-control-input" name="shipping"/>
                                        <label htmlFor="free-shipping"
                                            className="custom-control-label color-dark">Free
                                            Shipping</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-radio">
                                        <input type="radio" id="local-pickup"
                                            className="custom-control-input" name="shipping"/>
                                        <label htmlFor="local-pickup"
                                            className="custom-control-label color-dark">Local
                                            Pickup</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-radio">
                                        <input type="radio" id="flat-rate"
                                            className="custom-control-input" name="shipping"/>
                                        <label htmlFor="flat-rate"
                                            className="custom-control-label color-dark">Flat
                                            rate: $5.00</label>
                                    </div>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr className="order-total">
                        <th>
                            <b>Total</b>
                        </th>
                        <td>
                            <b>$100.00</b>
                        </td>
                    </tr>
                </tfoot>
            </table>

            <div className="payment-methods" id="payment_method">
                <h4 className="title font-weight-bold ls-25 pb-0 mb-1">Payment Methods</h4>
                <div className="accordion payment-accordion">
                    <div className="card">
                        <div className="card-header">
                            <a href="#cash-on-delivery" className="collapse">Direct Bank Transfor</a>
                        </div>
                        <div id="cash-on-delivery" className="card-body expanded">
                            <p className="mb-0">
                                Make your payment directly into our bank account. 
                                Please use your Order ID as the payment reference. 
                                Your order will not be shipped until the funds have cleared in our account.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <a href="#payment" className="expand">Check Payments</a>
                        </div>
                        <div id="payment" className="card-body collapsed">
                            <p className="mb-0">
                                Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <a href="#delivery" className="expand">Cash on delivery</a>
                        </div>
                        <div id="delivery" className="card-body collapsed">
                            <p className="mb-0">
                                Pay with cash upon delivery.
                            </p>
                        </div>
                    </div>
                    <div className="card p-relative">
                        <div className="card-header">
                            <a href="#paypal" className="expand">Paypal</a>
                        </div>
                        <a href="https://www.paypal.com/us/webapps/mpp/paypal-popup" className="text-primary paypal-que" 
                            //onClick="javascript:window.open('https://www.paypal.com/us/webapps/mpp/paypal-popup','WIPaypal',
                            //'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); 
                            //return false;" 
                            >What is PayPal?
                        </a>
                        <div id="paypal" className="card-body collapsed">
                            <p className="mb-0">
                                Pay via PayPal, you can pay with your credit cart if you
                                don't have a PayPal account.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-group place-order pt-6">
                <button type="submit" className="btn btn-dark btn-block btn-rounded">Place Order</button>
            </div>
        </div>
    </div>
  );
};

export default PlaceOrder;
