import HotDealsTheDay from "./HotDealsTheDay";
import TopBestSeller from "./TopBestSeller";
import { ProductListProps } from "../../utils/types/landingpage";

const DealsOfTheDay = ({ productsList, productList }: { productsList: ProductListProps
                                                        productList: ProductListProps }) => {
  return (
    <div className="row deals-wrapper appear-animate mb-8">
      {productsList.deals_of_the_day[0] && (
        <HotDealsTheDay products={productsList.deals_of_the_day[0]} />
      )}
      <TopBestSeller productList={productList} />
    </div>
  );
};

export default DealsOfTheDay;
