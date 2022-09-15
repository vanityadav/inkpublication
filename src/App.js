import "./App.css";
import "./AppP.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Journals from "./components/Journals";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Support from "./components/Support";
import TOP from "./components/TOP";

function App() {
  const [theme, setTheme] = useState();
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
      <Header theme={theme} handleTheme={handleTheme} />
      <div className="content-all">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/top" element={<TOP />} />
          <Route path="/support" element={<Support />} />
          <Route path="/journals" element={<Journals />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
