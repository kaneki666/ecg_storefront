import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addToCompareAction,
  addToQuickViewAction,
  addToWishlistAction,
  removeFromCompareAction,
  removeFromWishlistAction,
} from "../../store/products/actions";
import { SingleProductProps } from "../../utils/types/landingpage";
import { CartItemProps, CompareProductProps, RootAppStateProps } from "../../utils/types/reduxTypes";

const ProductItem = ({ productItem }: { productItem: SingleProductProps }) => {
  const [checkWishlist, setcheckWishlist] = useState(false);
  const currency = useSelector(
    (state: RootAppStateProps) => state.AuthReducer.currency
  );
  const { wishlist } = useSelector(
    (state: RootAppStateProps) => state.ProductReducer
  );

  const { compareProducts } = useSelector(
    (state: RootAppStateProps) => state.ProductReducer
  );


  const dispatch = useDispatch();

  const handleAddToQuickView = () =>
    dispatch(addToQuickViewAction(productItem));

  useEffect(() => {
    if (wishlist) {
      if (wishlist?.length > 0) {
        const findIndexWishlistRemove = wishlist?.findIndex(
          (item: SingleProductProps) => item.id === productItem.id
        );
        if (findIndexWishlistRemove !== -1) {
          setcheckWishlist(true);
        } else {
          setcheckWishlist(false);
        }
      }
    }
  }, []);

  // const handleAddToCart = () => {
  //   const cartItem: CartItemProps = {
  //     id: productItem.id,
  //     thumbnail: productItem.thumbnail,
  //     title: productItem.title,
  //     price: productItem.price,
  //     quantity: 1,
  //     totalPrice: productItem.price,
  //   };
  //   dispatch(addToCartAction(cartItem));
  // };
  const handleAddToComparelist = () => {
    const compareItem: CompareProductProps = {
      id: productItem.id,
      thumbnail: productItem.thumbnail,
      title: productItem.title,
      price: productItem.price,
      quantity: productItem.price,
      old_price: productItem.price,
      short_description: productItem.short_description,
      rating: productItem.rating,
      is_featured: productItem.is_featured,
      product_category_name: productItem.product_category_name,
      product_brand: productItem.price,
      full_description: productItem.full_description,
      warranty: productItem.warranty,
      variation: productItem.variation,
    };
    if(compareProducts.length <= 1){
      dispatch(addToCompareAction(compareItem));
    }else if(compareProducts.length === 2){
     dispatch(removeFromCompareAction(compareProducts[0].id))
     dispatch(addToCompareAction(compareItem));
     console.log(compareProducts)
    }
    console.log(compareItem)
  };
  const handleWishlist = () => {
    if (wishlist?.length !== 0) {
      if (wishlist) {
        const findIndexWishlistRemove = wishlist?.findIndex(
          (item: SingleProductProps) => item.id === productItem.id
        );
        console.log(findIndexWishlistRemove);

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
          dispatch(addToWishlistAction(productItem));
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
          dispatch(addToWishlistAction(productItem));
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
      dispatch(addToWishlistAction(productItem));
    }
  };
  return (
    <div className="product-wrap">
      <div className="product text-center">
        <figure className="product-media">
          <a href={`productdetail?slug=${productItem.slug}`}>
            <img src={productItem.thumbnail} width="300" height="338" />
          </a>
          <div className="product-action-vertical">
            {/* <a
              onClick={handleAddToCart}
              href="#"
              className="btn-product-icon btn-cart w-icon-cart"
              title="Add to cart"
            ></a> */}
            <a
              onClick={handleWishlist}
              href="#"
              className={
                checkWishlist === true
                  ? "btn-product-icon btn-wishlist w-icon-heart-full"
                  : "btn-product-icon btn-wishlist w-icon-heart"
              }
              title="Add to wishlist"
            ></a>
            <a
              onClick={handleAddToQuickView}
              href="#"
              className="btn-product-icon btn-quickview w-icon-search"
              title="Quickview"
            ></a>
            <a
              onClick={handleAddToComparelist}
              href="#"
              className="btn-product-icon btn-compare w-icon-compare"
              title="Add to Compare"
            ></a>
          </div>
        </figure>
        <div className="product-details">
          <h4 className="product-name">
            <a href={`productdetail?slug=${productItem.slug}`}>
              {productItem.title}
            </a>
          </h4>
          <div className="ratings-container">
            <div className="ratings-full">
              <span
                className="ratings"
                style={{ width: `${parseInt(productItem.rating) * 20}%` }}
              ></span>
              <span className="tooltiptext tooltip-top"></span>
            </div>
            <a href="#" className="rating-reviews">
              (3 reviews)
            </a>
          </div>
          <div className="product-price">
            <ins className="new-price">
              {currency.currency_symbol}{" "}
              {productItem.price * currency.currency_rate}
            </ins>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
