import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addToCartAction,
  addToQuickViewAction,
  removeFromWishlistAction,
} from "../../store/products/actions";
import { SingleProductProps } from "../../utils/types/landingpage";
import { CartItemProps, RootAppStateProps } from "../../utils/types/reduxTypes";

const PageContent = () => {
  const { wishlist } = useSelector(
    (state: RootAppStateProps) => state.ProductReducer
  );
  const handleAddToCart = (productItem: SingleProductProps) => {
    const cartItem: CartItemProps = {
      id: productItem.id,
      thumbnail: productItem.thumbnail,
      title: productItem.title,
      price: productItem.price,
      quantity: 1,
      totalPrice: productItem.price,
    };
    dispatch(addToCartAction(cartItem));
    toast("Added to cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleAddToQuickView = (productItem: SingleProductProps) =>
    dispatch(addToQuickViewAction(productItem));
  const dispatch = useDispatch();
  const handleRemoveFromWishList = (id: number) => {
    dispatch(removeFromWishlistAction(id));
  };
  return (
    <div>
      <h3 className="wishlist-title">My wishlist</h3>
      <table className="shop-table wishlist-table">
        <thead>
          <tr>
            <th className="product-name">
              <span>Product</span>
            </th>
            <th></th>
            <th className="product-price">
              <span>Price</span>
            </th>
            <th className="product-stock-status">
              <span>Stock Status</span>
            </th>
            <th className="wishlist-action">Actions</th>
          </tr>
        </thead>
        <tbody>
          {wishlist &&
            wishlist?.map((item: SingleProductProps) => (
              <tr key={item.id}>
                <td className="product-thumbnail">
                  <div className="p-relative">
                    <a href="#">
                      <figure>
                        <Image
                          src={item.thumbnail}
                          alt="product"
                          width={300}
                          height={338}
                        />
                      </figure>
                    </a>
                    <button
                      onClick={() => handleRemoveFromWishList(item.id)}
                      className="btn btn-close"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </td>
                <td className="product-name">
                  <a href="#">{item.title}</a>
                </td>
                <td className="product-price">
                  <ins className="new-price">{item.price}</ins>
                </td>
                <td className="product-stock-status">
                  <span className="wishlist-in-stock">{item.status}</span>
                </td>
                <td className="wishlist-action">
                  <div className="d-lg-flex">
                    <a
                      onClick={() => handleAddToQuickView(item)}
                      className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0"
                    >
                      Quick View
                    </a>
                    <a
                      onClick={() => handleAddToCart(item)}
                      className="btn-cart btn btn-dark btn-rounded btn-sm ml-lg-2 "
                    >
                      Add to cart
                    </a>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PageContent;
