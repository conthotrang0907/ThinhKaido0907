import RenderResult from "./RenderResult";
import { useContext, useEffect, useState } from "react";

import Searchcontext from "../store/contextSearch";
//======================

const ResultList = () => {
  const dataSearch = useContext(Searchcontext);
  console.log(dataSearch.inputSearch);

  const [dataApimovie, setdataApimovie] = useState([]);

  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    console.log("1212")
    if (dataSearch.inputSearch.trim() === "") {
      setisLoading(true);
    } else {
      const fetchApi = async () => {
        setisLoading(true);

        const response = await fetch(`
          https://api.themoviedb.org/3/search/movie?api_key=6fc3d765745ff0bf0840cc0f79c98ab6&language=en-US&query=${dataSearch.inputSearch}&page=1&include_adult=true`);

        const data = await response.json();

        setisLoading(false);
        setdataApimovie(data);
        console.log(dataApimovie.results);
      };
      fetchApi();
    }
  }, [dataSearch.inputSearch]);

  return (
    <div className="form_result">
      <h5>Search Result</h5>

      {!isLoading && (
        <div className="result_img">
          {dataApimovie.results.map((a) => (
            <RenderResult
              key={a.id}
              imgPoster={`
              https://image.tmdb.org/t/p/original${
                a.poster_path ? a.poster_path : a.backdrop_path
              }`}
            ></RenderResult>
          ))}
        </div>
      )}
    </div>
  );
};
export default ResultList;
