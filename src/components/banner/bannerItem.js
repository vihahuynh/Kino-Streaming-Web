import React from "react";
import classes from "./bannerItem.module.css";
import { Link } from "react-router-dom";

const BannerItem = ({ movie }) => {
  let shortOverview = movie.overview.split(" ").slice(0, 30).join(" ");
  shortOverview = shortOverview.slice(-1).includes(".")
    ? shortOverview
    : `${shortOverview}...`;

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
          <span className={classes.info}>{movie.vote_average}/10</span>
          <span className={classes.info}>
            <svg>
              <use xlinkHref="/sprite.svg#icon-dot-single"></use>
            </svg>
          </span>
          <span className={classes.info}>{movie.release_date.slice(0, 4)}</span>
        </div>
        <p className={classes.overview}>{shortOverview}</p>
        <div>
          <Link
            className={`${classes.btn} ${classes["btn--play"]}`}
            to={`/movies/${movie.id}`}
          >
            <svg>
              <use xlinkHref="/sprite.svg#icon-controller-play"></use>
            </svg>
            <span className={classes["btn__text"]}>Play now</span>
          </Link>
          {/* <a className={`${classes.btn} ${classes["btn--info"]}`} href="/">
            <svg>
              <use xlinkHref="/sprite.svg#icon-info-with-circle"></use>
            </svg>
            <span className={classes["btn__text"]}>view info</span>
          </a> */}
        </div>
      </div>
    </>
  );
};

export default BannerItem;
