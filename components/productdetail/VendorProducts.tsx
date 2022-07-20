import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../../pages/api/hello";
import {
  addToCompareAction,
  addToQuickViewAction,
  addToWishlistAction,
  removeFromCompareAction,
} from "../../store/products/actions";
import { SingleProductProps } from "../../utils/types/landingpage";
import {
  CompareProductProps,
  RootAppStateProps,
} from "../../utils/types/reduxTypes";

const VendorProducts = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  const { ProductReducer, AuthReducer } = useSelector(
    (state: RootAppStateProps) => state
  );

  const { wishlist, compareProducts } = ProductReducer;
  const { currency } = AuthReducer;

  const [products, setProducts] = useState<SingleProductProps[] | null>(null);

  const getProducts = async () => {
    try {
      const request = await fetch(`${API_BASE_URL}/vendor-product-list/${id}/`);
      const data = await request.json();
      setProducts(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddToComparelist = (productItem: SingleProductProps) => {
    const compareItem: CompareProductProps = {
      id: productItem.id,
      thumbnail: productItem.thumbnail,
      title: productItem.title,
      price: productItem.price,
      total_quantity: productItem.total_quantity,
      // old_price: product.price,
      short_description: productItem.short_description,
      rating: productItem.avg_rating,
      // is_featured: false,
      category_title: productItem.category_name,
      brand: productItem.brand_name,
      full_description: productItem.full_description,
      warranty: productItem.warranty,
    };
    const add = toast("Added in compare", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    if (compareProducts) {
      if (compareProducts.length < 4) {
        dispatch(addToCompareAction(compareItem));
        add;
      } else if (compareProducts.length === 4) {
        dispatch(removeFromCompareAction(compareProducts[0].id));
        dispatch(addToCompareAction(compareItem));
        add;
      }
    }
  };

  const handleWishlist = (productItem: SingleProductProps) => {
    if (wishlist?.length !== 0) {
      if (wishlist) {
        const findIndexWishlistRemove = wishlist?.findIndex(
          (item: SingleProductProps) => item.id === productItem.id
        );

        if (findIndexWishlistRemove === -1) {
          toast("Added in wishlist", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch(addToWishlistAction(productItem));
        } else {
          toast("Removed from wishlist", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch(addToWishlistAction(productItem));
        }
      }
    } else {
      toast("Added in wishlist", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(addToWishlistAction(productItem));
    }
  };
  const handleAddToQuickView = (productItem: SingleProductProps) =>
    dispatch(addToQuickViewAction(productItem));
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <section className="vendor-product-section">
      <div className="title-link-wrapper mb-4">
        <h4 className="title text-left">More Products From This Vendor</h4>
        <a
          href="#"
          className="btn btn-dark btn-link btn-slide-right btn-icon-right"
        >
          More Products<i className="w-icon-long-arrow-right"></i>
        </a>
      </div>
      <div
        className="swiper-container swiper-theme"
        data-swiper-options="{
      'spaceBetween': 20,
      'slidesPerView': 2,
      'breakpoints': {
          '576': {
              'slidesPerView': 3
          },
          '768': {
              'slidesPerView': 4
          },
          '992': {
              'slidesPerView': 3
          }
      }
  }"
      >
        <div className="swiper-wrapper row cols-lg-3 cols-md-4 cols-sm-3 cols-2">
          {products !== null && products[0] && (
            <div className="swiper-slide product">
              <figure className="product-media">
                <a href="#">
                  <img
                    src={products[0].thumbnail}
                    alt="Product"
                    width="300"
                    height="338"
                  />
                  <img
                    src={products[0].thumbnail}
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
                <div className="product-action-vertical">
                  {/* <a
                  href="#"
                  className="btn-product-icon btn-cart w-icon-cart"
                  title="Add to cart"
                ></a> */}
                  <a
                    onClick={() => handleWishlist(products[0])}
                    href="#"
                    className="btn-product-icon btn-wishlist w-icon-heart"
                    title="Add to wishlist"
                  ></a>
                  <a
                    onClick={() => handleAddToComparelist(products[0])}
                    href="#"
                    className="btn-product-icon btn-compare w-icon-compare"
                    title="Add to Compare"
                  ></a>
                </div>
                <div className="product-action">
                  <a
                    onClick={() => handleAddToQuickView(products[0])}
                    href="#"
                    className="btn-product btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </div>
              </figure>
              <div className="product-details">
                <div className="product-cat">
                  <a href="category">{products[0].category.title}</a>
                </div>
                <h4 className="product-name">
                  <a href="#">{products[0].title}</a>
                </h4>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span
                      className="ratings"
                      style={{
                        width: `${
                          products[0].avg_rating === null
                            ? 0
                            : products[0].avg_rating + "%"
                        }`,
                      }}
                    ></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <a href="#" className="rating-reviews">
                    ({products[0].review_count} reviews)
                  </a>
                </div>
                <div className="product-pa-wrapper">
                  <div className="product-price">
                    <ins className="new-price">
                      {" "}
                      {currency.currency_symbol}{" "}
                      {products[0].price * currency.currency_rate}
                    </ins>
                    <del className="old-price">
                      {" "}
                      {currency.currency_symbol}{" "}
                      {products[0].old_price * currency.currency_rate}
                    </del>
                  </div>
                </div>
              </div>
            </div>
          )}
          {products !== null && products[1] && (
            <div className="swiper-slide product">
              <figure className="product-media">
                <a href="#">
                  <img
                    src={products[1].thumbnail}
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
                <div className="product-action-vertical">
                  {/* <a
                  
                    href="#"
                    className="btn-product-icon btn-cart w-icon-cart"
                    title="Add to cart"
                  ></a> */}
                  <a
                    onClick={() => handleWishlist(products[1])}
                    href="#"
                    className="btn-product-icon btn-wishlist w-icon-heart"
                    title="Add to wishlist"
                  ></a>
                  <a
                    onClick={() => handleAddToComparelist(products[1])}
                    href="#"
                    className="btn-product-icon btn-compare w-icon-compare"
                    title="Add to Compare"
                  ></a>
                </div>
                <div className="product-action">
                  <a
                    onClick={() => handleAddToQuickView(products[1])}
                    href="#"
                    className="btn-product btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </div>
              </figure>
              <div className="product-details">
                <div className="product-cat">
                  <a href="category">{products[1].category.title}</a>
                </div>
                <h4 className="product-name">
                  <a href="#">{products[1].title}</a>
                </h4>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span
                      className="ratings"
                      style={{
                        width: `${
                          products[1].avg_rating === null
                            ? 0
                            : products[1].avg_rating + "%"
                        }`,
                      }}
                    ></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <a href="#" className="rating-reviews">
                    (5 reviews)
                  </a>
                </div>
                <div className="product-pa-wrapper">
                  <div className="product-price">
                    <ins className="new-price">
                      {" "}
                      {currency.currency_symbol}{" "}
                      {products[1].price * currency.currency_rate}
                    </ins>
                    <del className="old-price">
                      {" "}
                      {currency.currency_symbol}{" "}
                      {products[1].old_price * currency.currency_rate}
                    </del>
                  </div>
                </div>
              </div>
            </div>
          )}
          {products !== null && products[2] && (
            <div className="swiper-slide product">
              <figure className="product-media">
                <a href="#">
                  <img
                    src={products[2].thumbnail}
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
                <div className="product-action-vertical">
                  {/* <a
                  href="#"
                  className="btn-product-icon btn-cart w-icon-cart"
                  title="Add to cart"
                ></a>  */}
                  <a
                    onClick={() => handleWishlist(products[2])}
                    href="#"
                    className="btn-product-icon btn-wishlist w-icon-heart"
                    title="Add to wishlist"
                  ></a>
                  <a
                    onClick={() => handleAddToComparelist(products[2])}
                    href="#"
                    className="btn-product-icon btn-compare w-icon-compare"
                    title="Add to Compare"
                  ></a>
                </div>
                <div className="product-action">
                  <a
                    onClick={() => handleAddToQuickView(products[2])}
                    href="#"
                    className="btn-product btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </div>
              </figure>
              <div className="product-details">
                <div className="product-cat">
                  <a href="category">{products[2].category.title}</a>
                </div>
                <h4 className="product-name">
                  <a href="#">Skate Pan</a>
                </h4>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span
                      className="ratings"
                      style={{
                        width: `${
                          products[2].avg_rating === null
                            ? 0
                            : products[2].avg_rating + "%"
                        }`,
                      }}
                    ></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <a href="#" className="rating-reviews">
                    ({products[2].review_count} reviews)
                  </a>
                </div>
                <div className="product-pa-wrapper">
                  <div className="product-price">
                    <ins className="new-price">
                      {" "}
                      {currency.currency_symbol}{" "}
                      {products[2].price * currency.currency_rate}
                    </ins>
                    <del className="old-price">
                      {" "}
                      {currency.currency_symbol}{" "}
                      {products[2].old_price * currency.currency_rate}
                    </del>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VendorProducts;
