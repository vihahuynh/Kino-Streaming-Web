import React, { useEffect, useState } from "react";
import movieServices from "../../../services/movies";
import CastGrid from "../../cast/castGrid";
import Video from "../../video/video";
import MovieList from "../movieList/movieList";

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
      <div className={classes.movie__video}>
        <Video id={id} />
      </div>
      <div className={classes.movie__details}>
        <h2>{movie.title}</h2>
        <p>
          <span>{movie.runtime} minutes</span>
          <span>Published on {movie.release_date}</span>
        </p>
        <p>{movie.overview}</p>
      </div>
      <div className={classes.movie__cast}>
        <CastGrid id={movie.id} />
      </div>
      <div className={classes.movie__recommends}>
        <MovieList id={id} />
      </div>
    </div>
  );
};

export default MovieDetails;
