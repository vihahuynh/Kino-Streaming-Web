import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import movieServices from "../../../services/movies";
import searchServices from "../../../services/search";
import MovieGridItem from "./movieGridItem";
import Loading from "../../loading";

import classes from "./moviesGrid.module.css";

const MoviesGrid = () => {
  const mediaType = useLocation().pathname.split("/")[1];
  const filter = useSelector((state) => state.search.filter);
  const [isLoading, setIsLoading] = useState(false);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await movieServices.getMovieCarousel(
          mediaType === "movies" ? "movie" : "tv",
          "popular"
        );
        setMovies(response);
      } catch (err) {
        console.log(err.message);
      }
      setIsLoading(false);
    };
    const fetchFilteredMovies = async () => {
      setIsLoading(true);
      try {
        const response = await searchServices.search(
          mediaType === "movies" ? "movie" : "tv",
          filter
        );
        setMovies(response);
      } catch (err) {
        console.log(err.message);
      }
      setIsLoading(false);
    };

    // reduce the number of requests
    let timer;
    if (filter === "") fetchMovies();
    else timer = setTimeout(() => fetchFilteredMovies(), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [mediaType, filter]);

  return (
    <div className={classes["movie-grid"]}>
      {isLoading && <Loading />}
      {!isLoading &&
        movies.map((movie) => <MovieGridItem key={movie.id} movie={movie} />)}
    </div>
  );
};

export default MoviesGrid;
