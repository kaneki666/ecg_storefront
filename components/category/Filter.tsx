import React from "react";

const Filter = () => {
  return (
        <nav className="toolbox sticky-toolbox sticky-content fix-top">
            <div className="toolbox-left">
                <a href="#" className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle 
                    btn-icon-left d-block d-lg-none"><i
                        className="w-icon-category"></i><span>Filters</span></a>
                <div className="toolbox-item toolbox-sort select-box text-dark">
                    <label>Sort By :</label>
                    <select name="orderby" className="form-control">
                        <option value="default">Default sorting</option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by latest</option>
                        <option value="price-low">Sort by pric: low to high</option>
                        <option value="price-high">Sort by price: high to low</option>
                    </select>
                </div>
            </div>
            <div className="toolbox-right">
                <div className="toolbox-item toolbox-show select-box">
                    <select name="count" className="form-control">
                        <option value="9">Show 9</option>
                        <option value="12">Show 12</option>
                        <option value="24">Show 24</option>
                        <option value="36">Show 36</option>
                    </select>
                </div>
                <div className="toolbox-item toolbox-layout">
                    <a href="shop-banner-sidebar.html" className="icon-mode-grid btn-layout active">
                        <i className="w-icon-grid"></i>
                    </a>
                    <a href="shop-list.html" className="icon-mode-list btn-layout">
                        <i className="w-icon-list"></i>
                    </a>
                </div>
            </div>
        </nav>
  );
};

export default Filter;
