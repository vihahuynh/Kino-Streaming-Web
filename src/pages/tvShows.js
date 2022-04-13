import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MoviesGrid from "../components/movies/moviesGrid/moviesGrid";
import Wrapper from "../components/wrapper";
import Loading from "../components/loading";

import { mediaTypeChange } from "../reducers/movie";
import { filterRemove } from "../reducers/search";

import classes from "./movies.module.css";
import SearchBar from "../components/search/search";

const TVShows = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(filterRemove());
    dispatch(mediaTypeChange(false));
    setTimeout(() => setIsLoading(false), 300);
  }, [dispatch]);

  return (
    <Wrapper>
      <div className={classes.movies__title}>
        <h1>tv shows</h1>
      </div>
      <SearchBar />
      {isLoading ? <Loading height="70vh" /> : <MoviesGrid />}
    </Wrapper>
  );
};

export default TVShows;
