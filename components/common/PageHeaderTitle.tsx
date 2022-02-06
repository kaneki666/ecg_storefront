import React from "react";

const PageHeaderTitle = ({ title }: { title: string }) => {
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="page-title mb-0">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeaderTitle;
