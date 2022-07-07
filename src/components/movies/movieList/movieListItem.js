import React from "react";
import { Link, useLocation } from "react-router-dom";

import classes from "./movieListItem.module.css";

const MovieListItem = ({ movie }) => {
  const mediaType = useLocation().pathname.split("/")[1];
  return (
    <li className={classes["movie-container"]}>
      <Link className={classes.movie} to={`/${mediaType}/${movie.id}`}>
        <img
          className={classes.movie__image}
          alt=""
          src={`https://image.tmdb.org/t/p/w500${
            movie.poster_path || movie.still_path
          }`}
        />
        <div className={classes.movie__details}>
          <h5>{movie.title || movie.name}</h5>
          <p>
            <span>Rating: {movie.vote_average.toFixed(1)}/10</span>
            <span>
              Release:{" "}
              {movie.release_date?.slice(0, 4) ||
                movie.first_air_date?.slice(0, 4)}
            </span>
          </p>
        </div>
        <svg className={classes.movie__icon}>
          <use
            xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-arrow-long-right`}
          ></use>
        </svg>
      </Link>
    </li>
  );
};

export default MovieListItem;
