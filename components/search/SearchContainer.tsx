import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { shuffleArray } from "../../utils/helperFucntion/helper";
import useAxios from "../../utils/helperFucntion/useAxios";
import {
  HomePageApiProps,
  ProductListProps,
  SingleProductProps,
} from "../../utils/types/landingpage";
import { RootAppStateProps } from "../../utils/types/reduxTypes";
import ProductItem from "../landing/ProductItem";

const SearchContainer = () => {
  const axiosInstance = useAxios();
  const router = useRouter();
  const queryData = router.query.query;
  const categoryId = router.query.category_id;
  const [searchData, setSearchData] = useState([]);
  
  async function getsearchData() {
    try {
      if (categoryId && categoryId != "0" && queryData !== "") {
        const response = await axiosInstance.get(
          `/search-product/?query=${queryData}&category_id=${categoryId}`
        );
        setSearchData(response.data.results);
      } else if (categoryId && categoryId != "0") {
        const response = await axiosInstance.get(
          `/search-product/?category_id=${categoryId}`
        );
        setSearchData(response.data.results);
      } else if (queryData) {
        const response = await axiosInstance.get(
          `/search-product/?query=${queryData}`
        );

        setSearchData(response.data.results);
        console.log(searchData, "searchData");
      } else {
        const response = await axiosInstance.get(`/search-product/`);
        setSearchData(response.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log(searchData);

  useEffect(() => {
    getsearchData();
  }, [categoryId,queryData]);

  return (
    <div className="container">
      {/* <!-- End of Tab --> */}
      <div className="tab-content product-wrapper ">
        <div className="tab-pane active pt-4" id="tab1-1">
          <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
            {searchData &&
              searchData.map((item: SingleProductProps) => (
                <ProductItem key={item.id.toString()} productItem={item} />
              ))}
          </div>
        </div>
        {!searchData.length && (
          <div className="text-center mt-4 mb-8 notfound">No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default SearchContainer;
