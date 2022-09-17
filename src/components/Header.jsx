import React, { useState, useRef } from "react";
import light from "../media/light.svg";
import dark from "../media/dark.svg";
import searchIcon from "../media/search.svg";
import closeIcon from "../media/close.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { NavLink } from "./NavLink";
import Dropdown from "../reusable-components/Dropdown";

export default function Header({
  theme,
  handleTheme,
  selectedJournal,
  setSelectedJournal,
}) {
  const [header, setHeader] = useState();
  const [sideHeader, setSideHeader] = useState();

  const items = [
    { key: "all", route: "journals-all", value: "All Journals" },
    { key: "gs", route: "journals-gs", value: "Google Scholar" },
    { key: "wos", route: "journals-wos", value: "Web Of Science" },
    { key: "sp", route: "journals-sp", value: "Scopus Journals" },
    { key: "sd", route: "journals-sd", value: "Scopus Discontinued Journals" },
  ];
  const animation = {
    initial: { y: "-10vw", opacity: 0 },
    animate: { y: "0", opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0 } },
    transition: { type: "spring", stiffness: 50 },
  };

  const sideanimation = {
    initial: { x: "-10vw", opacity: 0 },
    animate: { x: "0", opacity: 1 },
    exit: { x: "-10vw", opacity: 0 },
    transition: { type: "spring", stiffness: 50 },
  };
  const [search, setSearchBar] = useState(false);
  function handleSearch() {
    setSearchBar(!search);
  }

  useEffect(() => {
    if (window.innerHeight > window.innerWidth) setHeader(true);
    else setHeader(false);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerHeight > window.innerWidth) setHeader(true);
    else setHeader(false);
  };

  function handelHeader() {
    setSideHeader(sideHeader === true ? false : true);
  }
  const [active, setActive] = useState();
  return (
    <>
      <AnimatePresence>
        <motion.div
          {...sideanimation}
          className={sideHeader ? "mheader mani" : "mheader"}
          onClick={handelHeader}
        >
          <div className="icon-header">
            <div
              className={
                sideHeader ? "upper-line line-up" : "upper-line open-up"
              }
            ></div>
            <div
              className={
                sideHeader ? "lower-line line-down" : "lower-line open-down"
              }
            ></div>
          </div>
          <AnimatePresence>
            {sideHeader && (
              <motion.div {...sideanimation} className="side-header">
                <p>I Publication</p>
                <p>Journals</p>
                <p>Publication</p>
                <p>About Us</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
      <header>
        <motion.div
          {...animation}
          className={!header ? "header-items" : "m-header-items"}
        >
          {!header && (
            <AnimatePresence>
              {!search && (
                <>
                  <div>
                    <NavLink
                      to="/"
                      className="org"
                      style={{
                        color: `${
                          active === "org" ? "var(--text-hover-color)" : " "
                        }`,
                      }}
                      onClick={() => setActive("org")}
                    >
                      I Publication
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="/about"
                      style={{
                        color: `${
                          active === "about" ? "var(--text-hover-color)" : " "
                        }`,
                      }}
                      onClick={() => setActive("about")}
                    >
                      About Us
                    </NavLink>
                  </div>

                  <Dropdown
                    items={items}
                    defaultDropdownValue={"Journals"}
                    setSelectedValue={setSelectedJournal}
                    selectedValue={selectedJournal}
                  />
                  <div>
                    <NavLink
                      to="/submit-form"
                      style={{
                        color: `${
                          active === "submit" ? "var(--text-hover-color)" : " "
                        }`,
                      }}
                      onClick={() => setActive("submit")}
                    >
                      Submit Journals
                    </NavLink>
                  </div>
                </>
              )}
            </AnimatePresence>
          )}

          <div className={search ? "search" : "search-gap"}>
            <AnimatePresence>
              {search && (
                <motion.div {...animation} className="search-bar-clicked">
                  <img
                    className="search-icon-in"
                    src={searchIcon}
                    alt="search-icon"
                  ></img>
                  <input
                    className="search-box"
                    type="text"
                    placeholder="Search Journals"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.img
              {...animation}
              className="search-icon"
              src={search ? closeIcon : searchIcon}
              alt="search-icon"
              onClick={handleSearch}
            ></motion.img>

            <AnimatePresence>
              {!search && (
                <motion.img
                  {...animation}
                  className="theme"
                  onClick={handleTheme}
                  src={theme === "light" ? light : dark}
                  alt="theme"
                ></motion.img>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </header>
    </>
  );
}
