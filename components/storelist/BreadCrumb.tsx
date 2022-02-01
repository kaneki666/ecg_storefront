import React from "react";

const BreadCrumb = () => {
  return (
    <nav className="breadcrumb-nav">
      <div className="container">
        <ul className="breadcrumb mb-8">
          <li>
            <a href="demo1.html">Home</a>
          </li>
          <li>
            <a href="#">Vendor</a>
          </li>
          <li>
            <a href="#">WC Vendors</a>
          </li>
          <li>Store List</li>
        </ul>
      </div>
    </nav>
  );
};

export default BreadCrumb;
