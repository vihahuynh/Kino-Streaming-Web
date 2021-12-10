import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movies/movieDetails/movieDetails";
import Wrapper from "../components/wrapper";

const MoviePlay = ({ isMovie = true }) => {
  const id = useParams().id;

  return (
    <Wrapper>
      <div>
        <MovieDetails id={id} isMovie={isMovie} />
      </div>
    </Wrapper>
  );
};

export default MoviePlay;
