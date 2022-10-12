import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

//====================

const Header = () => {
  console.log("het")
  return (
    <div className="Header">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};
export default Header;
