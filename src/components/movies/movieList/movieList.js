import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import movieServices from "../../../services/movies";
import MovieListItem from "./movieListItem";

import classes from "./movieList.module.css";

const MovieList = ({ id }) => {
  const mediaType = useLocation().pathname.split("/")[1];
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await movieServices.getSimilarMovies(
          mediaType === "movies" ? "movie" : "tv",
          id
        );
        setMovies(response);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchMovies();
  }, [mediaType, id]);

  return (
    <div className={classes.recommends}>
      <h5>You may also like</h5>
      <ul className={classes["movie-container"]}>
        {movies.map((movie) => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </ul>
      )
    </div>
  );
};

export default MovieList;
