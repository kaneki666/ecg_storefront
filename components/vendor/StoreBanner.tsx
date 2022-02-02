import Image from "next/image";
import React from "react";

const StoreBanner = (props: any) => {
    const {banner_image,brand_image,title,rating,address,email,phone_number} =props;


  return (
  <div>
    <div className="store store-wcfm-banner">
        <figure className="store-media">
            <Image src={banner_image} alt="Vendor"  width= {1240} height={460} layout="intrinsic" />
        </figure>
        <div className="store-content">
            <div className="store-content-left mr-auto">
                <div className="personal-info">
                    <figure className="seller-brand">
                        <Image src={brand_image} alt="Brand"  width= {100} height={100} />
                    </figure>
                    <div className="ratings-container">
                        <div className="ratings-full">
                            <span className="ratings" style={{ width:"100%" }} ></span>
                            <span className="tooltiptext tooltip-top"></span>
                        </div>
                    </div>
                </div>
                <div className="address-info">
                    <h4 className="store-title">{title}</h4>
                    <ul className="seller-info-list list-style-none">
                        <li className="store-address">
                            <i className="w-icon-map-marker"></i>
                            {address}
                        </li>
                        <li className="store-phone">
                            <a href="tel:123456789">
                                <i className="w-icon-phone"></i>
                                {phone_number}
                            </a>
                        </li>
                        <li className="store-email">
                            <a href="email:#">
                                <i className="far fa-envelope"></i>
                                {email}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="store-content-right">
                <div className="btn btn-white btn-rounded btn-icon-left btn-inquiry"><i
                        className="far fa-question-circle"></i>Inquiry</div>
                <div className="social-icons social-icons-colored border-thin">
                    <a href="#" className="social-icon social-facebook w-icon-facebook"></a>
                    <a href="#" className="social-icon social-twitter w-icon-twitter"></a>
                    <a href="#" className="social-icon social-linkedin fab fa-linkedin"></a>
                    <a href="#" className="social-icon social-youtube w-icon-youtube"></a>
                    <a href="#" className="social-icon social-instagram w-icon-instagram"></a>
                </div>
            </div>
        </div>
    </div>
  </div>   
  );
};

export default StoreBanner;
