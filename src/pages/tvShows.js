import React from "react";
import MoviesGrid from "../components/movies/moviesGrid";
import Wrapper from "../components/wrapper";

import classes from "./movies.module.css";

const tvShows = () => {
  return (
    <Wrapper>
      <div className={classes.movies__title}>
        <h1>tvShows</h1>
      </div>
      <MoviesGrid movie={false} />
    </Wrapper>
  );
};

export default tvShows;
