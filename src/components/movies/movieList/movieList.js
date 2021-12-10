import React, { useEffect, useState } from "react";
import movieServices from "../../../services/movies";
import MovieListItem from "./movieListItem";

import classes from "./movieList.module.css";

const MovieList = ({ isMovie = true, id }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieServices.getSimilarMovies(
        isMovie ? "movie" : "tv",
        id
      );
      setMovies(response);
    };

    fetchMovies();
  }, [isMovie, id]);

  return (
    <div className={classes.recommends}>
      <h5>You may also like</h5>
      <ul className={classes["movie-container"]}>
        {movies.map((movie) => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
