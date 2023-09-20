import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);/*yahan jo hmne setMovies k andar pura data save kya h wo automatically movies m ja kr save
                                     hogia Watch api to see details*/
      return request;
    }//https://www.youtube.com/shorts/t_-SrsCCV2U
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>x
      <div className="row__posters">
        {movies.map((movie) => (/*ab yahan hmne movies ko map krwane k liye mapping ki*/
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default Row;
