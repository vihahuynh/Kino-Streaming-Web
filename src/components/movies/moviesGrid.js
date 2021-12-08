import React, { useEffect, useState } from "react";
import movieServices from "../../services/movies";
import MovieGridItem from "./movieGridItem";

import classes from "./movieList.module.css";

const MoviesGrid = ({ movie = true }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieServices.getMovieList(
        movie ? "movie" : "tv",
        "upcoming"
      );
      setMovies(response);
    };

    fetchMovies();
  }, [movie]);

  return (
    <div className={classes.container}>
      {movies.slice(0, 1).map((movie) => (
        <MovieGridItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesGrid;
