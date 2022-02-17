import React from "react";

const Container = () => {
  return (
    <div>
        <div className="container few-fees mt-10 mb-2 mb-lg-10 pt-2 pt-lg-9">
            <h4 className="text-center text-primary text-capitalize font-weight-bold ls-25">Only Few Fees</h4>
            <h2 className="title title-center mb-3">All is secured and Transparent</h2>
            <p className="text-center mb-2 mb-lg-10">Nunc id cursus metus aliquam. Libero id faucibus nisl tincidunt eget.</p>
            <div className="row">
                <div className="col-sm-6 listing-fee">
                    <div className="counter text-center">
                        <span>$</span>
                        <span className="count-to" data-to="0">0</span>
                        <h4>Listing Fee</h4>
                        <p>Diam maecenas ultricies mi eget mauris
                            Nibh tellus molestie nunc non</p>
                    </div>
                </div>
                <div className="col-sm-6 final-fee">
                    <div className="counter text-center">
                        <span className="count-to" data-to="5">0</span>
                        <span>%</span>
                        <h4>Final Value Fee</h4>
                        <p>Diam maecenas ultricies mi eget mauris
                            Nibh tellus molestie nunc non</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Container;
