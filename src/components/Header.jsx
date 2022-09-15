import React, { useState } from "react";
import light from "../media/light.svg";
import dark from "../media/dark.svg";
import searchIcon from "../media/search.svg";
import closeIcon from "../media/close.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { NavLink } from "./NavLink";

export default function Header({ theme, handleTheme }) {
  const [header, setHeader] = useState();
  const [sideHeader, setSideHeader] = useState();
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
      {header && (
        <>
          <header>
            <div className="small-header-items">
              <div className={search ? "search" : "search-gap"}>
                <AnimatePresence>
                  {search && (
                    <>
                      <motion.img
                        {...animation}
                        className="search-icon-in"
                        src={searchIcon}
                        alt="search-icon"
                      ></motion.img>
                      <motion.input
                        {...animation}
                        className="search-box"
                        type="text"
                        placeholder="Search Journals"
                      />
                    </>
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
            </div>
          </header>
        </>
      )}

      {!header && (
        <header>
          <div className="header-items">
            <AnimatePresence>
              {!search && (
                <>
                  <div>
                    <motion.div {...animation} className="org">
                      <NavLink to="/">I Publication</NavLink>
                    </motion.div>
                  </div>
                  <div>
                    <motion.div {...animation} className="header-item">
                      <div className="dropdown">
                        <span id="#journal">Journals</span>

                        <div className="journal-menu">
                          <p>Google Scholar</p>
                          <p>Web of Science</p>
                          <p>
                            <NavLink to="/journals">Scopus Journals</NavLink>
                          </p>
                          <p>Scopus Discontinued</p>
                        </div>
                      </div>
                      <div className="dropdown">
                        <span id="#publish">Publications</span>
                      </div>

                      <div className="dropdown">
                        <span id="#about">
                          <NavLink to="/about">About Us</NavLink>
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </>
              )}
            </AnimatePresence>

            <div className={search ? "search" : "search-gap"}>
              <AnimatePresence>
                {search && (
                  <>
                    <motion.img
                      {...animation}
                      className="search-icon-in"
                      src={searchIcon}
                      alt="search-icon"
                    ></motion.img>
                    <motion.input
                      {...animation}
                      className="search-box"
                      type="text"
                      placeholder="Search Journals"
                    />
                  </>
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
          </div>
        </header>
      )}
    </>
  );
}
