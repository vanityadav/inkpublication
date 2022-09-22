import "./App.css";
import "./AppP.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Journals from "./reusable-components/journals/Journals";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Support from "./components/Support";

import Terms from "./components/Terms";

function App() {
  const [theme, setTheme] = useState();
  const [selectedJournal, setSelectedJournal] = useState();

  useEffect(() => {
    let userTheme = window.localStorage.getItem("theme");
    setTheme(userTheme ? userTheme : "light");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <div id={theme} className="App">
      <Header
        theme={theme}
        handleTheme={handleTheme}
        selectedJournal={selectedJournal}
        setSelectedJournal={setSelectedJournal}
      />
      <div className="content-all">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms" element={<Terms />} />
          <Route
            path="/journals-:id"
            element={
              <Journals
                selectedJournal={selectedJournal}
                setSelectedJournal={setSelectedJournal}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
