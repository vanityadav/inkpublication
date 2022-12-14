import "../Journals.css";
import { useEffect, useState } from "react";
import Dropdown from "../reusable-components/Dropdown";
import { journals as dbJournals } from "../services/data";
import _ from "lodash";
import next from "../media/next.svg";
import previous from "../media/previous.svg";
import { NavLink } from "./NavLink";

export default function Journals({ setSelectedJournal, selectedJournal }) {
  const itemsPerPage = 4;
  const [active, setActive] = useState();
  const [newJournals, setJournals] = useState(dbJournals);
  const [pagedJournals, setPagedJournals] = useState(newJournals);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesArray, setPagesArray] = useState([]);
  const [numberOfResults, setResults] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [nextButton, setNextButton] = useState(true);
  const [previousButton, setPreviousButton] = useState(true);
  const [pagination, setPagination] = useState(true);
  const [searchInfo, setSearchInfo] = useState(false);
  const [dialogJournal, setDialogJournal] = useState();
  const [normalDialog, setNormalDialog] = useState(true);
  const [nextbuttonStatus, setNextButtonStatus] = useState("");
  const [prevbuttonStatus, setPrevButtonStatus] = useState("");
  const [nextNavigateTo, setNextNavigateTo] = useState("Journal");
  const [prevNavigateTo, setPrevNavigateTo] = useState("Journal");
  const [dialogJournalIndex, setDialogJournalIndex] = useState();
  const [currentDialogBox, setCurrentDialogBox] = useState();
  const [modalMouseOut, setModalMouseOut] = useState();
  const [selectedFilter, setSelectedFilter] = useState("Title");

  const categoryFilters = [
    { key: "all", value: "All Journals" },
    { key: "ucg", value: "UCG" },
    { key: "gs", value: "Google Scholar" },
    { key: "wos", value: "Web Of Science" },
    { key: "sp", value: "Scopus Journals" },
    { key: "spq1", value: "Scopus Journals Q1" },
    { key: "spq2", value: "Scopus Journals Q2" },
    { key: "spq3", value: "Scopus Journals Q3" },
    { key: "spq4", value: "Scopus Journals Q4" },
    { key: "sd", value: "Scopus Discontinued Journals" },
  ];
  const searchFilters = [
    { key: "title", value: "Title" },
    { key: "issn", value: "ISSN" },
    { key: "publisher", value: "Publisher" },
    { key: "subjectArea", value: "Subject Area" },
  ];

  useEffect(() => {
    setSearchInfo(false);
    if (selectedJournal) {
      let category = categoryFilters.filter(
        (item) => item.value === selectedJournal
      )[0].key;
      if (category === "all") {
        setJournals(dbJournals);
        setTotalResults(dbJournals.length);
        console.log("Use Effect All Category", dbJournals);
      } else {
        let categorizedJournals = dbJournals.filter((journal) =>
          journal.category.includes(category)
        );
        setJournals(categorizedJournals);
        setTotalResults(categorizedJournals.length);
        console.log(
          "Use Effect By Category",
          categorizedJournals,
          categorizedJournals.length
        );
      }
    }
  }, [selectedJournal]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const newPagedJournals = _(newJournals)
      .slice(startIndex)
      .take(itemsPerPage)
      .value();
    setPagedJournals(newPagedJournals);
    setResults(newPagedJournals.length);
    console.log(
      "Use Effect newJournals Changed",
      newPagedJournals,
      newPagedJournals.length
    );
    setCurrentPage(1);
    if (newJournals.length <= itemsPerPage) setPagination(false);
    else setPagination(true);
    let pageSize = Math.ceil(newJournals.length / itemsPerPage);
    if (pageSize === 1) {
      setPagesArray([]);
      console.log("Use Effect 0 Pages 1st Page", pageSize);
    } else {
      const totalPagesArray = _.range(1, pageSize + 1);
      setPagesArray(totalPagesArray);
      console.log("Use Effect Total Pages Array", totalPagesArray);
    }
  }, [newJournals]);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
    console.log("Page Number Handled", pageNumber);
  }

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const newPagedJournals = _(newJournals)
      .slice(startIndex)
      .take(itemsPerPage)
      .value();
    setPagedJournals(newPagedJournals);
    setResults(newPagedJournals.length);
    currentPage === 1 ? setPreviousButton(false) : setPreviousButton(true);
    currentPage === pagesArray.length
      ? setNextButton(false)
      : setNextButton(true);
    console.log(
      "Use Effect CurrentPage Changed",
      newPagedJournals,
      newPagedJournals.length,
      "current page",
      currentPage,
      typeof currentPage,
      startIndex,
      typeof startIndex
    );
  }, [currentPage]);

  function handleNext() {
    if (currentPage < pagesArray.length)
      setCurrentPage((previous) => previous + 1);
  }
  function handlePrevious() {
    if (currentPage > 1) setCurrentPage((previous) => previous - 1);
  }

  function handleSearch({ target }) {
    let userFilter = searchFilters.filter(
      (sfilter) => sfilter.value === selectedFilter
    )[0].key;
    let query = target.value;
    if (query !== "") {
      const filteredJournals = dbJournals.filter((journal) =>
        journal[`${userFilter}`]?.toLowerCase().includes(query)
      );
      setJournals(filteredJournals);
      setSearchInfo(true);
    }
    if (query === "") setSearchInfo(false);
  }
  function handleViewDetails({ target }) {
    setCurrentDialogBox(target.nextElementSibling);
    let currentIndex = Number(target.parentElement.id);
    target.nextElementSibling.showModal();

    setNormalDialog(true);
    setDialogJournalIndex(currentIndex);

    console.log("Dialog Is ON");
    console.log("View Button Clicked", target.nextElementSibling);
    console.log("View Button Clicked", target.parentElement.id);
  }

  function handleDialogClose() {
    currentDialogBox.close();
    setModalMouseOut(false);
    setNormalDialog(true);
  }

  useEffect(() => {
    console.log("current dialog changed");
    setModalMouseOut(true);
  }, [currentDialogBox]);

  useEffect(() => {
    if (modalMouseOut) {
      document.addEventListener("click", handleClick);
      function handleClick(event) {
        console.log("Clicked", event.target, currentDialogBox);
        if (event.target !== currentDialogBox) console.log("not Equal");
      }
    }
  });

  function handleNextJournal() {
    if (dialogJournalIndex < pagedJournals.length - 1) {
      setNormalDialog(false);
      setDialogJournalIndex((prev) => prev + 1);
    } else handleNext();
  }
  function handlePreviousJournal() {
    if (dialogJournalIndex > 0) {
      setNormalDialog(false);
      setDialogJournalIndex((prev) => prev - 1);
    } else handlePrevious();
  }
  useEffect(() => {
    setDialogJournal(pagedJournals[dialogJournalIndex]);
  }, [normalDialog, dialogJournalIndex]);

  function checkButtonStatus() {
    currentPage === pagesArray.length &&
    dialogJournalIndex === pagedJournals.length - 1
      ? setNextButtonStatus("next-disabled")
      : setNextButtonStatus("");
    dialogJournalIndex === 0 && currentPage === 1
      ? setPrevButtonStatus("prev-disabled")
      : setPrevButtonStatus("");
    console.log(dialogJournalIndex, pagedJournals.length - 1);
  }

  useEffect(() => {
    checkButtonStatus();
    if (dialogJournalIndex === 0) setPrevNavigateTo("Page");
    else setPrevNavigateTo("Journal");

    if (dialogJournalIndex === pagedJournals.length - 1)
      setNextNavigateTo("Page");
    else setNextNavigateTo("Journal");

    console.log(nextNavigateTo);
  }, [pagedJournals, dialogJournalIndex, dialogJournal]);

  return (
    <>
      <div className="journals-page">
        <div className="journal-header">
          <div className="journal-dropdown-menu">
            <Dropdown
              items={categoryFilters}
              defaultDropdownValue={"All Journals"}
              selectedValue={selectedJournal}
              setSelectedValue={setSelectedJournal}
              active={active}
              setActive={setActive}
            />
          </div>

          <div className="journal-search-field">
            <input
              onChange={handleSearch}
              type="text"
              placeholder={` Search Journals by ${selectedFilter} `}
            />
            <div className="journal-search-by">
              <Dropdown
                items={searchFilters}
                defaultDropdownValue={"Title"}
                selectedValue={selectedFilter}
                setSelectedValue={setSelectedFilter}
                active={active}
                setActive={setActive}
              />
            </div>
          </div>
        </div>

        <div className="journals-page-box-all">
          {pagedJournals.map((journal) => (
            <div
              id={pagedJournals.indexOf(journal)}
              key={journal._id}
              className="journal-page-box"
            >
              <p className="journal-title"> {journal.title}</p>
              <p>ISSN :{journal.issn}</p>
              <button
                className="journals-view-details-button"
                onClick={handleViewDetails}
              >
                View Details
              </button>
              <dialog className="journal-popup">
                {normalDialog && (
                  <>
                    <div className="dialog-journal-info">
                      <p className="journal-title"> {journal.title}</p>
                      <p>ISSN :{journal.issn}</p>
                      <p>Subject Area: {journal.subjectArea}</p>
                    </div>
                    <div className="journal-dialog-buttons-grp">
                      <button
                        className={
                          prevbuttonStatus === "prev-disabled"
                            ? "button-disabled"
                            : "journal-dialog-buttons"
                        }
                        onClick={handlePreviousJournal}
                      >
                        Previous {prevNavigateTo}
                      </button>
                      <button
                        className="journal-dialog-buttons"
                        onClick={handleDialogClose}
                      >
                        Close
                      </button>
                      <button
                        className={
                          nextbuttonStatus === "next-disabled"
                            ? "button-disabled"
                            : "journal-dialog-buttons"
                        }
                        onClick={handleNextJournal}
                      >
                        Next {nextNavigateTo}
                      </button>
                    </div>
                  </>
                )}
                {!normalDialog && (
                  <>
                    <div className="dialog-journal-info">
                      <p className="journal-title"> {dialogJournal.title}</p>
                      <p>ISSN :{dialogJournal.issn}</p>
                      <p>Subject Area: {dialogJournal.subjectArea}</p>
                    </div>
                    <div className="journal-dialog-buttons-grp">
                      <button
                        className={
                          prevbuttonStatus === "prev-disabled"
                            ? "button-disabled"
                            : "journal-dialog-buttons"
                        }
                        onClick={handlePreviousJournal}
                      >
                        Previous {prevNavigateTo}
                      </button>
                      <button
                        className="journal-dialog-buttons"
                        onClick={handleDialogClose}
                      >
                        Close
                      </button>
                      <button
                        className={
                          nextbuttonStatus === "next-disabled"
                            ? "button-disabled"
                            : "journal-dialog-buttons"
                        }
                        onClick={handleNextJournal}
                      >
                        Next {nextNavigateTo}
                      </button>
                    </div>
                  </>
                )}
              </dialog>
            </div>
          ))}
        </div>
        <div className="result-info">
          {!searchInfo && (
            <span>
              Showing {numberOfResults} results of {totalResults} in{" "}
              {selectedJournal ?? "All Journals"}
            </span>
          )}
          {searchInfo && (
            <span>{numberOfResults} results found in "All Journals"</span>
          )}
        </div>
        {pagination && (
          <div className="pagination-box">
            <img
              src={previous}
              alt="navigation"
              onClick={handlePrevious}
              className={previousButton ? "nav-button" : "nav-disabled"}
            />

            {pagesArray.map((pageNumber) => (
              <NavLink
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
              >
                <div
                  className={
                    pageNumber == currentPage
                      ? "active-page"
                      : "pagination-number"
                  }
                >
                  {pageNumber}
                </div>
              </NavLink>
            ))}

            <img
              src={next}
              alt="navigation"
              onClick={handleNext}
              className={nextButton ? "nav-button" : "nav-disabled"}
            />
          </div>
        )}
      </div>
    </>
  );
}
