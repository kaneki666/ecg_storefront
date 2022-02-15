
import React from "react";

const CompareContent = (props: any) => {
    const {compare_props} =props;

  return (
  <div> 
      <div className="page-content mb-10 pb-2">
            <div className="container">
        <div className="compare-table">
        <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-products">
            <div className="compare-col compare-field">Product</div>
            {compare_props.map((item:any)=>(
                <div className="compare-col compare-product" key={item.id}>
                    <a href="#" className="btn remove-product"><i className="w-icon-times-solid"></i></a>
                    <div className="product text-center">
                        <figure className="product-media">
                            <a href="#">
                                <img src={item.image} alt="Product" width={228}
                                    height={257} />
                            </a>
                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-cart w-icon-cart"></a>
                                <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"></a>
                            </div>
                        </figure>
                        <div className="product-details">
                            <h3 className="product-name"><a href="#">{item.title}</a></h3>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            
      
        <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-price">
            <div className="compare-col compare-field">Price</div>
            {compare_props.map((item:any)=>(
            <div className="compare-col compare-value" key={item.id}>
                <div className="product-price">
                    <span className="new-price">{item.price}</span>
                </div>
            </div>
            ))}
        </div>

        <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-availability">
            <div className="compare-col compare-field">Availability</div>
            {compare_props.map((item:any)=>(
            <div className="compare-col compare-value" key={item.id}>{item.availability}</div>))}
        </div>
        <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-description">
            <div className="compare-col compare-field">description</div>
            {compare_props.map((item:any)=>(
            <div className="compare-col compare-value" key={item.id}>
                <ul className="list-style-none list-type-check">
                    {item.description}
                </ul>
            </div>
            ))}
        </div>
        <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-reviews">
            <div className="compare-col compare-field">Ratings &amp; Reviews</div>
            {compare_props.map((item:any)=>(
            <div className="compare-col compare-rating" key={item.id}>
                <div className="ratings-container">
                    <div className="ratings-full">
                        <span className="ratings" style={{ width: "80%" }}></span>
                        <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="#" className="rating-reviews">{item.reviews}</a>
                </div>
            </div>
            ))}
        </div>
        <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-category">
            <div className="compare-col compare-field">Category</div>
            {compare_props.map((item:any)=>(
            <div className="compare-col compare-value" key={item.id}>{item.category}</div>
            ))}
        </div>
        <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-meta">
            <div className="compare-col compare-field">SKU</div>
            {compare_props.map((item:any)=>(
            <div className="compare-col compare-value" key={item.id}>{item.meta}</div>
            ))}
        </div>
        <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-color">
            <div className="compare-col compare-field">Color</div>
            {compare_props.map((item:any)=>(
            <div className="compare-col compare-value" key={item.id}>
                {/* <span className="swatch" style={{ background-color: "{item.color[0]}" }} title="Red"></span>
                <span className="swatch" style={{ background-color: "{item.color[1]}" }} title="Red"></span>
                <span className="swatch" style={{ background-color: "{item.color[2]}" }} title="Red"></span>
                <span className="swatch" style={{ background-color: "{item.color[3]}" }} title="Red"></span> */}
            </div>
            ))}
        </div>
        <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-size">
            <div className="compare-col compare-field">Size</div>
            {compare_props.map((item:any)=>(
            <div className="compare-col compare-value" key={item.id}>{item.size}</div>
            ))}
        </div>
        <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-brand">
            <div className="compare-col compare-field">Brand</div>
            {compare_props.map((item:any)=>(
            <div className="compare-col compare-value" key={item.id}>{item.brand}</div>
            ))}
        </div>
    </div>
  </div>
  </div>
  </div>
  );
};

export default CompareContent;
 
