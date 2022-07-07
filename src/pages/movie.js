import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movies/movieDetails/movieDetails";
import Wrapper from "../components/wrapper";

const MoviePlay = () => {
  const id = useParams().id;

  return (
    <Wrapper>
      <MovieDetails id={id} />
    </Wrapper>
  );
};

export default MoviePlay;
