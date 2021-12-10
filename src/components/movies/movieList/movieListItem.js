import React from "react";
import { Link } from "react-router-dom";

import classes from "./movieListItem.module.css";

const MovieListItem = ({ movie }) => {
  return (
    <li className={classes["movie-container"]}>
      <Link className={classes.movie} to="/">
        <img
          className={classes.movie__image}
          alt="Pose"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <div className={classes.movie__details}>
          <h5>{movie.title}</h5>
          <p>
            <span>Rating: {movie.vote_average.toFixed(1)}/10</span>
            <span>Release: {movie.release_date.slice(0, 4)}</span>
          </p>
        </div>
        <svg className={classes.movie__icon}>
          <use xlinkHref="/images/sprite.svg#icon-arrow-long-right"></use>
        </svg>
      </Link>
    </li>
  );
};

export default MovieListItem;
