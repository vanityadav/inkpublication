import React from "react";

export default function Content({ pagedJournals, handleViewDetails }) {
  return (
    <div className="journals-page-box-all">
      {pagedJournals.map((journal) => (
        <div key={journal._id} className="journal-page-box">
          <p className="journal-title"> {journal.title}</p>
          <p>ISSN :{journal.issn}</p>
          <button
            className="journals-view-details-button"
            onClick={() => handleViewDetails(journal._id)}
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}
