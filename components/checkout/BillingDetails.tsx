import React from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

const BillingDetails = ({
  checkoutForm,
}: {
  checkoutForm: UseFormReturn<FieldValues, object>;
}) => {
  const {
    register,
    formState: { errors },
    watch,
  } = checkoutForm;

  return (
    <div>
      <h3 className="title billing-title text-uppercase ls-10 pt-1 pb-3 mb-0">
        Billing Details
      </h3>

      <div className="row gutter-sm">
        <div className="col-xs-6">
          <div className="form-group">
            <label>First name *</label>
            <input
              type="text"
              className="form-control form-control-md"
              required
              {...register("billing_first_name", {
                required: "First name is Required",
              })}
            />

            {errors.billing_first_name && (
              <p className="errorInput">{errors.billing_first_name.message}</p>
            )}
          </div>
        </div>
        <div className="col-xs-6">
          <div className="form-group">
            <label>Last name *</label>
            <input
              type="text"
              className="form-control form-control-md"
              required
              {...register("billing_last_name", {
                required: "Last name is Required",
              })}
            />
            {errors.billing_last_name && (
              <p className="errorInput">{errors.billing_last_name.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="form-group">
        <label>Country / Region *</label>
        <div className="select-box">
          <select
            className="form-control form-control-md"
            {...register("billing_country", {
              required: "Billing country is Required",
            })}
          >
            <option value="bd">Bangladesh (BD)</option>
            <option value="uk">United Kingdom (UK)</option>
            <option value="us">United States</option>
            <option value="fr">France</option>
            <option value="aus">Australia</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label>Street address *</label>
        <input
          type="text"
          placeholder="House number and street name"
          className="form-control form-control-md mb-2"
          required
          {...register("billing_street_address", {
            required: "Address is Required",
          })}
        />
        {errors.billing_street_address && (
          <p className="errorInput">{errors.billing_street_address.message}</p>
        )}
      </div>
      <div className="row gutter-sm">
        <div className="col-md-6">
          <div className="form-group">
            <label>City *</label>
            <input
              type="text"
              className="form-control form-control-md"
              required
              {...register("billing_city", {
                required: "Billing City is Required",
              })}
            />
            {errors.billing_city && (
              <p className="errorInput">{errors.billing_city.message}</p>
            )}
          </div>
          <div className="form-group">
            <label>ZIP *</label>
            <input
              type="number"
              className="form-control form-control-md"
              {...register("billing_zip_code", {
                required: "Billing zip code is Required",
              })}
              required
            />
            {errors.billing_zip_code && (
              <p className="errorInput">{errors.billing_zip_code.message}</p>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Phone *</label>
            <input
              type="text"
              className="form-control form-control-md"
              {...register("billing_phone", {
                required: {
                  value: true,
                  message: "Phone number is Required",
                },
                pattern: {
                  value: /^(\+)[0-9]{7,16}$/,
                  message: "Invalid phone number",
                },
              })}
              required
            />
            {errors.billing_phone && (
              <p className="errorInput">{errors.billing_phone.message}</p>
            )}
          </div>
        </div>
      </div>
      <div className="form-group mb-7">
        <label>Email address *</label>
        <input
          type="email"
          className="form-control form-control-md"
          {...register("billing_email", {
            required: "Billing email is Required",
            pattern: {
              value: email_expression,
              message: "Invalid email ",
            },
          })}
          required
        />
        {errors.billing_email && (
          <p className="errorInput">{errors.billing_email.message}</p>
        )}
      </div>
      <div className="form-group checkbox-toggle pb-2">
        <input
          type="checkbox"
          className="custom-checkbox"
          id="shipping-toggle"
          {...register("billing_different")}
        />
        <label htmlFor="shipping-toggle">Ship to a different address?</label>
      </div>
      <div className="checkbox-content">
        <div className="row gutter-sm">
          <div className="col-xs-6">
            <div className="form-group">
              <label>First name *</label>
              <input
                type="text"
                className="form-control form-control-md"
                {...register("shipping_first_name", {
                  required: {
                    value: !watch("billing_different") ? false : true,
                    message: "Shipping first name is Required",
                  },
                })}
              />
              {errors.shipping_first_name && (
                <p className="errorInput">
                  {errors.shipping_first_name.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="form-group">
              <label>Last name *</label>
              <input
                type="text"
                className="form-control form-control-md"
                {...register("shipping_last_name", {
                  required: {
                    value: !watch("billing_different") ? false : true,
                    message: "Shipping last name is Required",
                  },
                })}
                required
              />
              {errors.shipping_last_name && (
                <p className="errorInput">
                  {errors.shipping_last_name.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-group">
            <label>Country / Region *</label>
            <div className="select-box">
              <select
                className="form-control form-control-md"
                {...register("shipping_country")}
              >
                <option value="default">United States (US)</option>
                <option value="uk">United Kingdom (UK)</option>
                <option value="us">United States</option>
                <option value="fr">France</option>
                <option value="aus">Australia</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Street address *</label>
            <input
              type="text"
              placeholder="House number and street name"
              className="form-control form-control-md mb-2"
              {...register("shipping_street_address", {
                required: {
                  value: !watch("billing_different") ? false : true,
                  message: "Shipping address is Required",
                },
              })}
              required
            />
            {errors.shipping_street_address && (
              <p className="errorInput">
                {errors.shipping_street_address.message}
              </p>
            )}
          </div>
          <div className="row gutter-sm">
            <div className="col-md-6">
              <div className="form-group">
                <label> Shipping City *</label>
                <input
                  type="text"
                  className="form-control form-control-md"
                  {...register("shipping_city", {
                    required: {
                      value: !watch("billing_different") ? false : true,
                      message: "Shipping address is Required",
                    },
                  })}
                  required
                />
                {errors.shipping_city && (
                  <p className="errorInput">{errors.shipping_city.message}</p>
                )}
              </div>
              <div className="form-group">
                <label>Zip *</label>
                <input
                  type="text"
                  className="form-control form-control-md"
                  {...register("shipping_zip_code", {
                    required: {
                      value: !watch("billing_different") ? false : true,
                      message: "Shipping zip code is Required",
                    },
                  })}
                  required
                />
                {errors.shipping_zip_code && (
                  <p className="errorInput">
                    {errors.shipping_zip_code.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <label htmlFor="order-notes">Order notes (optional)</label>
        <textarea
          className="form-control mb-0"
          id="order-notes"
          placeholder="Notes about your order, e.g special notes for delivery"
          {...register("notes")}
        ></textarea>
      </div>
    </div>
  );
};

export default BillingDetails;

const email_expression =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
