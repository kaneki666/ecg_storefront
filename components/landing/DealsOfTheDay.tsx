import HotDealsTheDay from "./HotDealsTheDay";
import TopBestSeller from "./TopBestSeller";
import {
  HomePageApiProps,
  ProductListProps,
} from "../../utils/types/landingpage";

const DealsOfTheDay = ({ data }: { data: HomePageApiProps }) => {
  return (
    <div className="row deals-wrapper  mb-8">
      {data.deals_of_the_day[0] && (
        <HotDealsTheDay products={data.deals_of_the_day[0]} />
      )}
      <TopBestSeller productList={data.top_20_best_seller} />
    </div>
  );
};

export default DealsOfTheDay;
