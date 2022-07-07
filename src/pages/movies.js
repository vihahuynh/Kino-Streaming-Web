import { useDispatch } from "react-redux";
import MoviesGrid from "../components/movies/moviesGrid/moviesGrid";
import Wrapper from "../components/wrapper";
import SeachBar from "../components/search/search";

import { mediaTypeChange } from "../reducers/movie";

import classes from "./movies.module.css";

const Movies = ({ mediaType }) => {
  const dispatch = useDispatch();
  dispatch(mediaTypeChange(mediaType));

  return (
    <Wrapper>
      <div className={classes.movies__title}>
        <h1>{mediaType ? "movies" : "tv shows"}</h1>
      </div>
      <SeachBar />
      <MoviesGrid />
    </Wrapper>
  );
};

export default Movies;
