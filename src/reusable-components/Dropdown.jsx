import { NavLink } from "../components/NavLink";
import "./dropdown.css";
import arrow from "../reusable-components/media/dropdownArrow.svg";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Dropdown({
  items,
  defaultDropdownValue,
  selectedValue,
  setSelectedValue,
  active,
  setActive,
}) {
  const dropdownRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownani = {
    initial: { top: "10vw", opacity: 0 },
    animate: { top: "220%", opacity: 1 },
    exit: { top: "10vw", opacity: 0 },
    transition: { type: "spring", stiffness: 50 },
  };
  useEffect(() => {
    if (showDropdown) {
      function handleDropdown(event) {
        if (event.target !== dropdownRef.current) setShowDropdown(false);
      }
      document.addEventListener("click", handleDropdown);
      return () => {
        document.removeEventListener("click", handleDropdown);
      };
    }
  });

  return (
    <div className="comp-dropdown">
      <NavLink
        ref={dropdownRef}
        style={{
          color: `${
            active === "active-color" ? "var(--text-hover-color)" : " "
          }`,
        }}
        onClick={() => {
          setShowDropdown(!showDropdown);
          setActive("active-color");
        }}
        className="comp-dropdown-heading"
      >
        {selectedValue ?? defaultDropdownValue}
        <img src={arrow} alt="" className="comp-dropdown-arrow" />
      </NavLink>

      <AnimatePresence>
        {showDropdown && (
          <motion.dialog {...dropdownani} className="comp-dropdown-menu">
            {items.map((item) => (
              <NavLink
                key={item.key}
                className="comp-dropdown-item"
                to={item.route}
                onClick={() => {
                  setActive("active-color");
                  setSelectedValue(item.value);
                  setShowDropdown(false);
                }}
              >
                {item.value}
              </NavLink>
            ))}
          </motion.dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
