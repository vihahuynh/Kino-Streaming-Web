import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesGrid from "../components/movies/moviesGrid/moviesGrid";
import Wrapper from "../components/wrapper";
import Loading from "../components/loading";
import SearchBar from "../components/search/search";

import { mediaTypeChange } from "../reducers/movie";
import { filterRemove } from "../reducers/search";

import classes from "./movies.module.css";

const Movies = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const mediaType = useSelector((state) => state.movie.mediaType);
  console.log(mediaType);

  useEffect(() => {
    if (!mediaType) {
      dispatch(filterRemove());
    }
    dispatch(mediaTypeChange(true));
    setTimeout(() => setIsLoading(false), 300);
  }, [dispatch, mediaType]);

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
