import React from "react";
import Image from "next/image";
import HeaderBottomMiddle from "./HeaderBottomMiddle";
import HeaderBottomRight from "./HeaderBottomRight";
import {
  CategoriesProps,
  SubCategoryProps,
} from "../../utils/types/landingpage";

const HeaderBottom = ({ data }: { data: CategoriesProps[] }) => {
  return (
    <div className="header-bottom sticky-content fix-top sticky-header has-dropdown">
      <div className="container">
        <div className="inner-wrap">
          <div className="header-left">
            <div
              className="dropdown category-dropdown has-border"
              data-visible="true"
            >
              <a
                href="#"
                className="category-toggle text-dark"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                data-display="static"
                title="Browse Categories"
              >
                <i className="w-icon-category"></i>
                <span>Browse Categories</span>
              </a>

              <div className="dropdown-box">
                <ul className="menu vertical-menu category-menu">
                  {data.length > 0 &&
                    data.map((item: CategoriesProps) =>
                      item.sub_category.length > 0 ? (
                        <li>
                          <a
                            key={item.id.toString()}
                            href="#"
                          >
                            <i
                              className={
                                item.name === "ELECTRONICS"
                                  ? "w-icon-electronics"
                                  : "w-icon-tshirt2"
                              }
                            ></i>
                            {item.name}
                          </a>
                          <ul className="megamenu">
                            <li>
                              {/* <h4 className="menu-title">Men</h4> 
                            <hr className="divider" />*/}
                              {item.sub_category.map(
                                (subItem: SubCategoryProps) => (
                                  <ul key={`${subItem.id}`}>
                                    <li>
                                      <a href="#">
                                        {subItem.name}
                                      </a>
                                    </li>
                                  </ul>
                                )
                              )}
                            </li>
                          </ul>
                        </li>
                      ) : (
                        <li>
                          <a href="#">
                            <i
                              className={
                                item.name === "TOYS & GAMES"
                                  ? "w-icon-gamepad"
                                  : item.name === "HEALTH & BEAUTY"
                                  ? "w-icon-heartbeat"
                                  : "w-icon-furniture"
                              }
                            ></i>{" "}
                            {item.name}
                          </a>
                        </li>
                      )
                    )}

                  {/* <li>
                    <a href="#">
                      <i className="w-icon-home"></i>Home & Garden
                    </a>
                    <ul className="megamenu">
                      <li>
                        <h4 className="menu-title">Bedroom</h4>
                        <hr className="divider" />
                        <ul>
                          <li>
                            <a href="#">
                              Beds, Frames & Bases
                            </a>
                          </li>
                          <li>
                            <a href="#">Dressers</a>
                          </li>
                          <li>
                            <a href="#">Nightstands</a>
                          </li>
                          <li>
                            <a href="#">
                              Kid's Beds & Headboards
                            </a>
                          </li>
                          <li>
                            <a href="#">Armoires</a>
                          </li>
                        </ul>

                        <h4 className="menu-title mt-1">Living Room</h4>
                        <hr className="divider" />
                        <ul>
                          <li>
                            <a href="#">
                              Coffee Tables
                            </a>
                          </li>
                          <li>
                            <a href="#">Chairs</a>
                          </li>
                          <li>
                            <a href="#">Tables</a>
                          </li>
                          <li>
                            <a href="#">
                              Futons & Sofa Beds
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Cabinets & Chests
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="menu-title">Office</h4>
                        <hr className="divider" />
                        <ul>
                          <li>
                            <a href="#">
                              Office Chairs
                            </a>
                          </li>
                          <li>
                            <a href="#">Desks</a>
                          </li>
                          <li>
                            <a href="#">Bookcases</a>
                          </li>
                          <li>
                            <a href="#">
                              File Cabinets
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Breakroom Tables
                            </a>
                          </li>
                        </ul>

                        <h4 className="menu-title mt-1">Kitchen & Dining</h4>
                        <hr className="divider" />
                        <ul>
                          <li>
                            <a href="#">Dining Sets</a>
                          </li>
                          <li>
                            <a href="#">
                              Kitchen Storage Cabinets
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Bashers Racks
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Dining Chairs
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Dining Room Tables
                            </a>
                          </li>
                          <li>
                            <a href="#">Bar Stools</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="menu-banner banner-fixed menu-banner3">
                          <figure>
                            <Image
                              src="/images/menu/banner-3.jpg"
                              alt="Menu Banner"
                              width="235"
                              height="461"
                            />
                          </figure>
                          <div className="banner-content">
                            <h4 className="banner-subtitle font-weight-normal text-white mb-1">
                              Restroom
                            </h4>
                            <h3 className="banner-title font-weight-bolder text-white ls-normal">
                              Furniture Sale
                            </h3>
                            <div className="banner-price-info text-white font-weight-normal ls-25">
                              Up to{" "}
                              <span className="text-secondary text-uppercase font-weight-bold">
                                25% Off
                              </span>
                            </div>
                            <a
                              href="shop-banner-sidebar.html"
                              className="btn btn-white btn-link btn-sm btn-slide-right btn-icon-right"
                            >
                              Shop Now
                              <i className="w-icon-long-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="w-icon-electronics"></i>Electronics
                    </a>
                    <ul className="megamenu">
                      <li>
                        <h4 className="menu-title">Laptops &amp; Computers</h4>
                        <hr className="divider" />
                        <ul>
                          <li>
                            <a href="#">
                              Desktop Computers
                            </a>
                          </li>
                          <li>
                            <a href="#">Monitors</a>
                          </li>
                          <li>
                            <a href="#">Laptops</a>
                          </li>
                          <li>
                            <a href="#">
                              Hard Drives &amp; Storage
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Computer Accessories
                            </a>
                          </li>
                        </ul>

                        <h4 className="menu-title mt-1">TV &amp; Video</h4>
                        <hr className="divider" />
                        <ul>
                          <li>
                            <a href="#">TVs</a>
                          </li>
                          <li>
                            <a href="#">
                              Home Audio Speakers
                            </a>
                          </li>
                          <li>
                            <a href="#">Projectors</a>
                          </li>
                          <li>
                            <a href="#">
                              Media Streaming Devices
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="menu-title">Digital Cameras</h4>
                        <hr className="divider" />
                        <ul>
                          <li>
                            <a href="#">
                              Digital SLR Cameras
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Sports & Action Cameras
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Camera Lenses
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Photo Printer
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Digital Memory Cards
                            </a>
                          </li>
                        </ul>

                        <h4 className="menu-title mt-1">Cell Phones</h4>
                        <hr className="divider" />
                        <ul>
                          <li>
                            <a href="#">
                              Carrier Phones
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Unlocked Phones
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Phone & Cellphone Cases
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Cellphone Chargers
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="menu-banner banner-fixed menu-banner4">
                          <figure>
                            <Image
                              src="/images/menu/banner-4.jpg"
                              alt="Menu Banner"
                              width="235"
                              height="433"
                            />
                          </figure>
                          <div className="banner-content">
                            <h4 className="banner-subtitle font-weight-normal">
                              Deals Of The Week
                            </h4>
                            <h3 className="banner-title text-white">
                              Save On Smart EarPhone
                            </h3>
                            <div className="banner-price-info text-secondary font-weight-bolder text-uppercase text-secondary">
                              20% Off
                            </div>
                            <a
                              href="shop-banner-sidebar.html"
                              className="btn btn-white btn-outline btn-sm btn-rounded"
                            >
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="w-icon-furniture"></i>Furniture
                    </a>
                    <ul className="megamenu type2">
                      <li className="row">
                        <div className="col-md-3 col-lg-3 col-6">
                          <h4 className="menu-title">Furniture</h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="#">
                                Sofas & Couches
                              </a>
                            </li>
                            <li>
                              <a href="#">Armchairs</a>
                            </li>
                            <li>
                              <a href="#">
                                Bed Frames
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Beside Tables
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Dressing Tables
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 col-lg-3 col-6">
                          <h4 className="menu-title">Lighting</h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="#">
                                Light Bulbs
                              </a>
                            </li>
                            <li>
                              <a href="#">Lamps</a>
                            </li>
                            <li>
                              <a href="#">
                                Celling Lights
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Wall Lights
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Bathroom Lighting
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 col-lg-3 col-6">
                          <h4 className="menu-title">Home Accessories</h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="#">
                                Decorative Accessories
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Candals & Holders
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Home Fragrance
                              </a>
                            </li>
                            <li>
                              <a href="#">Mirrors</a>
                            </li>
                            <li>
                              <a href="#">Clocks</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 col-lg-3 col-6">
                          <h4 className="menu-title">Garden & Outdoors</h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="#">
                                Garden Furniture
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Lawn Mowers
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Pressure Washers
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                All Garden Tools
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Outdoor Dining
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="row">
                        <div className="col-6">
                          <div className="banner banner-fixed menu-banner5 br-xs">
                            <figure style={{ backgroundColor: "#D2D2D2" }}>
                              <Image
                                src="/images/menu/banner-5.jpg"
                                alt="Banner"
                                width="410"
                                height="123"
                              />
                            </figure>
                            <div className="banner-content text-right y-50">
                              <h4 className="banner-subtitle font-weight-normal text-default text-capitalize">
                                New Arrivals
                              </h4>
                              <h3 className="banner-title font-weight-bolder text-capitalize ls-normal">
                                Amazing Sofa
                              </h3>
                              <div className="banner-price-info font-weight-normal ls-normal">
                                Starting at <strong>$125.00</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="banner banner-fixed menu-banner5 br-xs">
                            <figure style={{ backgroundColor: "#9F9888" }}>
                              <Image
                                src="/images/menu/banner-6.jpg"
                                alt="Banner"
                                width="410"
                                height="123"
                              />
                            </figure>
                            <div className="banner-content y-50">
                              <h4 className="banner-subtitle font-weight-normal text-white text-capitalize">
                                Best Seller
                              </h4>
                              <h3 className="banner-title font-weight-bolder text-capitalize text-white ls-normal">
                                Chair &amp; Lamp
                              </h3>
                              <div className="banner-price-info font-weight-normal ls-normal text-white">
                                From <strong>$165.00</strong>
                              </div>
                            </div>
                          </div>
                        </div>
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
                      href="shop-banner-sidebar.html"
                      className="font-weight-bold text-primary text-uppercase ls-25"
                    >
                      View All Categories<i className="w-icon-angle-right"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <HeaderBottomMiddle />
          </div>
          <HeaderBottomRight />
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
