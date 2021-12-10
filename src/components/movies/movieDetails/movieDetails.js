import React, { useEffect, useState } from "react";
import movieServices from "../../../services/movies";
import CastGrid from "../../cast/castGrid";
import Video from "../../video/video";
import MovieList from "../movieList/movieList";
import GenreList from "./genreList";

import classes from "./movieDetails.module.css";

const MovieDetails = ({ id, isMovie }) => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await movieServices.getMovieDetails(
        isMovie ? "movie" : "tv",
        id
      );

      if (response?.id?.toString() === id) setMovie(response);
    };
    fetchMovie();
  }, [id, isMovie]);

  if (!movie) return <p>Movie not found</p>;

  const src = isMovie
    ? `https://www.2embed.ru/embed/tmdb/movie?id=${id}`
    : `https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=1&e=1`;

  return (
    <div className={classes.container}>
      <div className={classes.movie}>
        <div className={classes.movie__video}>
          <Video id={id} src={src} />
        </div>
        <div className={classes.movie__details}>
          <h2>{movie.title || movie.name}</h2>
          <p>
            {isMovie && <span>{movie.runtime} minutes</span>}
            <span>
              Published on {movie.release_date || movie.first_air_date}
            </span>
          </p>
          <p>{movie.overview}</p>
          <GenreList genres={movie.genres} />
        </div>
        <div className={classes.movie__cast}>
          <CastGrid id={movie.id} isMovie={isMovie} />
        </div>
        <div className={classes.movie__recommends}>
          <MovieList id={id} isMovie={isMovie} />
        </div>
      </div>
      <img
        className={classes.backdrop}
        alt="Backdrop"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
      />
    </div>
  );
};

export default MovieDetails;
