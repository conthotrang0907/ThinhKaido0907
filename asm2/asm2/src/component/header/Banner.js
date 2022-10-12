import RenderBaner from "./RenderBaner";
import React, { useContext } from "react";

import APIContext from "../store/APIContext";
//=========================
const Banner = () => {
  const dataAPI = useContext(APIContext);

  if (dataAPI.isload) {
    return (
      <section>
        <p>Loading........</p>
      </section>
    );
  }
  const numberData = Math.floor(
    dataAPI.link_API[0].results.backdrop_path
      ? Math.random() * dataAPI.link_API[0].results.length - 1
      : Math.random() * dataAPI.link_API[0].results.length - 2
  );

  return (
    <div>
      {!dataAPI.isload ? (
        <RenderBaner
          key={dataAPI.link_API[0].results[numberData].id}
          imgBackground={dataAPI.link_API[0].results[numberData].backdrop_path}
          title={
            dataAPI.link_API[0].results[numberData].original_title
              ? dataAPI.link_API[0].results[numberData].original_title
              : dataAPI.link_API[0].results[numberData].original_name
          }
          depcription={dataAPI.link_API[0].results[numberData].overview}
        ></RenderBaner>
      ) : (
        ""
      )}
    </div>
  );
};
export default Banner;
