import { useLocation } from "react-router-dom";
import MoviesGrid from "../components/movies/moviesGrid/moviesGrid";
import Wrapper from "../components/wrapper";
import SeachBar from "../components/search/search";

import classes from "./movies.module.css";

const Movies = () => {
  const mediaType = useLocation().pathname.split("/")[1];

  return (
    <Wrapper>
      <div className={classes.movies__title}>
        <h1>{mediaType === "movies" ? "movies" : "tv shows"}</h1>
      </div>
      <SeachBar />
      <MoviesGrid />
    </Wrapper>
  );
};

export default Movies;
