import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import movieServices from "../../../services/movies";
import CastGrid from "../../cast/castGrid";
import Video from "../../video/video";
import MovieList from "../movieList/movieList";
import GenreList from "./genreList";
import Stars from "../../stars/stars";

import { movieChange } from "../../../reducers/movie";

import classes from "./movieDetails.module.css";

const MovieDetails = ({ id }) => {
  const movie = useSelector((state) => state.movie.movie);
  const mediaType = useLocation().pathname.split("/")[1];
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await movieServices.getMovieDetails(
          mediaType === "movies" ? "movie" : "tv",
          id
        );

        if (response?.id?.toString() === id) {
          dispatch(movieChange(response));
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchMovie();
  }, [id, mediaType, dispatch]);

  if (!movie) return <p>Movie not found</p>;

  const src =
    mediaType === "movies"
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
            {mediaType === "movies" && <span>{movie.runtime} minutes</span>}
            <span>
              Published on {movie.release_date || movie.first_air_date}
            </span>
          </p>
          <Stars rating={movie.vote_average} />
          <p>{movie.overview}</p>
          <GenreList genres={movie.genres} />
        </div>
        <div className={classes.movie__cast}>
          <CastGrid id={movie.id} mediaType={mediaType} />
        </div>
        <div className={classes.movie__recommends}>
          <MovieList id={id} mediaType={mediaType} />
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
