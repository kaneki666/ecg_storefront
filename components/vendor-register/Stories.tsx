import React from "react";
import StoriesCol1 from "./StoriesCol1";

const Stories = () => {
  return (
    <div>
        <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
                <StoriesCol1/>
            </div>
            <div className="col-lg-8">
                <div className="swiper">
                    <div className="swiper-container swiper-theme" data-swiper-options="{
                        'spaceBetween': 20,
                        'slidesPerView': 1,
                        'loop': true,
                        'breakpoints': {
                            '576': {
                                'slidesPerView': 2
                            }
                        }
                    }">
                        <div className="swiper-wrapper row cols-sm-2">
                            <div className="swiper-slide testimonial-wrap">
                                <div className="testimonial testimonial-centered testimonial-boxed bg-white br-sm">
                                    <div className="testimonial-info">
                                        <figure className="testimonial-author-thumbnail">
                                            <img src="images/agents/1-100x100.png" alt="Testimonial" width="100"
                                                height="100" />
                                        </figure>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{ width:"100%" }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <blockquote>
                                        Lorem ipsum dolor sit amet, consectetuerd
                                        do Pellentesque aliquet nib Nullamer
                                        mnequtesq nibhue aliquet urnaIn mattis...
                                    </blockquote>
                                    <cite className="ls-25">
                                        Victoria Ventura<span>Investor</span>
                                    </cite>
                                </div>
                            </div>
                            <div className="swiper-slide testimonial-wrap">
                                <div className="testimonial testimonial-centered testimonial-boxed bg-white br-sm">
                                    <div className="testimonial-info">
                                        <figure className="testimonial-author-thumbnail">
                                            <img src="images/agents/2-100x100.png" alt="Testimonial" width="100"
                                                height="100" />
                                        </figure>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{ width:"100%" }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <blockquote>
                                        Lorem ipsum dolor sit amet, consectetuerd
                                        do Pellentesque aliquet nib Nullamer
                                        mnequtesq nibhue aliquet urnaIn mattis...
                                    </blockquote>
                                    <cite className="ls-25">
                                        Henry Harry<span>Investor</span>
                                    </cite>
                                </div>
                            </div>
                            <div className="swiper-slide testimonial-wrap">
                                <div className="testimonial testimonial-centered testimonial-boxed bg-white br-sm">
                                    <div className=" testimonial-info">
                                        <figure className="testimonial-author-thumbnail">
                                            <img src="images/agents/3-100x100.png" alt="Testimonial" width="100"
                                                height="100" />
                                        </figure>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{ width:"100%" }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <blockquote>
                                        Lorem ipsum dolor sit amet, consectetuerd
                                        do Pellentesque aliquet nib Nullamer
                                        mnequtesq nibhue aliquet urnaIn mattis...
                                    </blockquote>
                                    <cite className="ls-25">
                                        Anna Miranda<span>Investor</span>
                                    </cite>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
  );
};

export default Stories;
