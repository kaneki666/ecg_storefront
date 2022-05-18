import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { HomePageApiProps, SingleProductProps } from "../../utils/types/landingpage";
import { RootAppStateProps } from "../../utils/types/reduxTypes";
import Product from "./Product";

const MainContent = ({
    productList,
  }: {
    productList: HomePageApiProps;
  }) => {
    const { recentProducts } = useSelector(
      (state: RootAppStateProps) => state.ProductReducer
    );
  return (
  <div>
    
        <div className="tab tab-nav-underline tab-nav-boxed tab-vendor-wcfm">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a href="#tab-1" className="nav-link active">Products</a>
                </li>
                <li className="nav-item">
                    <a href="#tab-2" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="#tab-3" className="nav-link">Policies</a>
                </li>
                <li className="nav-item">
                    <a href="#tab-4" className="nav-link">Reviews(1)</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane active" id="tab-1">
                    <nav className="toolbox sticky-toolbox sticky-content fix-top">
                        <div className="toolbox-left">
                            <div className="toolbox-item toolbox-sort select-box text-dark">
                                <label>Sort By :</label>
                                <select name="orderby" className="form-control">
                                    <option value="default">Default sorting
                                    </option>
                                    <option value="popularity">Sort by popularity</option>
                                    <option value="rating">Sort by average rating</option>
                                    <option value="date">Sort by latest</option>
                                    <option value="price-low">Sort by pric: low to high</option>
                                    <option value="price-high">Sort by price: high to low</option>
                                </select>
                            </div>
                        </div>
                        <div className="toolbox-right">
                            <div className="toolbox-item toolbox-show select-box">
                                <select name="count" className="form-control">
                                    <option value="9">Show 9</option>
                                    <option value="12">Show 12</option>
                                    <option value="24">Show 24</option>
                                    <option value="36">Show 36</option>
                                </select>
                            </div>
                            <div className="toolbox-item toolbox-layout">
                                <a href="#"
                                    className="icon-mode-grid btn-layout active">
                                    <i className="w-icon-grid"></i>
                                </a>
                                <a href="#"
                                    className="icon-mode-list btn-layout">
                                    <i className="w-icon-list"></i>
                                </a>
                            </div>
                        </div>
                    </nav>
                    

                    <div className="product-wrapper row cols-md-3 cols-sm-2 cols-2">
                    {productList.new_arrivals &&
                    productList.new_arrivals.map(
                        (productItem: SingleProductProps) => (
                        <Product
                            key={productItem.id.toString()}
                            productItem={productItem}
                        />
                        )
                    )}
                    </div>










                </div>
                <div className="tab-pane" id="tab-2">
                    <p className="mb-4"><strong>L</strong>orem ipsum dolor sit amet, consectetur
                        adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Venenatis tellus in metus vulputate eu scelerisque felis. Vel
                        pretium lectus quam id leo in vitae turpis massa. Nunc id cursus
                        metus aliquam. Libero id faucibus nisl tincidunt eget. Aliquam
                        id diam maecenas ultricies mi eget mauris.</p>
                    <p><strong>L</strong>orem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt tellus in metus vulputate eu scelerisque
                        felis. Vel pretium lectus quam id leo. id faucibus nisl tincidunt eget.
                        Aliquam id diam maecenas ultricies mi eget mauris. ut labore et dolore magna
                        aliqua. Venenatis.</p>
                </div>
                <div className="tab-pane" id="tab-3">
                    <div className="policies-area">
                        <h3 className="title">Shipping Policy</h3>
                        <p><strong>L</strong>orem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt arcu cursus. Sagittis id consectetur
                            purus
                            ut. Tellus rutrum tellus pelle.</p>
                    </div>
                    <div className="policies-area">
                        <h3 className="title">Refund Policy</h3>
                        <p><strong>L</strong>orem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt arcu cursus. Sagittis id consectetur
                            purus ut. Tellus rutrum tellus pelle.</p>
                    </div>
                    <div className="policies-area">
                        <h3 className="title text-left">Cancellation / Return / Exchange Policy</h3>
                        <p><strong>L</strong>orem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt arcu cursus. Sagittis id consectetur
                            purus ut. Tellus rutrum tellus pelle.</p>
                    </div>
                </div>
                <div className="tab-pane" id="tab-4">
                    <div className="review-area">
                        <h3 className="title font-weight-bold mb-5">Write A Review</h3>
                        <input name="review" type="text" className="form-control"
                            placeholder="your review"/>
                        <button className="btn btn-rounded">Add Your Review</button>
                    </div>
                   
                    <div className="review-area">
                        <h3 className="title font-weight-bold mb-5">Reviews</h3>
                        <div className="reviewers d-flex align-items-center flex-wrap mb-7">
                            <div className="reviewers-picture d-flex mr-2">
                                <figure>
                                    <Image src="/images/vendor/wcfm/avatar.png" alt="Avatar"
                                        width={113} height={112} />
                                </figure>
                                <figure>
                                    <Image src="/images/vendor/wcfm/avatar.png" alt="Avatar"
                                        width={113} height={112} />
                                </figure>
                                <figure>
                                    <Image src="/images/vendor/wcfm/avatar.png" alt="Avatar"
                                        width={113} height={112} />
                                </figure>
                            </div>
                            <div className="reviewer-name">
                                <a href="#" className="font-weight-bold mr-1">John Doe</a>has reviewed
                                this store
                            </div>
                        </div>
                       
                        <div className="review-ratings">
                            <div className="review-ratings-left mr-auto">
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{ width:"100%" }} ></span>
                                    </div>
                                    <label>5.0 Feature</label>
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{ width:"100%" }} ></span>
                                    </div>
                                    <label>5.0 Varity</label>
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{ width:"100%" }} ></span>
                                    </div>
                                    <label>5.0 Flexibility</label>
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{ width:"100%" }} ></span>
                                    </div>
                                    <label>5.0 Delivery</label>
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{ width:"100%" }} ></span>
                                    </div>
                                    <label>5.0 Support</label>
                                </div>
                            </div>
                            
                            <div className="review-ratings-right">
                                <div className="average-rating">5.0<sub>/5</sub></div>
                                <div className="ratings-container">
                                    <div className="ratings-full mr-0">
                                        <span className="ratings" style={{ width:"100%" }} ></span>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        
                        <div className="user-wrap">
                            <div className="user-photo">
                                <figure>
                                    <Image src="/images/vendor/wcfm/avatar.png" alt="Avatar"
                                        width={113} height={112} />
                                </figure>
                                <div className="rated text-center">
                                    <label>Rated</label>
                                    <span className="score">5.0</span>
                                </div>
                            </div>
                            
                            <div className="user-info">
                                <h4 className="user-name">John Doe</h4>
                                <div className="user-date mb-7">
                                    <span>1 Reviews</span>
                                    <span>April 1, 2021 12:12 Pm</span>
                                </div>
                                <p>Diam in arcu cursus euismod quis. Eget sit amet tellusvitae
                                    sapien pellentesque habitant morbi tristique senectus et.
                                    Cras adipiscing enim ermentum et sollicitudin ac orci phasellus.
                                </p>
                            </div>
                           
                            <div className="review-ratings">
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{ width:"100%" }} ></span>
                                    </div>
                                    <label>5.0 Feature</label>
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{ width:"100%" }} ></span>
                                    </div>
                                    <label>5.0 Varity</label>
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{ width:"100%" }} ></span>
                                    </div>
                                    <label>5.0 Flexibility</label>
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{ width:"100%" }} ></span>
                                    </div>
                                    <label>5.0 Delivery</label>
                                </div>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{ width:"100%" }} ></span>
                                    </div>
                                    <label>5.0 Support</label>
                                </div>
                            </div>
                        </div>
                       
                    </div>
        
                </div>
            </div>
        </div>
   
  </div>   
  );
};

export default MainContent;


