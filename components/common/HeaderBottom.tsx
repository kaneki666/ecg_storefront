import React from "react";
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
                      item.sub_category &&
                      item.sub_category.length > 0 ? (
                        <li key={item.id.toString()}>
                          <a href={`/category?id=${item.id}&type=cate`}>
                            <i className="w-icon-tshirt2"></i>
                            {item.title}
                          </a>
                          <ul className="megamenu">
                            {item.sub_category &&
                              item.sub_category.map((subItem) => (
                                <li key={subItem.id.toString()}>
                                  <a
                                    href={`/category?id=${subItem.id}&type=sub`}
                                  >
                                    <h4 className="menu-title">
                                      {subItem.title}
                                    </h4>
                                  </a>
                                  <hr className="divider" />
                                  <ul>
                                    {subItem.sub_sub_category &&
                                      subItem.sub_sub_category.map(
                                        (childItem) => (
                                          <li key={childItem.id.toString()}>
                                            <a
                                              href={`/category?id=${childItem.id}&type=child`}
                                            >
                                              {childItem.title}
                                            </a>
                                          </li>
                                        )
                                      )}
                                  </ul>
                                </li>
                              ))}

                            <li>
                              <div className="banner-fixed menu-banner menu-banner2">
                                <figure>
                                  <img
                                    src={item.cover}
                                    alt="Menu Banner"
                                    width="235"
                                    height="347"
                                  />
                                </figure>
                                <div className="banner-content">
                                  <div className="banner-price-info mb-1 ls-normal">
                                    Get up to
                                    <strong className="text-primary text-uppercase">
                                      20%Off
                                    </strong>
                                  </div>
                                  <h3 className="banner-title ls-normal">
                                    Hot Sales
                                  </h3>
                                  <a
                                    href="shop-banner-sidebar.html"
                                    className="btn btn-dark btn-sm btn-link btn-slide-right btn-icon-right"
                                  >
                                    Shop Now
                                    <i className="w-icon-long-arrow-right"></i>
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      ) : (
                        <li key={item.id.toString()}>
                          <a href={`/category?id=${item.id}&type=cate`}>
                            <i
                              className={
                                item.title === "TOYS & GAMES"
                                  ? "w-icon-gamepad"
                                  : item.title === "HEALTH & BEAUTY"
                                  ? "w-icon-heartbeat"
                                  : "w-icon-furniture"
                              }
                            ></i>{" "}
                            {item.title}
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
