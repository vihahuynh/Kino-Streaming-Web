import React from "react";
import classes from "./movieItem.module.css";
import Button from "../../button/button";

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
          <h5 className={classes.title}>{movie.title || movie.name}</h5>
          <p>
            {movie.release_date
              ? movie?.release_date?.slice(0, 4)
              : movie?.first_air_date?.slice(0, 4)}
          </p>
        </div>
        <div className={classes.rating}>
          <div className={classes["rating__icon-container"]}>
            <svg className={classes.rating__icon}>
              <use
                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-star`}
              ></use>
            </svg>
          </div>
          <p className={classes.rating__text}>
            {movie.vote_average.toFixed(1)}
          </p>
        </div>
        <Button
          link={
            movie.release_date ? `/movies/${movie.id}` : `/tvshows/${movie.id}`
          }
          text="Play now"
        />
      </div>
    </div>
  );
};

export default MovieItem;
