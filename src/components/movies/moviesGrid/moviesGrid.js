import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import movieServices from "../../../services/movies";
import searchServices from "../../../services/search";
import MovieGridItem from "./movieGridItem";

import classes from "./moviesGrid.module.css";

const MoviesGrid = () => {
  const mediaType = useSelector((state) => state.movie.mediaType);
  const filter = useSelector((state) => state.search.filter);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      let response;
      if (!filter) {
        response = await movieServices.getMovieCarousel(
          mediaType ? "movie" : "tv",
          "popular"
        );
      } else {
        response = await searchServices.search(
          mediaType ? "movie" : "tv",
          filter
        );
      }
      setMovies(response);
    };

    fetchMovies();
  }, [mediaType, filter]);

  return (
    <div className={classes["movie-grid"]}>
      {movies.map((movie) => (
        <MovieGridItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesGrid;
