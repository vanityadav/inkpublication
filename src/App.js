import "./App.css";
import "./AppP.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Journals from "./components/Journals";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

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
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/journals" element={<Journals theme={theme} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
