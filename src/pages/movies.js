import React from "react";
import MoviesGrid from "../components/movies/moviesGrid/moviesGrid";
import Wrapper from "../components/wrapper";

import classes from "./movies.module.css";

const Movies = () => {
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
