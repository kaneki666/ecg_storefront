import type { NextPage } from "next";
import HotDealsTheDay from "./HotDealsTheDay";
import TopBestSeller from "./TopBestSeller";

const DealsOfTheDay: NextPage = () => {
  return (
    <div className="row deals-wrapper appear-animate mb-8">
      <HotDealsTheDay/>
      <TopBestSeller/>
    </div>
  );
};

export default DealsOfTheDay;
