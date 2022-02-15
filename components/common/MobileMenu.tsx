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
                <a href="/">Home</a>
              </li>

              <li>
                <a>Store</a>
                <ul>
                  <li>
                    <a href="storelist">Store Listing</a>
                    {/* <ul>
                                      <li><a href="vendor-dokan-store-list.html">Store listing 1</a></li>
                                     
                                  </ul>  */}
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
          </div>
          <div className="tab-pane" id="categories">
            <ul className="mobile-menu">
              <li>
                <a href="category">
                  <i className="w-icon-tshirt2"></i>Fashion
                </a>
                <ul>
                  <li>
                    <a href="#">Women</a>
                    <ul>
                      <li>
                        <a href="category">New Arrivals</a>
                      </li>
                      <li>
                        <a href="category">Best Sellers</a>
                      </li>
                      <li>
                        <a href="category">Trending</a>
                      </li>
                      <li>
                        <a href="category">Clothing</a>
                      </li>
                      <li>
                        <a href="category">Shoes</a>
                      </li>
                      <li>
                        <a href="category">Bags</a>
                      </li>
                      <li>
                        <a href="category">Accessories</a>
                      </li>
                      <li>
                        <a href="category">
                          Jewlery & Watches
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Men</a>
                    <ul>
                      <li>
                        <a href="category">New Arrivals</a>
                      </li>
                      <li>
                        <a href="category">Best Sellers</a>
                      </li>
                      <li>
                        <a href="category">Trending</a>
                      </li>
                      <li>
                        <a href="category">Clothing</a>
                      </li>
                      <li>
                        <a href="category">Shoes</a>
                      </li>
                      <li>
                        <a href="category">Bags</a>
                      </li>
                      <li>
                        <a href="category">Accessories</a>
                      </li>
                      <li>
                        <a href="category">
                          Jewlery & Watches
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="category">
                  <i className="w-icon-home"></i>Home & Garden
                </a>
                <ul>
                  <li>
                    <a href="#">Bedroom</a>
                    <ul>
                      <li>
                        <a href="category">
                          Beds, Frames & Bases
                        </a>
                      </li>
                      <li>
                        <a href="category">Dressers</a>
                      </li>
                      <li>
                        <a href="category">Nightstands</a>
                      </li>
                      <li>
                        <a href="category">
                          Kid's Beds & Headboards
                        </a>
                      </li>
                      <li>
                        <a href="category">Armoires</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Living Room</a>
                    <ul>
                      <li>
                        <a href="category">Coffee Tables</a>
                      </li>
                      <li>
                        <a href="category">Chairs</a>
                      </li>
                      <li>
                        <a href="category">Tables</a>
                      </li>
                      <li>
                        <a href="category">
                          Futons & Sofa Beds
                        </a>
                      </li>
                      <li>
                        <a href="category">
                          Cabinets & Chests
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Office</a>
                    <ul>
                      <li>
                        <a href="category">Office Chairs</a>
                      </li>
                      <li>
                        <a href="category">Desks</a>
                      </li>
                      <li>
                        <a href="category">Bookcases</a>
                      </li>
                      <li>
                        <a href="category">File Cabinets</a>
                      </li>
                      <li>
                        <a href="category">
                          Breakroom Tables
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Kitchen & Dining</a>
                    <ul>
                      <li>
                        <a href="category">Dining Sets</a>
                      </li>
                      <li>
                        <a href="category">
                          Kitchen Storage Cabinets
                        </a>
                      </li>
                      <li>
                        <a href="category">Bashers Racks</a>
                      </li>
                      <li>
                        <a href="category">Dining Chairs</a>
                      </li>
                      <li>
                        <a href="category">
                          Dining Room Tables
                        </a>
                      </li>
                      <li>
                        <a href="category">Bar Stools</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="category">
                  <i className="w-icon-electronics"></i>Electronics
                </a>
                <ul>
                  <li>
                    <a href="#">Laptops &amp; Computers</a>
                    <ul>
                      <li>
                        <a href="category">
                          Desktop Computers
                        </a>
                      </li>
                      <li>
                        <a href="category">Monitors</a>
                      </li>
                      <li>
                        <a href="category">Laptops</a>
                      </li>
                      <li>
                        <a href="category">
                          Hard Drives &amp; Storage
                        </a>
                      </li>
                      <li>
                        <a href="category">
                          Computer Accessories
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">TV &amp; Video</a>
                    <ul>
                      <li>
                        <a href="category">TVs</a>
                      </li>
                      <li>
                        <a href="category">
                          Home Audio Speakers
                        </a>
                      </li>
                      <li>
                        <a href="category">Projectors</a>
                      </li>
                      <li>
                        <a href="category">
                          Media Streaming Devices
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Digital Cameras</a>
                    <ul>
                      <li>
                        <a href="category">
                          Digital SLR Cameras
                        </a>
                      </li>
                      <li>
                        <a href="category">
                          Sports & Action Cameras
                        </a>
                      </li>
                      <li>
                        <a href="category">Camera Lenses</a>
                      </li>
                      <li>
                        <a href="category">Photo Printer</a>
                      </li>
                      <li>
                        <a href="category">
                          Digital Memory Cards
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Cell Phones</a>
                    <ul>
                      <li>
                        <a href="category">Carrier Phones</a>
                      </li>
                      <li>
                        <a href="category">Unlocked Phones</a>
                      </li>
                      <li>
                        <a href="category">
                          Phone & Cellphone Cases
                        </a>
                      </li>
                      <li>
                        <a href="category">
                          Cellphone Chargers
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="category">
                  <i className="w-icon-furniture"></i>Furniture
                </a>
                <ul>
                  <li>
                    <a href="#">Furniture</a>
                    <ul>
                      <li>
                        <a href="category">Sofas & Couches</a>
                      </li>
                      <li>
                        <a href="category">Armchairs</a>
                      </li>
                      <li>
                        <a href="category">Bed Frames</a>
                      </li>
                      <li>
                        <a href="category">Beside Tables</a>
                      </li>
                      <li>
                        <a href="category">Dressing Tables</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Lighting</a>
                    <ul>
                      <li>
                        <a href="category">Light Bulbs</a>
                      </li>
                      <li>
                        <a href="category">Lamps</a>
                      </li>
                      <li>
                        <a href="category">Celling Lights</a>
                      </li>
                      <li>
                        <a href="category">Wall Lights</a>
                      </li>
                      <li>
                        <a href="category">
                          Bathroom Lighting
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Home Accessories</a>
                    <ul>
                      <li>
                        <a href="category">
                          Decorative Accessories
                        </a>
                      </li>
                      <li>
                        <a href="category">
                          Candals & Holders
                        </a>
                      </li>
                      <li>
                        <a href="category">Home Fragrance</a>
                      </li>
                      <li>
                        <a href="category">Mirrors</a>
                      </li>
                      <li>
                        <a href="category">Clocks</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Garden & Outdoors</a>
                    <ul>
                      <li>
                        <a href="category">
                          Garden Furniture
                        </a>
                      </li>
                      <li>
                        <a href="category">Lawn Mowers</a>
                      </li>
                      <li>
                        <a href="category">
                          Pressure Washers
                        </a>
                      </li>
                      <li>
                        <a href="category">
                          All Garden Tools
                        </a>
                      </li>
                      <li>
                        <a href="category">Outdoor Dining</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="category">
                  <i className="w-icon-heartbeat"></i>Healthy & Beauty
                </a>
              </li>
              <li>
                <a href="category">
                  <i className="w-icon-gift"></i>Gift Ideas
                </a>
              </li>
              <li>
                <a href="category">
                  <i className="w-icon-gamepad"></i>Toy & Games
                </a>
              </li>
              <li>
                <a href="category">
                  <i className="w-icon-ice-cream"></i>Cooking
                </a>
              </li>
              <li>
                <a href="category">
                  <i className="w-icon-ios"></i>Smart Phones
                </a>
              </li>
              <li>
                <a href="category">
                  <i className="w-icon-camera"></i>Cameras & Photo
                </a>
              </li>
              <li>
                <a href="category">
                  <i className="w-icon-ruby"></i>Accessories
                </a>
              </li>
              <li>
                <a
                  href="category"
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
