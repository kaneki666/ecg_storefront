import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { CartItemProps, RootAppStateProps } from "../../utils/types/reduxTypes";

interface IFormInput {
  divison: string;
}

const SideBarCart = () => {
  const { ProductReducer, AuthReducer } = useSelector(
    (state: RootAppStateProps) => state
  );
  const { cart } = ProductReducer;
  const { currency } = AuthReducer;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      let total = cart.reduce(
        (prev, item: CartItemProps) => prev + item.totalPrice,
        0
      );
      setTotal(total);
    }
  }, [cart.length]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  console.log(watch("division"));
  return (
    <div className="col-lg-4 sticky-sidebar-wrapper">
      <div className="sticky-sidebar">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="cart-summary mb-4">
            <h3 className="cart-title text-uppercase">Cart Totals</h3>
            <div className="cart-subtotal d-flex align-items-center justify-content-between">
              <label className="ls-25">Subtotal</label>
              <span>
                {currency.currency_symbol} {total * currency.currency_rate}
              </span>
            </div>

            <hr className="divider" />

            <ul className="shipping-methods mb-2">
              <li>
                <label className="shipping-title text-dark font-weight-bold">
                  Shipping
                </label>
              </li>
              <li>
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="free-shipping"
                    className="custom-control-input"
                    name="shipping"
                  />
                  <label
                    htmlFor="free-shipping"
                    className="custom-control-label color-dark"
                  >
                    Free Shipping
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="local-pickup"
                    className="custom-control-input"
                    name="shipping"
                  />
                  <label
                    htmlFor="local-pickup"
                    className="custom-control-label color-dark"
                  >
                    Local Pickup
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="flat-rate"
                    className="custom-control-input"
                    name="shipping"
                  />
                  <label
                    htmlFor="flat-rate"
                    className="custom-control-label color-dark"
                  >
                    Flat rate: {currency.currency_symbol} 100.00
                  </label>
                </div>
              </li>
            </ul>

            <div className="shipping-calculator">
              <p className="shipping-destination lh-1">
                Shipping to <strong>SYLHET</strong>.
              </p>

              <form className="shipping-calculator-form">
                <div className="form-group">
                  <div className="select-box">
                    <select
                      name="country"
                      className="form-control form-control-md"
                    >
                      <option value="bd">Bangladesh</option>
                      <option value="uk">United Kingdom</option>
                      <option value="fr">France</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <div className="select-box">
                    <select
                      className="form-control form-control-md"
                      {...register("division")}
                    >
                      {cities.map((item, index) => (
                        <option key={item} value={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-md"
                    type="text"
                    name="town-city"
                    placeholder="Town / City"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-md"
                    type="text"
                    name="zipcode"
                    placeholder="ZIP"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-dark btn-outline btn-rounded"
                >
                  Update Totals
                </button>
              </form>
            </div>

            <hr className="divider mb-6" />
            <div className="order-total d-flex justify-content-between align-items-center">
              <label>Total</label>
              <span className="ls-50">
                {currency.currency_symbol} {total * currency.currency_rate}
              </span>
            </div>
            <a
              href="#"
              className="btn btn-block btn-dark btn-icon-right btn-rounded  btn-checkout"
            >
              Proceed to checkout<i className="w-icon-long-arrow-right"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SideBarCart;

var cities = [
  "Dhaka",
  "Chattogram",
  "Barishal",
  "Khulna",
  "Mymensingh",
  "Rajshahi",
  "Rangpur",
  "Sylhet",
];
