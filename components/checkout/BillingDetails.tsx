import React from "react";

const BillingDetails = () => {
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
              name="firstname"
              required
            />
          </div>
        </div>
        <div className="col-xs-6">
          <div className="form-group">
            <label>Last name *</label>
            <input
              type="text"
              className="form-control form-control-md"
              name="lastname"
              required
            />
          </div>
        </div>
      </div>
      {/* <div className="form-group">
            <label>Company name (optional)</label>
            <input type="text" className="form-control form-control-md" name="company-name"/>
        </div> */}
      <div className="form-group">
        <label>Country / Region *</label>
        <div className="select-box">
          <select name="country" className="form-control form-control-md">
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
          name="street-address-1"
          required
        />
        {/* <input type="text" placeholder="Apartment, suite, unit, etc. (optional)"
                className="form-control form-control-md" name="street-address-2" required/> */}
      </div>
      <div className="row gutter-sm">
        <div className="col-md-6">
          <div className="form-group">
            <label>Town / City *</label>
            <input
              type="text"
              className="form-control form-control-md"
              name="town"
              required
            />
          </div>
          <div className="form-group">
            <label>ZIP *</label>
            <input
              type="text"
              className="form-control form-control-md"
              name="zip"
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          {/* <div className="form-group">
            <label>State *</label>
            <div className="select-box">
              <select name="country" className="form-control form-control-md">
                <option value="default">California</option>
                <option value="uk">United Kingdom (UK)</option>
                <option value="us">United States</option>
                <option value="fr">France</option>
                <option value="aus">Australia</option>
              </select>
            </div>
          </div> */}
          <div className="form-group">
            <label>Phone *</label>
            <input
              type="text"
              className="form-control form-control-md"
              name="phone"
              required
            />
          </div>
        </div>
      </div>
      <div className="form-group mb-7">
        <label>Email address *</label>
        <input
          type="email"
          className="form-control form-control-md"
          name="email"
          required
        />
      </div>
      <div className="form-group checkbox-toggle pb-2">
        <input
          type="checkbox"
          className="custom-checkbox"
          id="shipping-toggle"
          name="shipping-toggle"
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
                name="firstname"
                required
              />
            </div>
          </div>
          <div className="col-xs-6">
            <div className="form-group">
              <label>Last name *</label>
              <input
                type="text"
                className="form-control form-control-md"
                name="lastname"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Company name (optional)</label>
          <input
            type="text"
            className="form-control form-control-md"
            name="company-name"
          />
        </div>
        <div className="form-group">
          <label>Country / Region *</label>
          <div className="select-box">
            <select name="country" className="form-control form-control-md">
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
            name="street-address-1"
            required
          />
          <input
            type="text"
            placeholder="Apartment, suite, unit, etc. (optional)"
            className="form-control form-control-md"
            name="street-address-2"
            required
          />
        </div>
        <div className="row gutter-sm">
          <div className="col-md-6">
            <div className="form-group">
              <label>Town / City *</label>
              <input
                type="text"
                className="form-control form-control-md"
                name="town"
                required
              />
            </div>
            <div className="form-group">
              <label>Postcode *</label>
              <input
                type="text"
                className="form-control form-control-md"
                name="postcode"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Country (optional)</label>
              <input
                type="text"
                className="form-control form-control-md"
                name="zip"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div className="form-group mt-3">
        <label htmlFor="order-notes">Order notes (optional)</label>
        <textarea
          className="form-control mb-0"
          id="order-notes"
          name="order-notes" //cols="30"
          //rows="4"
          placeholder="Notes about your order, e.g special notes for delivery"
        ></textarea>
      </div>
    </div>
  );
};

export default BillingDetails;
