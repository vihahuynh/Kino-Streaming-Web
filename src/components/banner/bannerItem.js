import React from "react";
import classes from "./bannerItem.module.css";
require("dotenv").config();

const BannerItem = ({ movie }) => {
  console.log(Object.keys(movie));
  console.log(`https://image.tmdb.org/t/p/original${movie.backdrop_path}`);
  console.log(`https://image.tmdb.org/t/p/w500${movie.poster}`);
  return (
    <>
      <img
        className={classes.backdrop}
        alt="Movie Backdrop"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
      />
      <img
        className={classes.poster}
        alt="Movie Poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
      <div className={classes.details}>
        <h1 className={classes.heading}>{movie.title}</h1>
        <div>
          <span className={classes.info}>Rating: {movie.vote_average}/10</span>
          <span className={classes.info}>
            Release: {movie.release_date.slice(0, 4)}
          </span>
        </div>
        <p className={classes.overview}>{movie.overview}</p>
        <div>
          <a className={`${classes.btn} ${classes["btn--play"]}`} href="#s">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-controller-play"></use>
            </svg>
            <span className={classes["btn__text"]}>Play now</span>
          </a>
          <a className={`${classes.btn} ${classes["btn--info"]}`} href="#s">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-info-with-circle"></use>
            </svg>
            <span className={classes["btn__text"]}>view info</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default BannerItem;
