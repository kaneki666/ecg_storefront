import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addToCartAction,
  addToCompareAction,
  addToQuickViewAction,
  addToWishlistAction,
  removeFromCompareAction,
} from "../../store/products/actions";
import { SingleProductProps } from "../../utils/types/landingpage";
import {
  CartItemProps,
  RootAppStateProps,
} from "../../utils/types/reduxTypes";

const Categoryproduct = ({ product }: { product: SingleProductProps }) => {
  const currency = useSelector(
    (state: RootAppStateProps) => state.AuthReducer.currency
  );
  const [checkWishlist, setcheckWishlist] = useState(false);
  const { wishlist, compareProducts } = useSelector(
    (state: RootAppStateProps) => state.ProductReducer
  );
  const dispatch = useDispatch();

  const handleAddToQuickView = () => dispatch(addToQuickViewAction(product));

  const handleAddToCart = () => {
    const cartItem: CartItemProps = {
      id: product.id,
      thumbnail: product.thumbnail,
      title: product.title,
      price: product.price,
      quantity: 1,
      totalPrice: product.price,
    };
    dispatch(addToCartAction(cartItem));
  };

  const handleAddToComparelist = () => {
    const compareItem: SingleProductProps = {
      id: product.id,
      slug: product.slug,
      sku:  product.sku,
      thumbnail: product.thumbnail,
      title: product.title,
      price: product.price,
      total_quantity: product.total_quantity,
      old_price: product.old_price,
      short_description: product.short_description,
      avg_rating: product.avg_rating,
      is_featured: product.is_featured,
      category_name: product.category_name,
      brand_name: product.brand_name,
      full_description: product.full_description,
      warranty: product.warranty,
      review_count: product.review_count,
      status: product.status,
      vendor: product.vendor,
      category: product.category,
      sub_category: product.sub_category,
      brand: product.brand,
      unit: product.unit,
      purchase_price: product.purchase_price,
      tax_in_percent: product.tax_in_percent,
      discount_type:  product.discount_type,
      discount_amount: product.discount_amount,
      total_shipping_cost: product.total_shipping_cost,
      shipping_time: product.shipping_time,
      youtube_link: product.youtube_link,
      product_tags: product.product_tags,
      product_reviews: product.product_reviews,
      product_media: product.product_media,
      product_combinations: product.product_combinations,
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
  const handleWishlist = () => {
    if (wishlist?.length !== 0) {
      if (wishlist) {
        const findIndexWishlistRemove = wishlist?.findIndex(
          (item: SingleProductProps) => item.id === product.id
        );

        if (findIndexWishlistRemove === -1) {
          setcheckWishlist(true);
          toast("Added in wishlist", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch(addToWishlistAction(product));
        } else {
          setcheckWishlist(false);
          toast("Removed from wishlist", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch(addToWishlistAction(product));
        }
      }
    } else {
      setcheckWishlist(true);
      toast("Added in wishlist", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(addToWishlistAction(product));
    }
  };
  return (
    <div className="product-wrap">
      <div className="product text-center">
        <figure className="product-media">
          <a href={`productdetail?slug=${product.slug}`}>
            <img
              src={product.thumbnail}
              alt="Product"
              width="300"
              height="338"
            />
          </a>
          <div className="product-action-horizontal">
            <a
              onClick={handleAddToCart}
              href="#"
              className="btn-product-icon btn-cart w-icon-cart"
              title="Add to cart"
            ></a>
            <a
              onClick={handleWishlist}
              href="#"
              className="btn-product-icon btn-wishlist w-icon-heart"
              title="Wishlist"
            ></a>
            <a
              onClick={handleAddToComparelist}
              href="#"
              className="btn-product-icon btn-compare w-icon-compare"
              title="Compare"
            ></a>
            <a
              onClick={handleAddToQuickView}
              href="#"
              className="btn-product-icon btn-quickview w-icon-search"
              title="Quick View"
            ></a>
          </div>
        </figure>
        <div className="product-details">
          <div className="product-cat">
            <a href="category">{product.category_name}</a>
          </div>
          <h3 className="product-name">
            <a href="#">{product.title}</a>
          </h3>
          <div className="ratings-container">
            {/* <div className="ratings-full">
              <span
                className="ratings"
                style={{ width: `${parseInt(product.) * 20}%` }}
              ></span>
              <span className="tooltiptext tooltip-top"></span>
            </div> */}
            <a href="#" className="rating-reviews">
              (3 reviews)
            </a>
          </div>
          <div className="product-pa-wrapper">
            <div className="product-price">
              {" "}
              {currency.currency_symbol}{" "}
              {product.price * currency.currency_rate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoryproduct;
