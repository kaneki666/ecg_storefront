import React from "react";

const MobileMenu = () => {
  return (
    <div className="mobile-menu-wrapper">
      <div className="mobile-menu-overlay"></div>

      <a href="#" className="mobile-menu-close">
        <i className="close-icon"></i>
      </a>

      <div className="mobile-menu-container scrollable">
        <form action="#" method="get" className="input-wrapper">
          <input
            type="text"
            className="form-control"
            name="search"
            autoComplete="off"
            placeholder="Search"
            required
          />
          <button className="btn btn-search" type="submit">
            <i className="w-icon-search"></i>
          </button>
        </form>
        {/* <!-- End of Search Form --> */}
        <div className="tab">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a href="#main-menu" className="nav-link active">
                Main Menu
              </a>
            </li>
            <li className="nav-item">
              <a href="#categories" className="nav-link">
                Categories
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane active" id="main-menu">
            <ul className="mobile-menu">
              <li>
                <a href="demo1.html">Home</a>
              </li>

              <li>
                <a href="vendor-dokan-store.html">Store</a>
                <ul>
                  <li>
                    <a href="vendor-dokan-store-list.html">Store Listing</a>
                    {/* <ul>
                                      <li><a href="vendor-dokan-store-list.html">Store listing 1</a></li>
                                     
                                  </ul>  */}
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
          </div>
          <div className="tab-pane" id="categories">
            <ul className="mobile-menu">
              <li>
                <a href="shop-fullwidth-banner.html">
                  <i className="w-icon-tshirt2"></i>Fashion
                </a>
                <ul>
                  <li>
                    <a href="#">Women</a>
                    <ul>
                      <li>
                        <a href="shop-fullwidth-banner.html">New Arrivals</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Best Sellers</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Trending</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Clothing</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Shoes</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Bags</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Accessories</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Jewlery & Watches
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Men</a>
                    <ul>
                      <li>
                        <a href="shop-fullwidth-banner.html">New Arrivals</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Best Sellers</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Trending</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Clothing</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Shoes</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Bags</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Accessories</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Jewlery & Watches
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="shop-fullwidth-banner.html">
                  <i className="w-icon-home"></i>Home & Garden
                </a>
                <ul>
                  <li>
                    <a href="#">Bedroom</a>
                    <ul>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Beds, Frames & Bases
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Dressers</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Nightstands</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Kid's Beds & Headboards
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Armoires</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Living Room</a>
                    <ul>
                      <li>
                        <a href="shop-fullwidth-banner.html">Coffee Tables</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Chairs</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Tables</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Futons & Sofa Beds
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Cabinets & Chests
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Office</a>
                    <ul>
                      <li>
                        <a href="shop-fullwidth-banner.html">Office Chairs</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Desks</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Bookcases</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">File Cabinets</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Breakroom Tables
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Kitchen & Dining</a>
                    <ul>
                      <li>
                        <a href="shop-fullwidth-banner.html">Dining Sets</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Kitchen Storage Cabinets
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Bashers Racks</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Dining Chairs</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Dining Room Tables
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Bar Stools</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="shop-fullwidth-banner.html">
                  <i className="w-icon-electronics"></i>Electronics
                </a>
                <ul>
                  <li>
                    <a href="#">Laptops &amp; Computers</a>
                    <ul>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Desktop Computers
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Monitors</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Laptops</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Hard Drives &amp; Storage
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Computer Accessories
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">TV &amp; Video</a>
                    <ul>
                      <li>
                        <a href="shop-fullwidth-banner.html">TVs</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Home Audio Speakers
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Projectors</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Media Streaming Devices
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Digital Cameras</a>
                    <ul>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Digital SLR Cameras
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Sports & Action Cameras
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Camera Lenses</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Photo Printer</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Digital Memory Cards
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Cell Phones</a>
                    <ul>
                      <li>
                        <a href="shop-fullwidth-banner.html">Carrier Phones</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Unlocked Phones</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Phone & Cellphone Cases
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Cellphone Chargers
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="shop-fullwidth-banner.html">
                  <i className="w-icon-furniture"></i>Furniture
                </a>
                <ul>
                  <li>
                    <a href="#">Furniture</a>
                    <ul>
                      <li>
                        <a href="shop-fullwidth-banner.html">Sofas & Couches</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Armchairs</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Bed Frames</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Beside Tables</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Dressing Tables</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Lighting</a>
                    <ul>
                      <li>
                        <a href="shop-fullwidth-banner.html">Light Bulbs</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Lamps</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Celling Lights</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Wall Lights</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Bathroom Lighting
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Home Accessories</a>
                    <ul>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Decorative Accessories
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Candals & Holders
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Home Fragrance</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Mirrors</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Clocks</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Garden & Outdoors</a>
                    <ul>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Garden Furniture
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Lawn Mowers</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Pressure Washers
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          All Garden Tools
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Outdoor Dining</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="shop-fullwidth-banner.html">
                  <i className="w-icon-heartbeat"></i>Healthy & Beauty
                </a>
              </li>
              <li>
                <a href="shop-fullwidth-banner.html">
                  <i className="w-icon-gift"></i>Gift Ideas
                </a>
              </li>
              <li>
                <a href="shop-fullwidth-banner.html">
                  <i className="w-icon-gamepad"></i>Toy & Games
                </a>
              </li>
              <li>
                <a href="shop-fullwidth-banner.html">
                  <i className="w-icon-ice-cream"></i>Cooking
                </a>
              </li>
              <li>
                <a href="shop-fullwidth-banner.html">
                  <i className="w-icon-ios"></i>Smart Phones
                </a>
              </li>
              <li>
                <a href="shop-fullwidth-banner.html">
                  <i className="w-icon-camera"></i>Cameras & Photo
                </a>
              </li>
              <li>
                <a href="shop-fullwidth-banner.html">
                  <i className="w-icon-ruby"></i>Accessories
                </a>
              </li>
              <li>
                <a
                  href="shop-banner-sidebar.html"
                  className="font-weight-bold text-primary text-uppercase ls-25"
                >
                  View All Categories<i className="w-icon-angle-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
