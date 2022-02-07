import Image from "next/image";
import React from "react";

const PageContent = (props: any) => {
    const {wishlist_props} =props;

  return (
  <div> 
    <h3 className="wishlist-title">My wishlist</h3>
    <table className="shop-table wishlist-table">
        <thead>
            <tr>
                <th className="product-name"><span>Product</span></th>
                <th></th>
                <th className="product-price"><span>Price</span></th>
                <th className="product-stock-status"><span>Stock Status</span></th>
                <th className="wishlist-action">Actions</th>
            </tr>
        </thead>
        <tbody>
        {wishlist_props.map((item:any) => (

        <tr key={item.id}>
            <td className="product-thumbnail">
                <div className="p-relative">
                    <a href="product-default.html">
                        <figure>
                            <Image src={item.image} alt="product" width={300}
                                height={338} />
                        </figure>
                    </a>
                    <button type="submit" className="btn btn-close"><i
                            className="fas fa-times"></i></button>
                </div>
            </td>
            <td className="product-name">
                <a href="product-default.html">
                    {item.title}
                </a>
            </td>
            <td className="product-price">
                <ins className="new-price">{item.price}</ins>
            </td>
            <td className="product-stock-status">
                <span className="wishlist-in-stock">{item.stock_status}</span>
            </td>
            <td className="wishlist-action">
                <div className="d-lg-flex">
                    <a href="#"
                        className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0">Quick
                        View</a>
                    <a href="#" className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart">Add to
                        cart</a>
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
 



