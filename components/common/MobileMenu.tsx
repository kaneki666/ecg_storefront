import React from "react";
import { CategoriesProps } from "../../utils/types/landingpage";

const MobileMenu = ({ data }: { data: CategoriesProps[] }) => {
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
            {/* <ul className="mobile-menu">
              {data &&
                data.map((item) =>
                  item.product_sub_category &&
                  item.product_sub_category.length > 0 ? (
                    <li key={`${item.id}`}>
                      <a href={`/category?id=${item.id}&type=cate`}>
                        <i className="w-icon-tshirt2"></i>
                        {item.name}
                      </a>
                      <ul>
                        {item.product_sub_category &&
                          item.product_sub_category.map((subItem) =>
                            subItem.child_category.length > 0 ? (
                              <li key={`${subItem.id}`}>
                                <a href={`/category?id=${subItem.id}&type=sub`}>
                                  {subItem.name}
                                </a>
                                <ul>
                                  {subItem.child_category &&
                                    subItem.child_category.map((childItem) => (
                                      <li key={`${childItem.id}`}>
                                        <a
                                          href={`/category?id=${childItem.id}&type=child`}
                                        >
                                          {childItem.name}
                                        </a>
                                      </li>
                                    ))}
                                </ul>
                              </li>
                            ) : (
                              <li key={`${subItem.id}`}>
                                <a href={`/category?id=${subItem.id}&type=sub`}>
                                  {subItem.name}
                                </a>
                              </li>
                            )
                          )}
                      </ul>
                    </li>
                  ) : (
                    <li key={`${item.id}`}>
                      <a href={`/category?id=${item.id}&type=cate`}>
                        <i className="w-icon-gift"></i> {item.name}
                      </a>
                    </li>
                  )
                )}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
