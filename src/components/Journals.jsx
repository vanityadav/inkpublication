import "../Journals.css";
import { useEffect, useState } from "react";
import Dropdown from "../reusable-components/Dropdown";
import { journals } from "../services/data";

export default function Journals({ setSelectedJournal, selectedJournal }) {
  const [newJournals, setJournals] = useState(journals);
  const [pagedJournals, setPagedJournals] = useState(newJournals);
  const [active, setActive] = useState();
  const [selectedFilter, setSelectedFilter] = useState("Title");

  const items = [
    { key: "all", value: "All Journals" },
    { key: "ucg", value: "UCG" },
    { key: "gs", value: "Google Scholar" },
    { key: "wos", value: "Web Of Science" },
    { key: "sp", value: "Scopus Journals All" },
    { key: "spq1", value: "Scopus Journals Q1" },
    { key: "spq2", value: "Scopus Journals Q2" },
    { key: "spq3", value: "Scopus Journals Q3" },
    { key: "spq4", value: "Scopus Journals Q4" },
    { key: "sd", value: "Scopus Discontinued Journals" },
  ];
  const searchby = [
    { key: "title", value: "Title" },
    { key: "issn", value: "ISSN" },
    { key: "publisher", value: "Publisher" },
    { key: "subject", value: "Subject Area" },
  ];

  function handleSearch({ target }) {
    let userFilter = selectedFilter.toLowerCase();
    const filteredJournals = journals.filter((journal) =>
      journal[`${userFilter}`]?.toLowerCase().includes(target.value)
    );
    setJournals(filteredJournals);
  }

  useEffect(() => {
    if (selectedJournal) {
      let category = items.filter((item) => item.value === selectedJournal)[0]
        .key;
      if (category === "all") setJournals(journals);
      else {
        let categorizedJournals = journals.filter((journal) =>
          journal.category.includes(category)
        );
        setJournals(categorizedJournals);
      }
    }
  }, [selectedJournal]);

  // useEffect(() => {
  //   if (selectedJournal) {
  //     let key = items.filter((item) => item.value === selectedJournal);
  //     let categorizedJournals = journals.filter((journal) =>
  //       journal.category.includes(key[0].key)
  //     );
  //     setJournals(categorizedJournals);
  //   }
  // }, [newJournals]);

  return (
    <>
      <div className="journals-page">
        <div className="journal-header">
          <div className="journal-dropdown-menu">
            <Dropdown
              items={items}
              defaultDropdownValue={"All Journals"}
              selectedValue={selectedJournal}
              setSelectedValue={setSelectedJournal}
              active={active}
              setActive={setActive}
            />
          </div>
          <div className="journal-search-by">
            <Dropdown
              items={searchby}
              defaultDropdownValue={"Title"}
              selectedValue={selectedFilter}
              setSelectedValue={setSelectedFilter}
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
          </div>
        </div>

        <div className="journals-page-box-all">
          {newJournals.map((journal) => (
            <div key={journal._id} className="journal-page-box">
              <p> {journal.title}</p>
              <p>{journal.issn}</p>
            </div>
          ))}
        </div>
        <div>
          <span>
            Showing {"all"} results of {newJournals.length} in{" "}
            {selectedJournal ?? "All Journals"}
          </span>
        </div>
        <div>Pagination</div>
      </div>
    </>
  );
}
