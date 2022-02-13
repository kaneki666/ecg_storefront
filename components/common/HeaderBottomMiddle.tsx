import React from "react";
import Image from "next/image";

const HeaderBottomMiddle = () => {
  return (
    <div>
        <nav className="main-nav">
            <ul className="menu active-underline">
            <li className="active">
                <a href="demo1.html">Home</a>
            </li>

            <li>
                <a>Store</a>
                <ul>
                <li>
                    <a href="storelist">Store Listing</a>
                </li>
                <li>
                    <a href="vendor">
                    Vendor Store
                    </a>
                </li>
                </ul>
            </li>

            <li>
                <a href="login">Become A Vendor</a>
            </li>
            </ul>
        </nav>
    </div>
  );
};

export default HeaderBottomMiddle;




