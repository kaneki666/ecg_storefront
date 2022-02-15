import React from "react";

const ShopBanner = () => {
  return (
  <div>
    <div className="shop-default-banner banner d-flex align-items-center mb-5 br-xs">
        {/* // style="background-image: url(assets/images/shop/banner1.jpg); background-color: #FFC74E;" > */}
        <div className="banner-content">
            <h4 className="banner-subtitle font-weight-bold">Accessories Collection</h4>
            <h3 className="banner-title text-white text-uppercase font-weight-bolder ls-normal">Smart Wrist
                Watches</h3>
            <a href="shop-banner-sidebar.html" className="btn btn-dark btn-rounded btn-icon-right">Discover
                Now<i className="w-icon-long-arrow-right"></i></a>
        </div>
    </div>
  </div>  
  );
};

export default ShopBanner;
