import React from "react";
import { useNavigate } from "react-router-dom";
import imgBanner from "../img/banner1.jpg";

//===========================
// banner home page
const Banner = () => {
  let navigate = useNavigate();
  return (
    <div className="banner">
      <img src={imgBanner} alt="clock" />
      <div className="banner-item">
        <p>NEW INPIRATION 2020</p>
        <h1>20% OFF ON NEW SEASON</h1>
        <button
          type="button"
          className="btn"
          onClick={() => {
            navigate("/shop");
          }}
        >
          Browser collections
        </button>
      </div>
    </div>
  );
};
export default Banner;
