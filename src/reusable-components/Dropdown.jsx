import { NavLink } from "../components/NavLink";
import "./dropdown.css";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Dropdown({
  items,
  defaultDropdownValue,
  selectedValue,
  setSelectedValue,
}) {
  const dropdownRef = useRef();
  const [active, setActive] = useState();

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
      >
        {selectedValue ?? defaultDropdownValue}
      </NavLink>

      <AnimatePresence>
        {showDropdown && (
          <motion.div {...dropdownani} className="comp-dropdown-menu">
            {items.map((item) => (
              <NavLink
                key={item.key}
                className="comp-dropdown-item"
                to={`/${item.route}`}
                onClick={() => {
                  setActive("active-color");
                  setSelectedValue(item.value);
                  setShowDropdown(false);
                }}
              >
                {item.value}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}