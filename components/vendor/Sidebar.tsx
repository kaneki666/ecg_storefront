import Image from "next/image";
import React from "react";

const Sidebar = () => {

  return (
    <div>
        <div className="sidebar-overlay"></div>
        <a className="sidebar-close" href="#"><i className="close-icon"></i></a>
        <a href="#" className="sidebar-toggle"><i className="w-icon-angle-right"></i></a>
        <div className="sidebar-content">
            <div className="sticky-sidebar">
                <div className="widget widget-collapsible widget-categories">
                    <h3 className="widget-title"><span>All Categories</span></h3>
                    <ul className="widget-body filter-items search-ul">
                        <li>
                            <a href="#">Clothing</a>
                            <ul>
                                <li><a href="#">Men's</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Healthy &amp; Beauty</a></li>
                        <li><a href="#">Home &amp; Kitchen</a></li>
                        <li>
                            <a href="#">Jewelry &amp; Watch</a>
                            <ul>
                                <li><a href="#">Smart Watch</a></li>
                                <li><a href="#">Watch</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Office Electronics</a>
                            <ul>
                                <li><a href="#">Accessories</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="widget widget-collapsible widget-coupons">
                    <h3 className="widget-title"><span>Store Coupons</span></h3>
                    <div className="widget-body">
                        <div className="coupon">
                            First Shopping Coupon
                            <div className="coupon-tip">
                                <div className="coupon-info-title">FREE Shipping Coupon</div>
                                <div className="coupon-info-date">April 30, 2021</div>
                                <div>Test coupon for vendor page</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="widget widget-collapsible widget-time">
                    <h3 className="widget-title"><span><i className="far fa-clock"></i>Store Time</span>
                    </h3>
                    <ul className="widget-body">
                        <li>
                            <span>Monday:</span>9:00 - 10:00 pm
                        </li>
                        <li>
                            <span>Tuesday:</span>9:00 - 10:00 pm
                        </li>
                        <li>
                            <span>Wednesday:</span>9:00 - 10:00 pm
                        </li>
                        <li>
                            <span>Thursday:</span>9:00 - 2:00 pm
                        </li>
                        <li>
                            <span>Friday:</span>9:00 - 10:00 pm
                        </li>
                        <li>
                            <span>Saturday:</span>9:00 - 10:00 pm
                        </li>
                        <li>
                            <span>Sunday:</span>9:00 - 10:00 pm
                        </li>
                    </ul>
                </div>
                
                <div className="widget widget-collapsible">
                    <h3 className="widget-title"><span><i className="w-icon-truck"></i>Shipping Rules</span>
                    </h3>
                    <div className="widget-body">
                        <p className="mb-0">Delivery Time: 1-2 business days</p>
                    </div>
                </div>
                
                <div className="widget widget-collapsible widget-location">
                    <h3 className="widget-title"><span>Store Location</span></h3>
                    <div className="widget-body">
                        <div className="google-map" id="googlemaps"></div>
                    </div>
                </div>
                
                <div className="widget widget-collapsible widget-products">
                    <h3 className="widget-title"><span>Best Selling</span></h3>
                    <div className="widget-body">
                        <div className="product product-widget">
                            <figure className="product-media">
                                <a href="#">
                                    <Image src="/images/shop/1.jpg" alt="Product"  width= {100} height={106} />
                                </a>
                            </figure>
                            <div className="product-details">
                                <h4 className="product-name">
                                    <a href="#">3D Television</a>
                                </h4>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{ width:"100%" }} ></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                </div>
                                <div className="product-price">$220.00</div>
                            </div>
                        </div>
                        <div className="product product-widget">
                            <figure className="product-media">
                                <a href="#">
                                    <Image src="/images/shop/2-1.jpg" alt="Product"  width= {100} height={106} />
                                </a>
                            </figure>
                            <div className="product-details">
                                <h4 className="product-name">
                                    <a href="#">Alarm Clock With Lamp</a>
                                </h4>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{ width:"100%" }} ></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                </div>
                                <div className="product-price">
                                    <ins className="new-price">$30.00</ins><del
                                        className="old-price">$60.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="product product-widget">
                            <figure className="product-media">
                                <a href="#">
                                    <Image src="/images/shop/3.jpg" alt="Product"  width= {100} height={106} />
                                </a>
                            </figure>
                            <div className="product-details">
                                <h4 className="product-name">
                                    <a href="#">Apple Laptop</a>
                                </h4>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{ width:"100%" }} ></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                </div>
                                <div className="product-price">$1,000.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>   
  );
};

export default Sidebar;
