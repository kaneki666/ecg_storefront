import React from "react";

const ShopCategory = () => {
  return (
  <div>
    <div className="shop-default-category category-ellipse-section mb-6">
        <div className="swiper-container swiper-theme shadow-swiper"
            data-swiper-options="{
            'spaceBetween': 20,
            'slidesPerView': 2,
            'breakpoints': {
                '480': {
                    'slidesPerView': 3
                },
                '576': {
                    'slidesPerView': 4
                },
                '768': {
                    'slidesPerView': 6
                },
                '992': {
                    'slidesPerView': 7
                },
                '1200': {
                    'slidesPerView': 8,
                    'spaceBetween': 30
                }
            }
        }">
            <div className="swiper-wrapper row gutter-lg cols-xl-8 cols-lg-7 cols-md-6 cols-sm-4 cols-xs-3 cols-2">
                <div className="swiper-slide category-wrap">
                    <div className="category category-ellipse">
                        <figure className="category-media">
                            <a href="#">
                                <img src="images/categories/category-4.jpg" alt="Categroy"
                                    width="190" height="190" style={{ backgroundColor: "#5C92C0" }} />
                            </a>
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">
                                <a href="#">Sports</a>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide category-wrap">
                    <div className="category category-ellipse">
                        <figure className="category-media">
                            <a href="#">
                                <img src="images/categories/category-5.jpg" alt="Categroy"
                                    width="190" height="190" style={{ backgroundColor: "#B8BDC1" }} />
                            </a>
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">
                                <a href="#">Babies</a>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide category-wrap">
                    <div className="category category-ellipse">
                        <figure className="category-media">
                            <a href="#">
                                <img src="images/categories/category-6.jpg" alt="Categroy"
                                    width="190" height="190" />
                            </a>
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">
                                <a href="#">Sneakers</a>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide category-wrap">
                    <div className="category category-ellipse">
                        <figure className="category-media">
                            <a href="#">
                                <img src="images/categories/category-7.jpg" alt="Categroy"
                                    width="190" height="190" />
                            </a>
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">
                                <a href="#">Cameras</a>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide category-wrap">
                    <div className="category category-ellipse">
                        <figure className="category-media">
                            <a href="#">
                                <img src="images/categories/category-8.jpg" alt="Categroy"
                                    width="190" height="190" />
                            </a>
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">
                                <a href="#">Games</a>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide category-wrap">
                    <div className="category category-ellipse">
                        <figure className="category-media">
                            <a href="#">
                                <img src="images/categories/category-9.jpg" alt="Categroy"
                                    width="190" height="190" />
                            </a>
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">
                                <a href="#">Kitchen</a>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide category-wrap">
                    <div className="category category-ellipse">
                        <figure className="category-media">
                            <a href="#">
                                <img src="images/categories/category-20.jpg" alt="Categroy"
                                    width="190" height="190" />
                            </a>
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">
                                <a href="#">Watches</a>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide category-wrap">
                    <div className="category category-ellipse">
                        <figure className="category-media">
                            <a href="#">
                                <img src="images/categories/category-21.jpg" alt="Categroy"
                                    width="190" height="190" />
                            </a>
                        </figure>
                        <div className="category-content">
                            <h4 className="category-name">
                                <a href="#">Clothes</a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </div>
  </div>  
  );
};

export default ShopCategory;
