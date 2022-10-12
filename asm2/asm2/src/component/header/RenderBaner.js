import React, {  } from "react";
// import APIContext from "../store/APIContext";

//==========================
const RenderBaner = (props) => {
  // const [navbar, setNavbar] = useState(false);

  return (
    <div className="Banner">
      <img
        src={`https://image.tmdb.org/t/p/original${props.imgBackground}`}
        alt={props.title}
      />

      <div className="Banner__item">
        <h3>
          <strong>{props.title}</strong>
        </h3>
        <button className="btn btn-light">Play</button>
        <button className="btn btn-light">My list</button>
        <p>
          <strong>{props.depcription}</strong>
        </p>
      </div>
    </div>
  );
};

export default RenderBaner;
