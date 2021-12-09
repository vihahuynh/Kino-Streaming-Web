import React from "react";
import MoviesGrid from "../components/movies/moviesGrid/moviesGrid";
import Wrapper from "../components/wrapper";

import classes from "./movies.module.css";

const tvShows = () => {
  return (
    <Wrapper>
      <div className={classes.movies__title}>
        <h1>tv shows</h1>
      </div>
      <MoviesGrid movie={false} />
    </Wrapper>
  );
};

export default tvShows;
