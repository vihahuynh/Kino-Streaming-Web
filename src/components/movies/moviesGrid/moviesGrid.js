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
      try {
        const response = await movieServices.getMovieCarousel(
          mediaType ? "movie" : "tv",
          "popular"
        );
        setMovies(response);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchMovies();
  }, [mediaType]);

  useEffect(() => {
    const fetchFilteredMovies = async () => {
      try {
        const response = await searchServices.search(
          mediaType ? "movie" : "tv",
          filter
        );
        setMovies(response);
      } catch (err) {
        console.log(err.message);
      }
    };
    // reduce the number of requests
    const timer = setTimeout(() => fetchFilteredMovies(), 300);
    return () => {
      clearTimeout(timer);
    };
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
