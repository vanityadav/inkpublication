import { useState } from "react";
import Dropdown from "../Dropdown";

export default function CompHeader({
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
}) {
  const [active, setActive] = useState();

  return (
    <div className="comp-page-header">
      <div className="comp-page-dropdown-menu">
        <Dropdown
          items={filterArray}
          defaultDropdownValue={defaultFilterValue}
          selectedValue={selectedJournal}
          setSelectedValue={setSelectedJournal}
          active={active}
          setActive={setActive}
        />
      </div>

      <div className="comp-page-search-field">
        <input
          onChange={handleSearch}
          type="text"
          placeholder={searchPlaceholder}
        />
        <div className="comp-page-search-by">
          <Dropdown
            items={searchArray}
            defaultDropdownValue={defaultSearchFilterValue}
            selectedValue={selectedSearchFilter}
            setSelectedValue={setSelectedSearchFilter}
            active={active}
            setActive={setActive}
          />
        </div>
      </div>
    </div>
  );
}
