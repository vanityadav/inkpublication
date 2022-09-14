import "./App.css";
import "./AppP.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

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
      <Body />
      <Contact theme={theme} />
      <Footer />
    </div>
  );
}

export default App;
