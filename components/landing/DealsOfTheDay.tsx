import HotDealsTheDay from "./HotDealsTheDay";
import TopBestSeller from "./TopBestSeller";
import {
  ProductListProps,
  SingleProductProps,
} from "../../utils/types/landingpage";
import { API_BASE_URL } from "../../pages/api/hello";
import { NextPage } from "next";

const DealsOfTheDay: NextPage = ({
  productList,
}: {
productList: ProductListProps;
}) => {
  return (
    <div className="row deals-wrapper appear-animate mb-8">
      <HotDealsTheDay/>
      <TopBestSeller productList={productList}/>
    </div>
  );
};

export default DealsOfTheDay;
