import React from "react";

const CustomerReview = () => {
  return (
    <div className="tab tab-nav-boxed tab-nav-outline tab-nav-center">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <a href="#show-all" className="nav-link active">
            Show All
          </a>
        </li>
        <li className="nav-item">
          <a href="#helpful-positive" className="nav-link">
            Most Helpful Positive
          </a>
        </li>
        <li className="nav-item">
          <a href="#helpful-negative" className="nav-link">
            Most Helpful Negative
          </a>
        </li>
        <li className="nav-item">
          <a href="#highest-rating" className="nav-link">
            Highest Rating
          </a>
        </li>
        <li className="nav-item">
          <a href="#lowest-rating" className="nav-link">
            Lowest Rating
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane active" id="show-all">
          <ul className="comments list-style-none">
            <li className="comment">
              <div className="comment-body">
                <figure className="comment-avatar">
                  <img
                    src="/images/agents/1-100x100.png"
                    alt="Commenter Avatar"
                    width="90"
                    height="90"
                  />
                </figure>
                <div className="comment-content">
                  <h4 className="comment-author">
                    <a href="#">John Doe</a>
                    <span className="comment-date">
                      March 22, 2021 at 1:54 pm
                    </span>
                  </h4>
                  <div className="ratings-container comment-rating">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                  </div>
                  <p>
                    pellentesque habitant morbi tristique senectus et. In dictum
                    non consectetur a erat. Nunc ultrices eros in cursus turpis
                    massa tincidunt ante in nibh mauris cursus mattis. Cras
                    ornare arcu dui vivamus arcu felis bibendum ut tristique.
                  </p>
                  <div className="comment-action">
                    <a
                      href="#"
                      className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                    >
                      <i className="far fa-thumbs-up"></i>Helpful (1)
                    </a>
                    <a
                      href="#"
                      className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                    >
                      <i className="far fa-thumbs-down"></i>Unhelpful (0)
                    </a>
                    <div className="review-image">
                      <a href="#">
                        <figure>
                          <img
                            src="/images/products/default/review-img-1.jpg"
                            width="60"
                            height="60"
                            alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                            data-zoom-image="/images/products/default/review-img-1-800x900.jpg"
                          />
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="comment">
              <div className="comment-body">
                <figure className="comment-avatar">
                  <img
                    src="/images/agents/2-100x100.png"
                    alt="Commenter Avatar"
                    width="90"
                    height="90"
                  />
                </figure>
                <div className="comment-content">
                  <h4 className="comment-author">
                    <a href="#">John Doe</a>
                    <span className="comment-date">
                      March 22, 2021 at 1:52 pm
                    </span>
                  </h4>
                  <div className="ratings-container comment-rating">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                  </div>
                  <p>
                    Nullam a magna porttitor, dictum risus nec, faucibus sapien.
                    Ultrices eros in cursus turpis massa tincidunt ante in nibh
                    mauris cursus mattis. Cras ornare arcu dui vivamus arcu
                    felis bibendum ut tristique.
                  </p>
                  <div className="comment-action">
                    <a
                      href="#"
                      className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                    >
                      <i className="far fa-thumbs-up"></i>Helpful (1)
                    </a>
                    <a
                      href="#"
                      className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                    >
                      <i className="far fa-thumbs-down"></i>Unhelpful (0)
                    </a>
                    <div className="review-image">
                      <a href="#">
                        <figure>
                          <img
                            src="/images/products/default/review-img-2.jpg"
                            width="60"
                            height="60"
                            alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                            data-zoom-image="/images/products/default/review-img-2.jpg"
                          />
                        </figure>
                      </a>
                      <a href="#">
                        <figure>
                          <img
                            src="/images/products/default/review-img-3.jpg"
                            width="60"
                            height="60"
                            alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                            data-zoom-image="/images/products/default/review-img-3.jpg"
                          />
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="comment">
              <div className="comment-body">
                <figure className="comment-avatar">
                  <img
                    src="/images/agents/3-100x100.png"
                    alt="Commenter Avatar"
                    width="90"
                    height="90"
                  />
                </figure>
                <div className="comment-content">
                  <h4 className="comment-author">
                    <a href="#">John Doe</a>
                    <span className="comment-date">
                      March 22, 2021 at 1:21 pm
                    </span>
                  </h4>
                  <div className="ratings-container comment-rating">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                  </div>
                  <p>
                    In fermentum et sollicitudin ac orci phasellus. A
                    condimentum vitae sapien pellentesque habitant morbi
                    tristique senectus et. In dictum non consectetur a erat.
                    Nunc scelerisque viverra mauris in aliquam sem fringilla.
                  </p>
                  <div className="comment-action">
                    <a
                      href="#"
                      className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                    >
                      <i className="far fa-thumbs-up"></i>Helpful (0)
                    </a>
                    <a
                      href="#"
                      className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                    >
                      <i className="far fa-thumbs-down"></i>Unhelpful (1)
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="tab-pane" id="helpful-positive">
          <ul className="comments list-style-none">
            <li className="comment">
              <div className="comment-body">
                <figure className="comment-avatar">
                  <img
                    src="/images/agents/1-100x100.png"
                    alt="Commenter Avatar"
                    width="90"
                    height="90"
                  />
                </figure>
                <div className="comment-content">
                  <h4 className="comment-author">
                    <a href="#">John Doe</a>
                    <span className="comment-date">
                      March 22, 2021 at 1:54 pm
                    </span>
                  </h4>
                  <div className="ratings-container comment-rating">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                  </div>
                  <p>
                    pellentesque habitant morbi tristique senectus et. In dictum
                    non consectetur a erat. Nunc ultrices eros in cursus turpis
                    massa tincidunt ante in nibh mauris cursus mattis. Cras
                    ornare arcu dui vivamus arcu felis bibendum ut tristique.
                  </p>
                  <div className="comment-action">
                    <a
                      href="#"
                      className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                    >
                      <i className="far fa-thumbs-up"></i>Helpful (1)
                    </a>
                    <a
                      href="#"
                      className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                    >
                      <i className="far fa-thumbs-down"></i>Unhelpful (0)
                    </a>
                    <div className="review-image">
                      <a href="#">
                        <figure>
                          <img
                            src="/images/products/default/review-img-1.jpg"
                            width="60"
                            height="60"
                            alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                            data-zoom-image="/images/products/default/review-img-1.jpg"
                          />
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="comment">
              <div className="comment-body">
                <figure className="comment-avatar">
                  <img
                    src="/images/agents/2-100x100.png"
                    alt="Commenter Avatar"
                    width="90"
                    height="90"
                  />
                </figure>
                <div className="comment-content">
                  <h4 className="comment-author">
                    <a href="#">John Doe</a>
                    <span className="comment-date">
                      March 22, 2021 at 1:52 pm
                    </span>
                  </h4>
                  <div className="ratings-container comment-rating">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                  </div>
                  <p>
                    Nullam a magna porttitor, dictum risus nec, faucibus sapien.
                    Ultrices eros in cursus turpis massa tincidunt ante in nibh
                    mauris cursus mattis. Cras ornare arcu dui vivamus arcu
                    felis bibendum ut tristique.
                  </p>
                  <div className="comment-action">
                    <a
                      href="#"
                      className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                    >
                      <i className="far fa-thumbs-up"></i>Helpful (1)
                    </a>
                    <a
                      href="#"
                      className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                    >
                      <i className="far fa-thumbs-down"></i>Unhelpful (0)
                    </a>
                    <div className="review-image">
                      <a href="#">
                        <figure>
                          <img
                            src="/images/products/default/review-img-2.jpg"
                            width="60"
                            height="60"
                            alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                            data-zoom-image="/images/products/default/review-img-2-800x900.jpg"
                          />
                        </figure>
                      </a>
                      <a href="#">
                        <figure>
                          <img
                            src="/images/products/default/review-img-3.jpg"
                            width="60"
                            height="60"
                            alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                            data-zoom-image="/images/products/default/review-img-3-800x900.jpg"
                          />
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="tab-pane" id="helpful-negative">
          <ul className="comments list-style-none">
            <li className="comment">
              <div className="comment-body">
                <figure className="comment-avatar">
                  <img
                    src="/images/agents/3-100x100.png"
                    alt="Commenter Avatar"
                    width="90"
                    height="90"
                  />
                </figure>
                <div className="comment-content">
                  <h4 className="comment-author">
                    <a href="#">John Doe</a>
                    <span className="comment-date">
                      March 22, 2021 at 1:21 pm
                    </span>
                  </h4>
                  <div className="ratings-container comment-rating">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                  </div>
                  <p>
                    In fermentum et sollicitudin ac orci phasellus. A
                    condimentum vitae sapien pellentesque habitant morbi
                    tristique senectus et. In dictum non consectetur a erat.
                    Nunc scelerisque viverra mauris in aliquam sem fringilla.
                  </p>
                  <div className="comment-action">
                    <a
                      href="#"
                      className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                    >
                      <i className="far fa-thumbs-up"></i>Helpful (0)
                    </a>
                    <a
                      href="#"
                      className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                    >
                      <i className="far fa-thumbs-down"></i>Unhelpful (1)
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="tab-pane" id="highest-rating">
          <ul className="comments list-style-none">
            <li className="comment">
              <div className="comment-body">
                <figure className="comment-avatar">
                  <img
                    src="/images/agents/2-100x100.png"
                    alt="Commenter Avatar"
                    width="90"
                    height="90"
                  />
                </figure>
                <div className="comment-content">
                  <h4 className="comment-author">
                    <a href="#">John Doe</a>
                    <span className="comment-date">
                      March 22, 2021 at 1:52 pm
                    </span>
                  </h4>
                  <div className="ratings-container comment-rating">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                  </div>
                  <p>
                    Nullam a magna porttitor, dictum risus nec, faucibus sapien.
                    Ultrices eros in cursus turpis massa tincidunt ante in nibh
                    mauris cursus mattis. Cras ornare arcu dui vivamus arcu
                    felis bibendum ut tristique.
                  </p>
                  <div className="comment-action">
                    <a
                      href="#"
                      className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                    >
                      <i className="far fa-thumbs-up"></i>Helpful (1)
                    </a>
                    <a
                      href="#"
                      className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                    >
                      <i className="far fa-thumbs-down"></i>Unhelpful (0)
                    </a>
                    <div className="review-image">
                      <a href="#">
                        <figure>
                          <img
                            src="/images/products/default/review-img-2.jpg"
                            width="60"
                            height="60"
                            alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                            data-zoom-image="/images/products/default/review-img-2-800x900.jpg"
                          />
                        </figure>
                      </a>
                      <a href="#">
                        <figure>
                          <img
                            src="/images/products/default/review-img-3.jpg"
                            width="60"
                            height="60"
                            alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                            data-zoom-image="/images/products/default/review-img-3-800x900.jpg"
                          />
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="tab-pane" id="lowest-rating">
          <ul className="comments list-style-none">
            <li className="comment">
              <div className="comment-body">
                <figure className="comment-avatar">
                  <img
                    src="/images/agents/1-100x100.png"
                    alt="Commenter Avatar"
                    width="90"
                    height="90"
                  />
                </figure>
                <div className="comment-content">
                  <h4 className="comment-author">
                    <a href="#">John Doe</a>
                    <span className="comment-date">
                      March 22, 2021 at 1:54 pm
                    </span>
                  </h4>
                  <div className="ratings-container comment-rating">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                  </div>
                  <p>
                    pellentesque habitant morbi tristique senectus et. In dictum
                    non consectetur a erat. Nunc ultrices eros in cursus turpis
                    massa tincidunt ante in nibh mauris cursus mattis. Cras
                    ornare arcu dui vivamus arcu felis bibendum ut tristique.
                  </p>
                  <div className="comment-action">
                    <a
                      href="#"
                      className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                    >
                      <i className="far fa-thumbs-up"></i>Helpful (1)
                    </a>
                    <a
                      href="#"
                      className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                    >
                      <i className="far fa-thumbs-down"></i>Unhelpful (0)
                    </a>
                    <div className="review-image">
                      <a href="#">
                        <figure>
                          <img
                            src="/images/products/default/review-img-3.jpg"
                            width="60"
                            height="60"
                            alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                            data-zoom-image="/images/products/default/review-img-3-800x900.jpg"
                          />
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
