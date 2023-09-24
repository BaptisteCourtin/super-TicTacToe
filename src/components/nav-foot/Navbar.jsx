import React from "react";
import { NavLink } from "react-router-dom";

import ToggleDarkLight from "./ToggleDarkLight";

const Navbar = ({ setIsDarkMode, isDarkMode }) => {
  const retourHaut = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="navbar">
      <nav>
        <NavLink to="/" onClick={() => retourHaut()}>
          Play
        </NavLink>

        <NavLink to="/normal" onClick={() => retourHaut()}>
          Easy
        </NavLink>

        <NavLink to="/details" onClick={() => retourHaut()}>
          How ?
        </NavLink>
      </nav>
      <ToggleDarkLight setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
    </div>
  );
};

export default Navbar;
