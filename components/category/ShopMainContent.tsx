import React from "react";
import Filter from "./Filter";

const ShopMainContent = () => {
  return (<div>
    <div className="main-content">
        <Filter/>
        <div className="product-wrapper row cols-md-3 cols-sm-2 cols-2">
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="images/shop/1.jpg" alt="Product" width="300"
                                height="338" />
                        </a>
                        <div className="product-action-horizontal">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <div className="product-cat">
                            <a href="shop-banner-sidebar.html">Electronics</a>
                        </div>
                        <h3 className="product-name">
                            <a href="product-default.html">3D Television</a>
                        </h3>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{ width: "100%" }}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(3 reviews)</a>
                        </div>
                        <div className="product-pa-wrapper">
                            <div className="product-price">
                                $220.00 - $230.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="images/shop/2-1.jpg" alt="Product" width="300"
                                height="338" />
                            <img src="images/shop/2-2.jpg" alt="Product" width="300"
                                height="338" />
                        </a>
                        <div className="product-countdown-container">
                            <div className="product-countdown countdown-compact" data-until="2021, 9, 9"
                                data-format="DHMS" data-compact="false"
                                data-labels-short="Days, Hours, Mins, Secs">
                                00:00:00:00</div>
                        </div>
                        <div className="product-action-horizontal">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <div className="product-cat">
                            <a href="shop-banner-sidebar.html">Electronics</a>
                        </div>
                        <h3 className="product-name">
                            <a href="product-default.html">Alarm Clock With Lamp</a>
                        </h3>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{ width: "100%" }}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(10 reviews)</a>
                        </div>
                        <div className="product-pa-wrapper">
                            <div className="product-price">
                                <ins className="new-price">$30.00</ins><del
                                    className="old-price">$60.00</del>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="images/shop/3.jpg" alt="Product" width="300"
                                height="338" />
                        </a>
                        <div className="product-action-horizontal">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <div className="product-cat">
                            <a href="shop-banner-sidebar.html">Electronics</a>
                        </div>
                        <h3 className="product-name">
                            <a href="product-default.html">Apple Laptop</a>
                        </h3>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{ width: "80%" }}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(5 reviews)</a>
                        </div>
                        <div className="product-pa-wrapper">
                            <div className="product-price">
                                $1,000.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="images/shop/4.jpg" alt="Product" width="300"
                                height="338" />
                        </a>
                        <div className="product-action-horizontal">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <div className="product-cat">
                            <a href="shop-banner-sidebar.html">Electronics</a>
                        </div>
                        <h3 className="product-name">
                            <a href="product-default.html">Attachable Charge Alarm</a>
                        </h3>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{ width: "60%" }}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(7 reviews)</a>
                        </div>
                        <div className="product-pa-wrapper">
                            <div className="product-price">
                                $15.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="images/shop/5.jpg" alt="Product" width="300"
                                height="338" />
                        </a>
                        <div className="product-action-horizontal">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <div className="product-cat">
                            <a href="shop-banner-sidebar.html">Fashion</a>
                        </div>
                        <h3 className="product-name">
                            <a href="product-default.html">Best Travel Bag</a>
                        </h3>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{ width: "80%" }}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(4 reviews)</a>
                        </div>
                        <div className="product-pa-wrapper">
                            <div className="product-price">
                                $83.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="images/shop/6.jpg" alt="Product" width="300"
                                height="338" />
                        </a>
                        <div className="product-action-horizontal">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <div className="product-cat">
                            <a href="shop-banner-sidebar.html">Sports</a>
                        </div>
                        <h3 className="product-name">
                            <a href="product-default.html">Black Stunt Motor</a>
                        </h3>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{ width: "100%" }}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(12 reviews)</a>
                        </div>
                        <div className="product-pa-wrapper">
                            <div className="product-price">
                                $374.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="images/shop/7-1.jpg" alt="Product" width="300"
                                height="338" />
                            <img src="images/shop/7-2.jpg" alt="Product" width="300"
                                height="338" />
                        </a>
                        <div className="product-action-horizontal">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <div className="product-cat">
                            <a href="shop-banner-sidebar.html">Fashion</a>
                        </div>
                        <h3 className="product-name">
                            <a href="product-default.html">Blue Sky Trunk</a>
                        </h3>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{ width: "100%" }}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(9 reviews)</a>
                        </div>
                        <div className="product-pa-wrapper">
                            <div className="product-price">
                                $85.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="images/shop/8.jpg" alt="Product" width="300"
                                height="338" />
                        </a>
                        <div className="product-action-horizontal">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <div className="product-cat">
                            <a href="shop-banner-sidebar.html">Beauty</a>
                        </div>
                        <h3 className="product-name">
                            <a href="product-default.html">Bodycare Smooth Powder</a>
                        </h3>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{ width: "60%" }}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(4 reviews)</a>
                        </div>
                        <div className="product-pa-wrapper">
                            <div className="product-price">
                                $25.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="images/shop/9.jpg" alt="Product" width="300"
                                height="338" />
                        </a>
                        <div className="product-action-horizontal">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <div className="product-cat">
                            <a href="shop-banner-sidebar.html">Electronics</a>
                        </div>
                        <h3 className="product-name">
                            <a href="product-default.html">Bright Green IPhone</a>
                        </h3>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{ width: "80%" }}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(4 reviews)</a>
                        </div>
                        <div className="product-pa-wrapper">
                            <div className="product-price">
                                $950.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="images/shop/10.jpg" alt="Product" width="300"
                                height="338" />
                        </a>
                        <div className="product-action-horizontal">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <div className="product-cat">
                            <a href="shop-banner-sidebar.html">Fashion</a>
                        </div>
                        <h3 className="product-name">
                            <a href="product-default.html">Cavin Fashion Suede Handbag</a>
                        </h3>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{ width: "80%" }}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(4 reviews)</a>
                        </div>
                        <div className="product-pa-wrapper">
                            <div className="product-price">
                                $163.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="images/shop/11-1.jpg" alt="Product" width="300"
                                height="338" />
                            <img src="images/shop/11-2.jpg" alt="Product" width="300"
                                height="338" />
                        </a>
                        <div className="product-action-horizontal">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <div className="product-cat">
                            <a href="shop-banner-sidebar.html">Electronics</a>
                        </div>
                        <h3 className="product-name">
                            <a href="product-default.html">Charming Design Watch</a>
                        </h3>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{ width: "100%" }}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(10 reviews)</a>
                        </div>
                        <div className="product-pa-wrapper">
                            <div className="product-price">
                                $30.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="images/shop/12.jpg" alt="Product" width="300"
                                height="338" />
                        </a>
                        <div className="product-action-horizontal">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <div className="product-cat">
                            <a href="shop-banner-sidebar.html">Fashion</a>
                        </div>
                        <h3 className="product-name">
                            <a href="product-default.html">classNameic Simple Backpack</a>
                        </h3>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{ width: "100%" }}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(9 reviews)</a>
                        </div>
                        <div className="product-pa-wrapper">
                            <div className="product-price">
                                $85.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="toolbox toolbox-pagination justify-content-between">
            <p className="showing-info mb-2 mb-sm-0">
                Showing<span>1-12 of 60</span>Products
            </p>
            <ul className="pagination">
                <li className="prev disabled">
                    <a href="#" aria-label="Previous" aria-disabled="true">
                        <i className="w-icon-long-arrow-left"></i>Prev
                    </a>
                </li>
                <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">2</a>
                </li>
                <li className="next">
                    <a href="#" aria-label="Next">
                        Next<i className="w-icon-long-arrow-right"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  </div>  
  );
};

export default ShopMainContent;
