import React from "react";
import { CatehoriesOfMonthProps } from "../../utils/types/types";

const TopCategoriesOfMonth = ({
  categories,
}: {
  categories: CatehoriesOfMonthProps[];
}) => {
  return (
    <section className="category-section top-category bg-grey pt-10 pb-10 ">
      <div className="container pb-2">
        <h2 className="title justify-content-center pt-1 ls-normal mb-5">
          Top Categories Of The Month
        </h2>
        <div className="swiper">
          <div
            className="swiper-container swiper-theme pg-show"
            data-swiper-options="{
              'spaceBetween': 20,
              'slidesPerView': 2,
              'breakpoints': {
                  '576': {
                      'slidesPerView': 3
                  },
                  '768': {
                      'slidesPerView': 5
                  },
                  '992': {
                      'slidesPerView': 6
                  }
              }
          }"
          >
            <div className="swiper-wrapper row cols-lg-6 cols-md-5 cols-sm-3 cols-2">
              {categories.map((item) => (
                <div
                  key={item.id}
                  className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs"
                >
                  <a
                    href={`category?id=${item.id}&type=cate`}
                    className="category-media"
                  >
                    <img
                      src={item.cover}
                      alt="Category"
                      width="130"
                      height="130"
                    />
                  </a>
                  <div className="category-content">
                    <h4 className="category-name">{item.title}</h4>
                    <a
                      href="category"
                      className="btn btn-primary btn-link btn-underline"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategoriesOfMonth;
