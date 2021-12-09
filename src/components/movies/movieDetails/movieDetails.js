import React, { useEffect, useState } from "react";
import movieServices from "../../../services/movies";

const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await movieServices.getMovieDetails("movie", id);
      console.log("response: ", response);

      if (response?.id?.toString() === id) setMovie(response);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p>Movie not found</p>;
  return <div></div>;
};

export default MovieDetails;
