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
                          <a key={item.id.toString()} href="#">
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
                                      <a href="#">{subItem.name}</a>
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
