import Image from "next/image";
import React from "react";
import { SingleProductProps } from "../../utils/types/landingpage";

const RecentViewProduct = ({ productItem }: { productItem: SingleProductProps }) => {
  return (
    <div className="swiper-slide product-wrap mb-0">
      <div className="product text-center product-absolute">
        <figure className="product-media">
          <a href="#">
            <img src={productItem.thumbnail} width="130" height="146" />
          </a>
        </figure>
        
          <h4 className="product-name">
            <a href="#">{productItem.title}</a>
          </h4>
      </div>
    </div>
  );
};

export default RecentViewProduct;
