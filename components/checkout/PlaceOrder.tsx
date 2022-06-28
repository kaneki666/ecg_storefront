import React from "react";
import { UseFormReturn, FieldValues } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "../../utils/helperFucntion/useAxios";
import { CartItemProps, RootAppStateProps } from "../../utils/types/reduxTypes";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { API_BASE_URL } from "../../pages/api/hello";
import { useRouter } from "next/router";
import { clearCartAction } from "../../store/products/actions";

const PlaceOrder = ({
  checkoutForm,
}: {
  checkoutForm: UseFormReturn<FieldValues, object>;
}) => {
  const { ProductReducer, AuthReducer } = useSelector(
    (state: RootAppStateProps) => state
  );

  const dispatch = useDispatch();
  const router = useRouter();
  const { cart, totalPrice, coupon } = ProductReducer;
  const { currency, isLoggedIn, userInfo } = AuthReducer;
  const {
    handleSubmit,
    setValue,
    formState: { isValid },
  } = checkoutForm;
  const axiosInstance = useAxios();

  const handleCheckoutApi = async (data: any) => {
    if (userInfo) {
      
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.data.access_token}`,
        },
      };
      const response = await axios.post(
        `${API_BASE_URL}/checkout/`,
        data,
        config
      );
      if (response.status === 201) {
        toast("Checkout Successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch(clearCartAction(true));
        setTimeout(() => router.push("/order"), 3000);
      } else {
        toast("Checkout failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      router.push("/login?=checkout");
    }
  };

  

  const onSubmit = (data: any) => {
    if (isValid) {
      var totalP = cart.map((item) => item.totalPrice);
      if (
        !data.shipping_first_name &&
        !data.shipping_last_name &&
        !data.shipping_street_address &&
        !data.shipping_city &&
        !data.shipping_zip_code
      ) {
        data.product = cart.map((item) => item.id);
        data.quantity = cart.map((item) => item.quantity);
        data.total_price = totalP[0];
        data.billing_default = true;
        data.shipping_first_name = data.billing_first_name;
        data.shipping_last_name = data.billing_last_name;
        data.shipping_street_address = data.billing_street_address;
        data.shipping_city = data.billing_city;
        data.shipping_zip_code = data.billing_zip_code;
        data.payment_type = data.payment_type;

        handleCheckoutApi(data);
      } else {
        data.product = cart.map((item) => item.id);
        data.quantity = cart.map((item) => item.quantity);
        data.total_price = totalP[0];
        data.billing_default = true;
        handleCheckoutApi(data);
      }
    }
  };

  return (
    <div>
      <ToastContainer containerId="checkoutToast" draggable={false} />
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
            {coupon?.amount !== undefined && coupon?.amount !== null && (
              <tr className="cart-subtotal bb-no">
                <td>
                  <b>Coupon Discount</b>
                </td>
                <td>
                  <b>
                    {currency.currency_symbol}{" "}
                    {coupon?.amount * currency.currency_rate}
                  </b>
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr className="order-total">
              <th>
                <b>Total</b>
              </th>
              <td>
                {coupon?.amount !== undefined && coupon?.amount !== null ? (
                  <b>
                    {currency.currency_symbol}{" "}
                    {(totalPrice - coupon.amount) * currency.currency_rate}
                  </b>
                ) : (
                  <b>
                    {currency.currency_symbol}{" "}
                    {totalPrice * currency.currency_rate}
                  </b>
                )}
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
