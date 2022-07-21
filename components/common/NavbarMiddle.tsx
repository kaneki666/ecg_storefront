import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import useAxios from "../../utils/helperFucntion/useAxios";
import { CategoriesProps } from "../../utils/types/landingpage";
import { RootAppStateProps } from "../../utils/types/reduxTypes";
import { SearchProps } from "../../utils/types/types";
import NavbarCart from "./NavbarCart";
import NavbarLiveChat from "./NavbarLiveChat";

const NavbarMiddle = ({ data }: { data: CategoriesProps[] }) => {
  const { wishlist, compareProducts } = useSelector(
    (state: RootAppStateProps) => state.ProductReducer
  );
  const axiosInstance = useAxios();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<SearchProps>();
  const router = useRouter();
  
  const onSubmit: SubmitHandler<SearchProps> = async (data) => {
    router.push({pathname:'/search',query:{query:data.query,category_id:data.category_id}}); 

  }; 

  return (
    <div className="header-middle">
      <div className="container">
        <div className="header-left mr-md-4">
          <a
            href="#"
            className="mobile-menu-toggle  w-icon-hamburger"
            aria-label="menu-toggle"
          ></a>
          <a href="/" className="logo ml-lg-0">
            <Image src="/images/logo.png" alt="logo" width="144" height="45" />
          </a>
          <form
            className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="select-box">
              <select id="category" {...register("category_id")}>
                <option value={0}>All Category</option>
                {data &&
                  data.length > 0 &&
                  data.map((item: CategoriesProps) => (
                    <option value={item.id} key={item.id}>
                      {item.title}
                    </option>
                  ))}
              </select>
            </div>
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="Search in..."
              {...register("query")}
            />
            <button className="btn btn-search" type="submit">
              <i className="w-icon-search"></i>
            </button>
          </form>
        </div>
        <div className="header-right ml-4">
          <NavbarLiveChat />

          <div className="wishlist2 dropdown1">
            <a className="wishlist label-down link d-xs-show" href="wishlist">
              <i className="w-icon-heart">
                <span className="wishlist-count">
                  {wishlist ? wishlist.length : 0}
                </span>
              </i>
              <span className="wishlist-label d-lg-show">Wishlist</span>
            </a>
          </div>
          <div className="wishlist2 dropdown1">
            <a className="wishlist label-down link d-xs-show" href="compare">
              <i className="w-icon-compare">
                <span className="wishlist-count">
                  {compareProducts ? compareProducts.length : 0}
                </span>
              </i>
              <span className="wishlist-label d-lg-show">Compare</span>
            </a>
          </div>
          {/* <a className="compare label-down link d-xs-show" href="compare">
            <i className="w-icon-compare">
            </i>
            <span className="compare-label d-lg-show">Compare</span>
          </a> */}
          <NavbarCart />
        </div>
      </div>
    </div>
  );
};

export default NavbarMiddle;
