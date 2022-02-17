import React from "react";

const Pagination = () => {
  return (
  <div>
    <div className="toolbox toolbox-pagination justify-content-between">
        <p className="showing-info mb-2 mb-sm-0">
            Showing<span>1-12 of 60</span>Products
        </p>
        <ul className="pagination">
            <li className="prev disabled">
                <a href="#" aria-label="Previous" aria-disabled="true">
                    <i className="w-icon-long-arrow-left"></i>Prev
                </a>
            </li>
            <li className="page-item active">
                <a className="page-link" href="#">1</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">2</a>
            </li>
            <li className="next">
                <a href="#" aria-label="Next">
                    Next<i className="w-icon-long-arrow-right"></i>
                </a>
            </li>
        </ul>
    </div>
  </div>  
  );
};

export default Pagination;
