import React from "react";
import { SingleProductProps } from "../../utils/types/landingpage";
import CategoryProductItem from "./CategoryProductItem";

const MainContent = ({ products }: { products: SingleProductProps[] }) => {
  return (
    <div>
      <div className="product-wrapper row cols-md-3 cols-sm-2 cols-2">
        {products.map((product) => (
          <CategoryProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
