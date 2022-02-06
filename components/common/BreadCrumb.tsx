import React from "react";
import { BreadCrumbProps } from "../../utils/types";

const BreadCrumb = ({ title, hrefTitle, toPage }: BreadCrumbProps) => {
  return (
    <div>
      <nav className="breadcrumb-nav">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href={toPage}>{hrefTitle}</a>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default BreadCrumb;
