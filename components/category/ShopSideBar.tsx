import React from "react";
import { CategoriesProps } from "../../utils/types/landingpage";

const ShopSideBar = ({
  categoriesData,
}: {
  categoriesData: CategoriesProps[];
}) => {
  return (
    <div>
      <div className="sidebar-overlay"></div>
      <a className="sidebar-close" href="#">
        <i className="close-icon"></i>
      </a>

      <div className="sidebar-content scrollable">
        <div className="sticky-sidebar">
          <div className="filter-actions">
            <label>Filter :</label>
            <a href="#" className="btn btn-dark btn-link filter-clean">
              Clean All
            </a>
          </div>

          <div className="widget widget-collapsible">
            <h3 className="widget-title">
              <label>All Categories</label>
            </h3>
            <ul className="widget-body filter-items search-ul">
              {categoriesData.map((item) => (
                <li key={item.id.toString()}>
                  <a href={`/category?id=${item.id}&type=cate`}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="widget widget-collapsible">
            <h3 className="widget-title">
              <label>Price</label>
            </h3>
            <div className="widget-body">
              <ul className="filter-items search-ul">
                <li>
                  <a href="#">$0.00 - $100.00</a>
                </li>
                <li>
                  <a href="#">$100.00 - $200.00</a>
                </li>
                <li>
                  <a href="#">$200.00 - $300.00</a>
                </li>
                <li>
                  <a href="#">$300.00 - $500.00</a>
                </li>
                <li>
                  <a href="#">$500.00+</a>
                </li>
              </ul>
              {/* <form className="price-range">
                            <input type="number" name="min_price" className="min_price text-center"
                                placeholder="$min"><span className="delimiter">-</span><input
                                type="number" name="max_price" className="max_price text-center"
                                placeholder="$max"><a href="#"
                                className="btn btn-primary btn-rounded">Go</a>
                        </form> */}
            </div>
          </div>

          <div className="widget widget-collapsible">
            <h3 className="widget-title">
              <label>Size</label>
            </h3>
            <ul className="widget-body filter-items item-check mt-1">
              <li>
                <a href="#">Extra Large</a>
              </li>
              <li>
                <a href="#">Large</a>
              </li>
              <li>
                <a href="#">Medium</a>
              </li>
              <li>
                <a href="#">Small</a>
              </li>
            </ul>
          </div>

          <div className="widget widget-collapsible">
            <h3 className="widget-title">
              <label>Brand</label>
            </h3>
            <ul className="widget-body filter-items item-check mt-1">
              <li>
                <a href="#">Elegant Auto Group</a>
              </li>
              <li>
                <a href="#">Green Grass</a>
              </li>
              <li>
                <a href="#">Node Js</a>
              </li>
              <li>
                <a href="#">NS8</a>
              </li>
              <li>
                <a href="#">Red</a>
              </li>
              <li>
                <a href="#">Skysuite Tech</a>
              </li>
              <li>
                <a href="#">Sterling</a>
              </li>
            </ul>
          </div>

          <div className="widget widget-collapsible">
            <h3 className="widget-title">
              <label>Color</label>
            </h3>
            <ul className="widget-body filter-items item-check mt-1">
              <li>
                <a href="#">Black</a>
              </li>
              <li>
                <a href="#">Blue</a>
              </li>
              <li>
                <a href="#">Brown</a>
              </li>
              <li>
                <a href="#">Green</a>
              </li>
              <li>
                <a href="#">Grey</a>
              </li>
              <li>
                <a href="#">Orange</a>
              </li>
              <li>
                <a href="#">Yellow</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSideBar;
