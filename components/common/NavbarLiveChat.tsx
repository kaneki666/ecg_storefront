import Image from "next/image";
import React from "react";

const NavbarLiveChat = () => {
  return (
    <div className="header-call d-xs-show d-lg-flex align-items-center">
        <a href="tel:#" className="w-icon-call"></a>
        <div className="call-info d-lg-show">
            <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
            <a href="mailto:#" className="text-capitalize">
                Live Chat
            </a>{" "}
            or :
            </h4>
            <a href="tel:#" className="phone-number font-weight-bolder ls-50">
            0(800)123-456
            </a>
        </div>
    </div>
  );
};

export default NavbarLiveChat;
