import React from "react";
import classes from "./movieItem.module.css";

const MovieItem = ({ movie }) => {
  return (
    <div className={classes.container}>
      <div className={classes.poster__container}>
        <img
          className={classes.poster__image}
          alt="Movie's poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      </div>
      <div className={classes.details}>
        <div>
          <h5 className={classes.title}>{movie.title}</h5>
          <p>{movie.release_date.slice(0, 4)}</p>
        </div>
        <div className={classes.rating}>
          <div className={classes["rating__icon-container"]}>
            <svg className={classes.rating__icon}>
              <use xlinkHref="/images/sprite.svg#icon-star"></use>
            </svg>
          </div>
          <p className={classes.rating__text}>{movie.vote_average}</p>
        </div>
        <a className={classes.btn} href="#">
          <p className={classes.btn__text}>Watch now</p>
        </a>
      </div>
    </div>
  );
};

export default MovieItem;
