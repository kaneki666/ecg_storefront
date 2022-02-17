import React from "react";

const Footer = () => {
  return (
    <div>
        <div className="banner parallax" data-parallax-options="{'speed': 10, 'parallaxHeight': '200%', 'offset': -99}"
            data-image-src="images/pages/become/3.jpg" //style="background-color: #929294;" lack of back-ground color you cant see the footer in frontend properly so i change the text color white to black  
            >
            <div className="container">
                <div className="banner-content text-center">
                    <h2 className="title title-center text-black font-weight-bold">Let’s talk about how we can make
                            brands work for you</h2>
                    <a href="#" className="btn btn-black btn-outline btn-rounded ls-25">Register Now</a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
