import "../Journals.css";
import React from "react";
import Dropdown from "../reusable-components/Dropdown";

export default function Journals({ setSelectedJournal, selectedJournal }) {
  const paged = 0;
  const total = 0;
  const journals = 0;
  const categoryName = "Journal Name";
  const items = [
    { key: "journals-all", value: "All Journals" },
    { key: "journals-gs", value: "Google Scholar" },
    { key: "journals-wos", value: "Web Of Science" },
    { key: "journals-sp", value: "Scopus Journals" },
    { key: "journals-sd", value: "Scopus Discontinued Journals" },
  ];
  return (
    <>
      <div className="journals-page">
        <Dropdown defaultDropdownValue={"hello world"} items={items} />
        <div className="journal-header">
          <div className="journal-category-dropdown-all">
            {selectedJournal ?? "ALl Journals"}
          </div>
          <div className="journal-search-by"></div>
          <div className="journal-search-field">SearchBar</div>
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
