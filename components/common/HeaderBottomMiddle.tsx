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
                <a href="vendor-dokan-store.html">Store</a>
                <ul>
                <li>
                    <a href="vendor-dokan-store-list.html">Store Listing</a>
                </li>
                <li>
                    <a href="vendor-wcfm-store-product-grid.html">
                    Vendor Store
                    </a>
                </li>
                </ul>
            </li>

            <li>
                <a href="about-us.html">Become A Vendor</a>
            </li>
            </ul>
        </nav>
    </div>
  );
};

export default HeaderBottomMiddle;




