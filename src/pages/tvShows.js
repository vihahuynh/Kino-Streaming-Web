import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MoviesGrid from "../components/movies/moviesGrid/moviesGrid";
import Wrapper from "../components/wrapper";
import Loading from "../components/loading";
import SeachBar from "../components/search/search";

import { mediaTypeChange } from "../reducers/movie";

import classes from "./movies.module.css";

const TVShows = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(mediaTypeChange(false));
    setTimeout(() => setIsLoading(false), 300);
  }, [dispatch]);

  return (
    <Wrapper>
      <div className={classes.movies__title}>
        <h1>tv shows</h1>
      </div>
      <SeachBar />
      {isLoading ? <Loading height="70vh" /> : <MoviesGrid />}
    </Wrapper>
  );
};

export default TVShows;
