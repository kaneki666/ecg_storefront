import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCompareAction } from "../../store/products/actions";
import {
  CompareProductProps,
  RootAppStateProps,
} from "../../utils/types/reduxTypes";

const CompareContent = (props: any) => {
  const { compare_props } = props;
  const { compareProducts } = useSelector(
    (state: RootAppStateProps) => state.ProductReducer
  );
  const dispatch = useDispatch();

  const handleRemoveToComparelist = (e: CompareProductProps) => {
    dispatch(removeFromCompareAction(e.id));
  };
  console.log(compareProducts);

  return (
    <div>
      <div className="page-content mb-10 pb-2">
        <div className="container">
          {compareProducts && compareProducts.length > 0 ? (
            // <div> {compareProducts.map((item)=> item.id )}</div>
            <div className="compare-table">
              <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-products">
                <div className="compare-col compare-field">Product</div>
                {compareProducts.map((item) => (
                  <div className="compare-col compare-product" key={item.id}>
                    <a
                      onClick={(e) => {
                        handleRemoveToComparelist(item);
                      }}
                      href="#"
                      className="btn remove-product"
                    >
                      <i className="w-icon-times-solid"></i>
                    </a>
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="#">
                          <img
                            src={item.thumbnail}
                            alt="Product"
                            width={228}
                            height={257}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                          ></a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h3 className="product-name">
                          <a href="#">{item.title}</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
                ;
              </div>

              <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-price">
                <div className="compare-col compare-field">Price</div>
                {compareProducts.map((item) => (
                  <div className="compare-col compare-value" key={item.id}>
                    <div className="product-price">
                      <span className="new-price">{item.unit_price}</span>
                    </div>
                  </div>
                ))}
                ;
              </div>

              <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-description">
                <div className="compare-col compare-field">description</div>
                {compareProducts.map((item) => (
                  <div className="compare-col compare-value" key={item.id}>
                    <ul className="list-style-none list-type-check">
                      {item.short_description}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-reviews">
                <div className="compare-col compare-field">
                  Ratings &amp; Reviews
                </div>
                <div className="compare-col compare-rating">
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "80%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    {/* <a href="#" className="rating-reviews">
                      {item.reviews}
                    </a> */}
                  </div>
                </div>
              </div>

              <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-category">
                <div className="compare-col compare-field">Category</div>
                {compareProducts.map((item) => (
                  <div className="compare-col compare-value" key={item.id}>
                    {item.category_name}
                  </div>
                ))}
              </div>

              {/* <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-meta">
              <div className="compare-col compare-field">SKU</div>

                <div className="compare-col compare-value" key={item.id}>
                  {item.meta}
                </div>

            </div> */}
              {/* <div>
            <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-color">
              <div className="compare-col compare-field">Color</div>
              {compareProducts.map((item) => (
                <div className="compare-col compare-value" key={item.id}>
               <span className="swatch" style={{ background-color: "{item.color[0]}" }} title="Red"></span> 
              </div>
              ))}
              </div>

            </div> */}

              {/* <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-size">
                <div className="compare-col compare-field">Size</div>
                {compareProducts.map((item) => (
                <div className="compare-col compare-value" key={item.id}>
                  {item.size}
                </div>
                ))}
              </div>
              <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-brand">
                <div className="compare-col compare-field">Brand</div>
                {compareProducts.map((item) => (
                <div className="compare-col compare-value" key={item.id}>
                  {item.brand}
                </div>
                ))}
              </div> */}
            </div>
          ) : (
            <h3 style={{ textAlign: "center" }}>Add products to compare</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompareContent;
{
  /* <div className="compare-table">
            <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-products">
              <div className="compare-col compare-field">Product</div>

                <div className="compare-col compare-product" key={item.id}>
                  <a href="#" className="btn remove-product">
                    <i className="w-icon-times-solid"></i>
                  </a>
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="#">
                        <img
                          src={item.image}
                          alt="Product"
                          width={228}
                          height={257}
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h3 className="product-name">
                        <a href="#">{item.title}</a>
                      </h3>
                    </div>
                  </div>
                </div>

            </div>

            <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-price">
              <div className="compare-col compare-field">Price</div>

                <div className="compare-col compare-value" key={item.id}>
                  <div className="product-price">
                    <span className="new-price">{item.price}</span>
                  </div>
                </div>

            </div>

            <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-availability">
              <div className="compare-col compare-field">Availability</div>

                <div className="compare-col compare-value" key={item.id}>
                  {item.availability}
                </div>

            </div>
            <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-description">
              <div className="compare-col compare-field">description</div>

                <div className="compare-col compare-value" key={item.id}>
                  <ul className="list-style-none list-type-check">
                    {item.description}
                  </ul>
                </div>

            </div>
            <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-reviews">
              <div className="compare-col compare-field">
                Ratings &amp; Reviews
              </div>

                <div className="compare-col compare-rating" key={item.id}>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "80%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="#" className="rating-reviews">
                      {item.reviews}
                    </a>
                  </div>
                </div>

            </div>
            <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-category">
              <div className="compare-col compare-field">Category</div>

                <div className="compare-col compare-value" key={item.id}>
                  {item.category}
                </div>

            </div>
            <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-meta">
              <div className="compare-col compare-field">SKU</div>

                <div className="compare-col compare-value" key={item.id}>
                  {item.meta}
                </div>

            </div>
            <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-color">
              <div className="compare-col compare-field">Color</div>

                <div className="compare-col compare-value" key={item.id}>
                  {/* <span className="swatch" style={{ background-color: "{item.color[0]}" }} title="Red"></span>
                <span className="swatch" style={{ background-color: "{item.color[1]}" }} title="Red"></span>
                <span className="swatch" style={{ background-color: "{item.color[2]}" }} title="Red"></span>
                <span className="swatch" style={{ background-color: "{item.color[3]}" }} title="Red"></span> */
}
//       </div>

//   </div>
//   <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-size">
//     <div className="compare-col compare-field">Size</div>

//       <div className="compare-col compare-value" key={item.id}>
//         {item.size}
//       </div>

//   </div>
//   <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-brand">
//     <div className="compare-col compare-field">Brand</div>

//       <div className="compare-col compare-value" key={item.id}>
//         {item.brand}
//       </div>

//   </div>
// </div> */}
