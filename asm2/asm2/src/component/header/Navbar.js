// import ApiHeader from "./ApiHeader";
import React, { useState } from "react";

import IconSearch from "./IconSearch";

//=======================
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className={`NavBar ${navbar ? "active" : ""}`}>
      <h4 onClick={() => window.location.replace("./")}>Movie App</h4>
      <IconSearch></IconSearch>
    </div>
  );
};
export default Navbar;
