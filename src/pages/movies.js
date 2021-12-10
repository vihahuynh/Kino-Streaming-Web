import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MoviesGrid from "../components/movies/moviesGrid/moviesGrid";
import Wrapper from "../components/wrapper";

import { mediaTypeChange } from "../reducers/movie";

import classes from "./movies.module.css";

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mediaTypeChange(true));
  }, [dispatch]);

  return (
    <Wrapper>
      <div className={classes.movies__title}>
        <h1>Movies</h1>
      </div>
      <MoviesGrid />
    </Wrapper>
  );
};

export default Movies;
