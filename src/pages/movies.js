import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MoviesGrid from "../components/movies/moviesGrid/moviesGrid";
import Wrapper from "../components/wrapper";
import Loading from "../components/loading";

import { mediaTypeChange } from "../reducers/movie";

import classes from "./movies.module.css";
import SearchBar from "../components/search/search";

const Movies = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(mediaTypeChange(true));
    setTimeout(() => setIsLoading(false), 300);
  }, [dispatch]);

  return (
    <Wrapper>
      <div className={classes.movies__title}>
        <h1>Movies</h1>
      </div>
      <SearchBar />
      {isLoading ? <Loading height="70vh" /> : <MoviesGrid />}
    </Wrapper>
  );
};

export default Movies;
