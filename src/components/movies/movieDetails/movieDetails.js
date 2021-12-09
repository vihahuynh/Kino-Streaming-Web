import React, { useEffect, useState } from "react";
import movieServices from "../../../services/movies";
import Video from "../../video/video";

import classes from "./movieDetails.module.css";

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
  return (
    <div className={classes.movie}>
      <div className={classes.movie__header}></div>
      <Video id={id} />
    </div>
  );
};

export default MovieDetails;
