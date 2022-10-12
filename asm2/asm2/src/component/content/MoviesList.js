import React, { useState } from "react";
import RenderMoviesList from "./RenderMoviesList";

import MovieDetail from "../MovieDetail/MovieDetail";

//==================

const MoviesList = (props) => {
  const [idImg, setidImg] = useState("");
  const [Name, setName] = useState("");
  const [depcrip, setdepcrip] = useState("");
  const [Vote, setVote] = useState("");
  const [Date, setDate] = useState("");
  const [backdropDetail, setbackdropDetail] = useState("");
  const [check, setcheck] = useState(false);

  const reducer = (title) => {
    switch (title) {
      case "fetchTrending":
        return "Xu hướng";
      case "fetchTopRated":
        return "Xếp hạng cao";
      case "fetchActionMovies":
        return "Hành động";
      case "fetchComedyMovies":
        return "Hài";
      case "fetchHorrorMovies":
        return "Kinh dị";
      case "fetchRomanceMovies":
        return "Lãng mạn";
      case "fetchDocumentaries":
        return "Tài liệu";
      default:
        return "";
    }
  };
  const clickon = (title) => {
    setcheck(!check);
  };

  const handler = (idImg, name, depcrip, vote, date, img) => {
    setidImg(idImg);
    setName(name);
    setdepcrip(depcrip);
    setVote(vote);
    setDate(date);
    setbackdropDetail(img);
  };

  return (
    <div className="movies">
      <h5>{reducer(props.title)}</h5>
      <div
        className={`${
          props.title === "fetchNetflixOriginals"
            ? "contentFirst contentAll"
            : "contentAll"
        }`}
      >
        {props.data.map((data) => {
          return (
            <RenderMoviesList
              key={data.id}
              id={data.id}
              imgPoster={`
              https://image.tmdb.org/t/p/original${
                props.title === "fetchNetflixOriginals"
                  ? data.poster_path
                  : data.backdrop_path
                  ? data.backdrop_path
                  : data.poster_path
              }`}
              imgBackdropDetail={data.backdrop_path}
              name={data.title ? data.title : data.name}
              releaseDate={data.release_date}
              depcription={data.overview}
              vote={data.vote_average}
              onClickmethot={handler}
              onClickimg={clickon}
            />
          );
        })}
      </div>
      {check && (
        <MovieDetail
          id={idImg}
          name={Name}
          depcrip={depcrip}
          vote={Vote}
          date={Date}
          srcImg={backdropDetail}
        ></MovieDetail>
      )}
    </div>
  );
};
export default MoviesList;
