import React from "react";

import NavBar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
import Banner from "../../component/layout/Banner";
import Content from "../../component/Content/Content";

//==================
// trang home page
const HomePage = () => {
  return (
    <div className="home">
      <NavBar></NavBar>
      <Banner></Banner>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
