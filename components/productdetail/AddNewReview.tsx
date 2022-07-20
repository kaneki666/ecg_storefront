import React from "react";

const AddNewReview = () => {
  return (
    <div className="col-xl-8 col-lg-7 mb-4">
      <div className="review-form-wrapper">
        <h3 className="title tab-pane-title font-weight-bold mb-1">
          Submit Your Review
        </h3>
        <p className="mb-3">
          Your email address will not be published. Required fields are marked *
        </p>
        <form action="#" method="POST" className="review-form">
          <div className="rating-form">
            <label htmlFor="rating">Your Rating Of This Product :</label>
            <span className="rating-stars">
              <a className="star-1" href="#">
                1
              </a>
              <a className="star-2" href="#">
                2
              </a>
              <a className="star-3" href="#">
                3
              </a>
              <a className="star-4" href="#">
                4
              </a>
              <a className="star-5" href="#">
                5
              </a>
            </span>
            <select
              name="rating"
              id="rating"
              required={true}
              style={{ display: "none" }}
            >
              <option value="">Rate…</option>
              <option value="5">Perfect</option>
              <option value="4">Good</option>
              <option value="3">Average</option>
              <option value="2">Not that bad</option>
              <option value="1">Very poor</option>
            </select>
          </div>
          <textarea
            cols={30}
            rows={6}
            placeholder="Write Your Review Here..."
            className="form-control"
            id="review"
          ></textarea>
          <div className="row gutter-md">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                id="author"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email"
                id="email_1"
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              className="custom-checkbox"
              id="save-checkbox"
            />
            <label htmlFor="save-checkbox">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
          <button type="submit" className="btn btn-dark">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewReview;
