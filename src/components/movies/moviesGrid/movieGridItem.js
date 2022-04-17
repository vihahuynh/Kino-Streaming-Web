import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./movieGridItem.module.css";

const MovieGridItem = ({ movie }) => {
  const mediaType = useSelector((state) => state.movie.mediaType);
  return (
    <div className={classes["movie-container"]}>
      <img
        className={classes.poster}
        alt="Movie's poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
      <div className={classes.details}>
        <div className={classes.details__grid}>
          <p className={classes.details__title}>{movie.title || movie.name}</p>
          <p className={classes.details__rating}>
            {movie.vote_average.toFixed(1)}
          </p>
          <p className={classes.details__year}>
            {movie.release_date
              ? movie?.release_date?.slice(0, 4)
              : movie?.first_air_date?.slice(0, 4)}
          </p>
        </div>
      </div>
      <div className={classes.play}>
        <Link
          className={classes.play__btn}
          to={mediaType ? `/movies/${movie.id}` : `/tvshows/${movie.id}`}
        >
          <svg className={classes.play__icon}>
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-controller-play`}
            ></use>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default MovieGridItem;
