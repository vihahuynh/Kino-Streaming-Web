import React, { useEffect, useState } from "react";
import movieServices from "../../services/movies";
import MovieItem from "./movieItem";

import classes from "./movieList.module.css";

const MovieList = ({ name, type }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieServices.getMovieList(type);
      setMovies(response);
    };

    fetchMovies();
  }, [type]);

  return (
    <div className={classes.container}>
      <h1>{name}</h1>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
