import React from "react";
import { UseFormReturn, FieldValues } from "react-hook-form";
import { useSelector } from "react-redux";
import useAxios from "../../utils/helperFucntion/useAxios";
import { CartItemProps, RootAppStateProps } from "../../utils/types/reduxTypes";

const PlaceOrder = ({
  checkoutForm,
}: {
  checkoutForm: UseFormReturn<FieldValues, object>;
}) => {
  const { ProductReducer, AuthReducer } = useSelector(
    (state: RootAppStateProps) => state
  );
  const { cart, totalPrice } = ProductReducer;
  const { currency } = AuthReducer;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    watch,
  } = checkoutForm;
  const axiosInstance = useAxios();

  const handleCheckoutApi = async (data: any) => {
    const response = await axiosInstance.post("/checkout/", data);
    console.log(response);
  };
  console.log(watch("payment_type"));
  const onSubmit = (data: any) => {
    if (isValid) {
      if (data.billing_different === false) {
        data.product = cart.map((item) => item.id);
        data.quantity = cart.map((item) => item.quantity);
        data.billing_default = true;
        data.shipping_first_name = data.billing_first_name;
        data.shipping_last_name = data.billing_last_name;
        data.shipping_street_address = data.billing_street_address;
        data.shipping_city = data.billing_city;
        data.shipping_zip_code = data.billing_zip_code;
        data.payment_type = 0;

        handleCheckoutApi(data);
      } else {
        data.product = cart.map((item) => item.id);
        data.quantity = cart.map((item) => item.quantity);
        data.billing_default = true;
        handleCheckoutApi(data);
      }
    }
  };

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
            {cart.length > 0 &&
              cart.map((product: CartItemProps) => (
                <tr className="bb-no" key={product.id}>
                  <td className="product-name">
                    {product.title} <i className="fas fa-times"></i>{" "}
                    <span className="product-quantity">{product.quantity}</span>
                  </td>
                  <td className="product-total">
                    {currency.currency_symbol}{" "}
                    {currency.currency_rate *
                      (product.price * product.quantity)}
                  </td>
                </tr>
              ))}

            <tr className="cart-subtotal bb-no">
              <td>
                <b>Subtotal</b>
              </td>
              <td>
                <b>
                  {currency.currency_symbol}{" "}
                  {totalPrice * currency.currency_rate}
                </b>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="order-total">
              <th>
                <b>Total</b>
              </th>
              <td>
                <b>
                  {currency.currency_symbol}{" "}
                  {totalPrice * currency.currency_rate}
                </b>
              </td>
            </tr>
          </tfoot>
        </table>

        <div className="payment-methods" id="payment_method">
          <h4 className="title font-weight-bold ls-25 pb-0 mb-1">
            Payment Methods
          </h4>
          <div className="accordion payment-accordion">
            <div className="card">
              <div className="card-header">
                <a
                  onClick={() => setValue("payment_type", 1)}
                  href="#cash-on-delivery"
                  className="collapse"
                >
                  Direct Bank Transfor
                </a>
              </div>
              <div id="cash-on-delivery" className="card-body expanded">
                <p className="mb-0">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <a
                  onClick={() => setValue("payment_type", 2)}
                  href="#payment"
                  className="expand"
                >
                  Check Payments
                </a>
              </div>
              <div id="payment" className="card-body collapsed">
                <p className="mb-0">
                  Please send a check to Store Name, Store Street, Store Town,
                  Store State / County, Store Postcode.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <a
                  onClick={() => setValue("payment_type", 3)}
                  href="#delivery"
                  className="expand"
                >
                  Cash on delivery
                </a>
              </div>
              <div id="delivery" className="card-body collapsed">
                <p className="mb-0">Pay with cash upon delivery.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group place-order pt-6">
          <button
            onClick={handleSubmit(onSubmit)}
            type="submit"
            className="btn btn-dark btn-block btn-rounded"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
