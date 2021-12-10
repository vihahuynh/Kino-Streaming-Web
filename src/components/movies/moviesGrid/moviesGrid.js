import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import movieServices from "../../../services/movies";
import MovieGridItem from "./movieGridItem";

import classes from "./moviesGrid.module.css";

const MoviesGrid = () => {
  const mediaType = useSelector((state) => state.movie.mediaType);
  const [movies, setMovies] = useState([]);

  console.log("mediaType: ", mediaType);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieServices.getMovieCarousel(
        mediaType ? "movie" : "tv",
        "popular"
      );
      setMovies(response);
    };

    fetchMovies();
  }, [mediaType]);

  return (
    <div className={classes["movie-grid"]}>
      {movies.map((movie) => (
        <MovieGridItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesGrid;
