import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "@pages/Home";
import Details from "@pages/Details";
import Navbar from "@components/nav-foot/Navbar";
import Footer from "@components/nav-foot/Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "app dark-theme" : "app"}>
      <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <div className="allPages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
