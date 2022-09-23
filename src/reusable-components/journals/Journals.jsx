import _ from "lodash";
import "./Journals.css";
import Dialog from "./Dialog";
import Content from "./Content";
import CompHeader from "./CompHeader";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import { journals as dbJournals } from "../../services/data";
import ResultInfo from "./ResultInfo";

export default function Journals({ setSelectedJournal, selectedJournal }) {
  const itemsPerPage = 4;
  const defaultSearchFilterValue = "Title";
  const defaultFilterValue = "All Journals";
  const [selectedSearchFilter, setSelectedSearchFilter] = useState("Title");
  const [receivedJournals, setReceivedJournals] = useState(dbJournals);
  const [pagedJournals, setPagedJournals] = useState(receivedJournals);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogJournal, setDialogJournal] = useState();
  const [currentIndex, setCurrentIndex] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [emptyQuery, setEmptyQuery] = useState();
  const [pagesArray, setPagesArray] = useState([]);
  const [numberOfResults, setResults] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [searchInfo, setSearchInfo] = useState(false);
  const [prevbuttonStatus, setPrevButtonStatus] = useState(false);
  const [nextbuttonStatus, setNextButtonStatus] = useState(false);

  const searchPlaceholder = `Search Journals by ${selectedSearchFilter}`;

  const filterArray = [
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

  const searchArray = [
    { key: "title", value: "Title" },
    { key: "issn", value: "ISSN" },
    { key: "publisher", value: "Publisher" },
    { key: "subjectArea", value: "Subject Area" },
  ];

  const compHeader = {
    selectedSearchFilter,
    setSelectedSearchFilter,
    filterArray,
    searchArray,
    defaultSearchFilterValue,
    defaultFilterValue,
    searchPlaceholder,
    selectedJournal,
    setSelectedJournal,
    handleSearch,
  };

  useEffect(() => {
    setSearchInfo(false);
    if (selectedJournal) {
      let category = filterArray.filter(
        (item) => item.value === selectedJournal
      )[0].key;
      if (category === "all") {
        setReceivedJournals(dbJournals);
        setTotalResults(dbJournals.length);
      } else {
        let categorizedJournals = dbJournals.filter((journal) =>
          journal.category.includes(category)
        );
        setReceivedJournals(categorizedJournals);
        setTotalResults(categorizedJournals.length);
      }
    }
    console.log("Use Effect Set New Categorized Journals");
  }, [selectedJournal, emptyQuery]);

  useEffect(() => {
    let range = Math.ceil(receivedJournals.length / itemsPerPage);
    let pagearray = _.range(1, range + 1, 1);
    setPagesArray(pagearray);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const newReceivedJournals = _(receivedJournals)
      .slice(startIndex)
      .take(itemsPerPage)
      .value();
    setPagedJournals(newReceivedJournals);
    setCurrentPage(1);
    setResults(newReceivedJournals.length);

    console.log("Use Effect Received Journals");
  }, [receivedJournals]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const newPagedJournals = _(receivedJournals)
      .slice(startIndex)
      .take(itemsPerPage)
      .value();
    setPagedJournals(newPagedJournals);
    setResults(newPagedJournals.length);

    console.log("Use Effect Calculated New Paged Journals On Page Change");
  }, [currentPage]);

  function handleSearch({ target }) {
    let userFilter = searchArray.filter(
      (sfilter) => sfilter.value === selectedSearchFilter
    )[0].key;
    let query = target.value;
    console.log(query, selectedJournal);
    if (query !== "") {
      const filteredJournals = dbJournals.filter((journal) =>
        journal[`${userFilter}`]?.toLowerCase().includes(query)
      );
      setSearchInfo(true);
      setReceivedJournals(filteredJournals);
      setEmptyQuery(false);
      console.log("Sets New Received Journals");
    } else {
      setEmptyQuery(true);
      setSearchInfo(false);
    }
  }
  function handleViewDetails(jID) {
    let dJournal = pagedJournals.filter((journal) => {
      if (journal._id === jID) return true;
    })[0];
    let arrayIndex = pagedJournals.findIndex((journal) => journal._id === jID);
    setCurrentIndex(arrayIndex);
    setOpenDialog(true);
    setDialogJournal(dJournal);

    if (
      arrayIndex === pagedJournals.length - 1 &&
      currentPage < pagesArray.length + 1
    ) {
      setNextButtonStatus(false);
    } else setNextButtonStatus(true);

    if (arrayIndex === 0 && currentPage > 0) {
      setPrevButtonStatus(false);
    } else setPrevButtonStatus(true);
  }

  function handleNext() {
    if (currentIndex < pagedJournals.length) {
      let nextIndex = currentIndex + 1;
      if (
        nextIndex === pagedJournals.length - 1 &&
        currentPage < pagesArray.length + 1
      )
        setNextButtonStatus(false);
      if (
        nextIndex === pagedJournals.length &&
        currentPage < pagesArray.length
      ) {
        setCurrentPage((prev) => prev + 1);
        setOpenDialog(false);
        setNextButtonStatus(false);
      }

      if (nextIndex > 0) setPrevButtonStatus(true);
      if (nextIndex < pagedJournals.length) {
        setCurrentIndex(nextIndex);

        setDialogJournal(pagedJournals[nextIndex]);
      }
    }
  }

  function handlePrevious() {
    if (currentIndex > -1) {
      let prevIndex = currentIndex - 1;
      if (prevIndex === 0 && currentPage > 0) setPrevButtonStatus(false);
      if (prevIndex === -1 && currentPage > 1) {
        setCurrentPage((prev) => prev - 1);
        setOpenDialog(false);
        setPrevButtonStatus(false);
      }
      if (prevIndex >= 0) setNextButtonStatus(true);
      if (prevIndex >= 0) {
        setCurrentIndex(prevIndex);

        setDialogJournal(pagedJournals[prevIndex]);
      }
    }
  }
  const pagesProps = {
    setCurrentPage,
    currentPage,
    pagesArray,
  };
  const resultProps = {
    selectedJournal,
    numberOfResults,
    totalResults,
    searchInfo,
  };
  return (
    <div className="journals-page">
      {console.log("Component Rendered")}
      <CompHeader {...compHeader} />
      <Content
        pagedJournals={pagedJournals}
        handleViewDetails={handleViewDetails}
      />
      {openDialog && (
        <Dialog
          journal={dialogJournal}
          showModal={openDialog}
          setOpenDialog={setOpenDialog}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          prevbuttonStatus={prevbuttonStatus}
          nextbuttonStatus={nextbuttonStatus}
        />
      )}
      <ResultInfo {...resultProps} />
      {pagesArray.length > 1 && <Pagination {...pagesProps} />}
    </div>
  );
}
