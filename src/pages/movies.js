import { useLocation } from "react-router-dom";
import MoviesGrid from "../components/movies/moviesGrid/moviesGrid";
import Wrapper from "../components/layouts/wrapper/wrapper";
import SeachBar from "../components/search/search";

import classes from "./movies.module.css";
import BackgroundImg from "../components/ui/backgroundImg/backgroundImg";

const Movies = () => {
  const mediaType = useLocation().pathname.split("/")[1];

  return (
    <Wrapper>
      <BackgroundImg src={`${process.env.PUBLIC_URL}/posters-wall.jpg`} />
      <div className={classes.movies__title}>
        <h1>{mediaType === "movies" ? "movies" : "tv shows"}</h1>
      </div>
      <SeachBar />
      <MoviesGrid />
    </Wrapper>
  );
};

export default Movies;
