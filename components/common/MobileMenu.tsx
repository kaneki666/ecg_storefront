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
                  </li>
                  <li>
                    <a href="vendor">Vendor Store</a>
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
                <a href="#">
                  <i className="w-icon-tshirt2"></i>Fashion
                </a>
                <ul>
                  <li>
                    <a href="#">Women</a>
                    <ul>
                      <li>
                        <a href="#">New Arrivals</a>
                      </li>
                      <li>
                        <a href="#">Best Sellers</a>
                      </li>
                      <li>
                        <a href="#">Trending</a>
                      </li>
                      <li>
                        <a href="#">Clothing</a>
                      </li>
                      <li>
                        <a href="#">Shoes</a>
                      </li>
                      <li>
                        <a href="#">Bags</a>
                      </li>
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                      <li>
                        <a href="#">Jewlery & Watches</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Men</a>
                    <ul>
                      <li>
                        <a href="#">New Arrivals</a>
                      </li>
                      <li>
                        <a href="#">Best Sellers</a>
                      </li>
                      <li>
                        <a href="#">Trending</a>
                      </li>
                      <li>
                        <a href="#">Clothing</a>
                      </li>
                      <li>
                        <a href="#">Shoes</a>
                      </li>
                      <li>
                        <a href="#">Bags</a>
                      </li>
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                      <li>
                        <a href="#">Jewlery & Watches</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className="w-icon-home"></i>Home & Garden
                </a>
                <ul>
                  <li>
                    <a href="#">Bedroom</a>
                    <ul>
                      <li>
                        <a href="#">Beds, Frames & Bases</a>
                      </li>
                      <li>
                        <a href="#">Dressers</a>
                      </li>
                      <li>
                        <a href="#">Nightstands</a>
                      </li>
                      <li>
                        <a href="#">Kid's Beds & Headboards</a>
                      </li>
                      <li>
                        <a href="#">Armoires</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Living Room</a>
                    <ul>
                      <li>
                        <a href="#">Coffee Tables</a>
                      </li>
                      <li>
                        <a href="#">Chairs</a>
                      </li>
                      <li>
                        <a href="#">Tables</a>
                      </li>
                      <li>
                        <a href="#">Futons & Sofa Beds</a>
                      </li>
                      <li>
                        <a href="#">Cabinets & Chests</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Office</a>
                    <ul>
                      <li>
                        <a href="#">Office Chairs</a>
                      </li>
                      <li>
                        <a href="#">Desks</a>
                      </li>
                      <li>
                        <a href="#">Bookcases</a>
                      </li>
                      <li>
                        <a href="#">File Cabinets</a>
                      </li>
                      <li>
                        <a href="#">Breakroom Tables</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Kitchen & Dining</a>
                    <ul>
                      <li>
                        <a href="#">Dining Sets</a>
                      </li>
                      <li>
                        <a href="#">Kitchen Storage Cabinets</a>
                      </li>
                      <li>
                        <a href="#">Bashers Racks</a>
                      </li>
                      <li>
                        <a href="#">Dining Chairs</a>
                      </li>
                      <li>
                        <a href="#">Dining Room Tables</a>
                      </li>
                      <li>
                        <a href="#">Bar Stools</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className="w-icon-electronics"></i>Electronics
                </a>
                <ul>
                  <li>
                    <a href="#">Laptops &amp; Computers</a>
                    <ul>
                      <li>
                        <a href="#">Desktop Computers</a>
                      </li>
                      <li>
                        <a href="#">Monitors</a>
                      </li>
                      <li>
                        <a href="#">Laptops</a>
                      </li>
                      <li>
                        <a href="#">Hard Drives &amp; Storage</a>
                      </li>
                      <li>
                        <a href="#">Computer Accessories</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">TV &amp; Video</a>
                    <ul>
                      <li>
                        <a href="#">TVs</a>
                      </li>
                      <li>
                        <a href="#">Home Audio Speakers</a>
                      </li>
                      <li>
                        <a href="#">Projectors</a>
                      </li>
                      <li>
                        <a href="#">Media Streaming Devices</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Digital Cameras</a>
                    <ul>
                      <li>
                        <a href="#">Digital SLR Cameras</a>
                      </li>
                      <li>
                        <a href="#">Sports & Action Cameras</a>
                      </li>
                      <li>
                        <a href="#">Camera Lenses</a>
                      </li>
                      <li>
                        <a href="#">Photo Printer</a>
                      </li>
                      <li>
                        <a href="#">Digital Memory Cards</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Cell Phones</a>
                    <ul>
                      <li>
                        <a href="#">Carrier Phones</a>
                      </li>
                      <li>
                        <a href="#">Unlocked Phones</a>
                      </li>
                      <li>
                        <a href="#">Phone & Cellphone Cases</a>
                      </li>
                      <li>
                        <a href="#">Cellphone Chargers</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className="w-icon-furniture"></i>Furniture
                </a>
                <ul>
                  <li>
                    <a href="#">Furniture</a>
                    <ul>
                      <li>
                        <a href="#">Sofas & Couches</a>
                      </li>
                      <li>
                        <a href="#">Armchairs</a>
                      </li>
                      <li>
                        <a href="#">Bed Frames</a>
                      </li>
                      <li>
                        <a href="#">Beside Tables</a>
                      </li>
                      <li>
                        <a href="#">Dressing Tables</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Lighting</a>
                    <ul>
                      <li>
                        <a href="#">Light Bulbs</a>
                      </li>
                      <li>
                        <a href="#">Lamps</a>
                      </li>
                      <li>
                        <a href="#">Celling Lights</a>
                      </li>
                      <li>
                        <a href="#">Wall Lights</a>
                      </li>
                      <li>
                        <a href="#">Bathroom Lighting</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Home Accessories</a>
                    <ul>
                      <li>
                        <a href="#">Decorative Accessories</a>
                      </li>
                      <li>
                        <a href="#">Candals & Holders</a>
                      </li>
                      <li>
                        <a href="#">Home Fragrance</a>
                      </li>
                      <li>
                        <a href="#">Mirrors</a>
                      </li>
                      <li>
                        <a href="#">Clocks</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Garden & Outdoors</a>
                    <ul>
                      <li>
                        <a href="#">Garden Furniture</a>
                      </li>
                      <li>
                        <a href="#">Lawn Mowers</a>
                      </li>
                      <li>
                        <a href="#">Pressure Washers</a>
                      </li>
                      <li>
                        <a href="#">All Garden Tools</a>
                      </li>
                      <li>
                        <a href="#">Outdoor Dining</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className="w-icon-heartbeat"></i>Healthy & Beauty
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="w-icon-gift"></i>Gift Ideas
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="w-icon-gamepad"></i>Toy & Games
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="w-icon-ice-cream"></i>Cooking
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="w-icon-ios"></i>Smart Phones
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="w-icon-camera"></i>Cameras & Photo
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="w-icon-ruby"></i>Accessories
                </a>
              </li>
              <li>
                <a
                  href="#"
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
