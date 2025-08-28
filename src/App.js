import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "" : "light-mode";
  }, [darkMode]);

  return (
    <Router>
      <Preloader load={load} />
      <div
        className={`App${darkMode ? " dark-mode" : ""}`}
        id={load ? "no-scroll" : "scroll"}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route path="/project" element={<Projects darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/resume" element={<Resume darkMode={darkMode} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;
