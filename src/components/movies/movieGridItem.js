import React from "react";
import classes from "./movieGridItem.module.css";

const MovieGridItem = ({ movie }) => {
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
              ? movie.release_date.slice(0, 4)
              : movie?.first_air_date.slice(0, 4)}
          </p>
        </div>
      </div>
      <div className={classes.play}>
        <a className={classes.play__btn} href="/">
          <svg className={classes.play__icon}>
            <use xlinkHref="/images/sprite.svg#icon-controller-play"></use>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default MovieGridItem;
