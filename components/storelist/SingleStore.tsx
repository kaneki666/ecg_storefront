import React from "react";
import Image from "next/image"; 

const SingleStore = (props: any) => {
    const {banner_image,brand_image,title,rating,address,store_url} =props;

  return (<div>
      <div className="store store-list mt-4">
            <div className="store-header">
                <a href="#">
                    <figure className="store-banner">
                        <Image src={banner_image} alt="Vendor"  width= {400} height={188} layout="intrinsic" />
                    </figure>
                </a>
            </div>
            
            <div className="store-content">
                <figure className="seller-brand">
                   <Image src={brand_image} alt="Brand"  width= {80} height={80} />
                </figure>
                <div className="seller-date">
                    <h4 className="store-title">
                        <a href={store_url}>{title}</a>
                    </h4>
                    <div className="ratings-container">
                        <div className="ratings-full">
                            <span className="ratings" style={{ width:"100%" }}></span>
                            <span className="tooltiptext tooltip-top"></span>
                        </div>
                    </div>
                    <div className="store-address">
                        {address}
                    </div>
                    <a href={store_url} className="btn btn-dark btn-link btn-underline btn-icon-right btn-visit">
                        Visit Store<i className="w-icon-long-arrow-right"></i></a>
                </div>
            </div>
        </div>
  </div>
  );
};

export default SingleStore;