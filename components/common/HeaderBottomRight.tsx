import React from "react";
import Image from "next/image";

const HeaderBottomRight = () => {
  return (
    <div className="header-right">
        <a href="#" className="d-xl-show">
            <i className="w-icon-map-marker mr-1"></i>Track Order
        </a>
        <a href="#">
            <i className="w-icon-sale"></i>Daily Deals
        </a>
    </div>
  );
};

export default HeaderBottomRight;




