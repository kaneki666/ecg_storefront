import HotDealsTheDay from "./HotDealsTheDay";
import TopBestSeller from "./TopBestSeller";
import { ProductListProps } from "../../utils/types/landingpage";

const DealsOfTheDay = ({ productList }: { productList: ProductListProps }) => {
  return (
    <div className="row deals-wrapper appear-animate mb-8">
      <HotDealsTheDay />
      <TopBestSeller productList={productList} />
    </div>
  );
};

export default DealsOfTheDay;
