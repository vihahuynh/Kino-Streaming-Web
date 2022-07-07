import { useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import MovieDetails from "../components/movies/movieDetails/movieDetails";
import Wrapper from "../components/wrapper";

const MoviePlay = () => {
  const id = useParams().id;

  const history = useHistory();
  const location = useLocation();
  const mediaType = location.pathname.split("/")[1];

  useEffect(
    () => {
      if (mediaType === "tvshows") {
        const queryParams = new URLSearchParams(location.search);
        const season = queryParams.get("season");
        const episode = queryParams.get("episode");
        history.replace(
          `/tvshows/${id}?season=${season || "1"}&episode=${episode || "1"}`
        );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    [id]
  );

  return (
    <Wrapper>
      <MovieDetails id={id} />
    </Wrapper>
  );
};

export default MoviePlay;
