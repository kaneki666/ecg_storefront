import React from "react";

const Breadcrumb = () => {
  return (
    <div>
        <nav className="breadcrumb-nav mb-10 pb-1 pb-lg-10">
            <div className="container">
                <ul className="breadcrumb">
                    <li><a href="/">Home</a></li>
                    <li>Become a Vendor</li>
                </ul>
            </div>
        </nav>
    </div>
  );
};

export default Breadcrumb;
