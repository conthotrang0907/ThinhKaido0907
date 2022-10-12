import React from "react";
import APIContext from "../store/APIContext";
import { useContext } from "react";
import MoviesList from "./MoviesList";

//==============================
const Content = () => {
  const dataEndPoint = useContext(APIContext);

  const listData = dataEndPoint.link_API.map((data) => (
        
        <MoviesList
        key={data.key}
        title={data.key}
        data={data.results}
        ></MoviesList>
    
));

  return (
    <div className="content">
      <div>{listData}</div>
    </div>
  );
};
export default Content;
