import "../Journals.css";
import React from "react";

export default function Journals() {
  const paged = 0;
  const total = 0;
  const journals = 0;
  const categoryName = "Journal Name";
  return (
    <>
      <div className="journals-page">
        <div className="journal-header">
          <div>Journals</div>
          <div>Filter</div>
          <div>SearchBar</div>
        </div>
        <div>4 Journals</div>
        <div>
          <span>
            Showing {paged - journals} results of {total - journals} in{" "}
            {categoryName}
          </span>
        </div>
        <div>Pagination</div>
      </div>
    </>
  );
}
