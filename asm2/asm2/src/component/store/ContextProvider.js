import APIContext from "./APIContext";
// import useFetchApi from "./../../hooks/use-fetchApi";

import { useEffect, useState } from "react";

//================
// const Datalist = () => {
//   console.log("fs")
//   const [dataApimovie, setdataApimovie] = useState([]);
//   const [error, seterror] = useState(null);
//   const [isLoading, setisLoading] = useState(true);
//   const API_KEY = "6fc3d765745ff0bf0840cc0f79c98ab6";
//   const HttpApi = "https://api.themoviedb.org/3";
//   const requests = {
//     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
//     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

//   };

//     useEffect(() => {
//       const getData = [];

//       const fetchApi = async () => {

//         setisLoading(true);
//         for (const key in requests) {

//           const response = await fetch(`${HttpApi}${requests[key]}`);

//           const data = await response.json();
//           data.key = key;
//           getData.push(data);
//         }
//         setisLoading(false);

//         setdataApimovie(getData);
//       };
//       fetchApi().catch((error) => {
//         setisLoading(false);
//         seterror(error.message);
//       });
//     },[])

//   return { dataApimovie, error, isLoading };
// };

const ContextProvider = (props) => {
 
  const [dataApimovie, setdataApimovie] = useState([]);
  const [error, seterror] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const API_KEY = "6fc3d765745ff0bf0840cc0f79c98ab6";
  const HttpApi = "https://api.themoviedb.org/3";
  const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  };

  useEffect(() => {
    const getData = [];
    console.log("fs");
    const fetchApi = async () => {
      setisLoading(true);
      for (const key in requests) {
        const response = await fetch(`${HttpApi}${requests[key]}`);

        const data = await response.json();
        data.key = key;
        getData.push(data);
      }
      setisLoading(false);

      setdataApimovie(getData);
    };
    fetchApi().catch((error) => {
      setisLoading(false);
      seterror(error.message);
    });
  }, []);
  const data = {
    dataApimovie: dataApimovie,
    isLoading: isLoading,
    error: error,
  };
  if (data.isLoading) {
    return (
      <section>
        <p>Loading........</p>
      </section>
    );
  }
  if (data.error) {
    return (
      <section>
        <p>{data.error}</p>
      </section>
    );
  }
  const context = {
    HttpImg: "https://image.tmdb.org/t/p/original",
    link_API: data.dataApimovie,
    err: data.error,
    isload: data.isLoading,
    searchApi:
      "/search/movie?api_key=6fc3d765745ff0bf0840cc0f79c98ab6&language=en-US",
  };
  return (
    <APIContext.Provider value={ context }>
      {props.children}
    </APIContext.Provider>
  );
};
export default ContextProvider;
