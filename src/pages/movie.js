import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movies/movieDetails/movieDetails";
import Wrapper from "../components/wrapper";
import ComingSoon from "./comingSoon";

const MoviePlay = ({ isMovie = true }) => {
  const id = useParams().id;

  if (!isMovie) return <ComingSoon />;

  return (
    <Wrapper>
      <MovieDetails id={id} />
    </Wrapper>
  );
};

export default MoviePlay;
