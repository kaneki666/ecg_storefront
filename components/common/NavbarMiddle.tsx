import Image from "next/image";
import React from "react";
import NavbarCart from "./NavbarCart";
import NavbarLiveChat from "./NavbarLiveChat";

const NavbarMiddle = () => {
  return (
    <div className="header-middle">
      <div className="container">
        <div className="header-left mr-md-4">
          <a
            href="#"
            className="mobile-menu-toggle  w-icon-hamburger"
            aria-label="menu-toggle"
          ></a>
          <a href="/" className="logo ml-lg-0">
            <Image src="/images/logo.png" alt="logo" width="144" height="45" />
          </a>
          <form
            method="get"
            action="#"
            className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper"
          >
            <div className="select-box">
              <select id="category" name="category">
                <option value="">All Categories</option>
                <option value="4">Fashion</option>
                <option value="5">Furniture</option>
                <option value="6">Shoes</option>
                <option value="7">Sports</option>
                <option value="8">Games</option>
                <option value="9">Computers</option>
                <option value="10">Electronics</option>
                <option value="11">Kitchen</option>
                <option value="12">Clothing</option>
              </select>
            </div>
            <input
              type="text"
              className="form-control"
              name="search"
              id="search"
              placeholder="Search in..."
              required
            />
            <button className="btn btn-search" type="submit">
              <i className="w-icon-search"></i>
            </button>
          </form>
        </div>
        <div className="header-right ml-4">
          <NavbarLiveChat/>
          <a
            className="wishlist label-down link d-xs-show"
            href="wishlist"
          >
            <i className="w-icon-heart"></i>
            <span className="wishlist-label d-lg-show">Wishlist</span>
          </a>
          <a className="compare label-down link d-xs-show" href="compare">
            <i className="w-icon-compare"></i>
            <span className="compare-label d-lg-show">Compare</span>
          </a>
          <NavbarCart/>
        </div>
      </div>
    </div>
  );
};

export default NavbarMiddle;
