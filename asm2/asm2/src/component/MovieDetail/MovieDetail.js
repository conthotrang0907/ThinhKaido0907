import React, { useEffect, useState } from "react";
// import Example from "./ReactYoutube";
//===========================
const MovieDetail = (props) => {
  const [dataMoviesId, setdataMoviesId] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState(null);
  // const [checkData, setcheckData] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      setisLoading(true);

      const response = await fetch(
        `https://api.themoviedb.org/3//movie/${props.id}/videos?api_key=6fc3d765745ff0bf0840cc0f79c98ab6`
      );

      const data = await response.json();

      setdataMoviesId(data);
      setisLoading(false);
    };

    fetchApi().catch((error) => {
      setisLoading(false);
      // setcheckData(false);
      seterror(error.message);
    });
  }, [props.id]);

  if (error) {
    return (
      <section>
        <p>{error}</p>
      </section>
    );
  }
  // console.log(dataMoviesId)
  // dataMoviesId.results.length !== 0
  let a, c;
  if (!isLoading) {
    if (dataMoviesId.results) {
      a = dataMoviesId.results.find(
        (b) => b.site === "YouTube" && b.type === "Trailer"
      );
      c = dataMoviesId.results.find(
        (d) => d.site === "YouTube" && d.type === "Teaser"
      );
    } else {
      a = false;
      c = false;
    }
  }

  return (
    <div className="movie_detail">
      <div className="depcrip">
        <h3>{props.name}</h3>
        <h6>
          <strong>Release Date: {props.date}</strong>
        </h6>
        <h6>
          <strong>Vote: {props.vote} / 10</strong>
        </h6>
        <p>{props.depcrip}</p>
      </div>
      {!a && !c ? (
        <img
          src={`https://image.tmdb.org/t/p/original${props.srcImg}`}
          alt={props.title}
        />
      ) : (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${a.key ? a.key : c.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};
export default MovieDetail;
