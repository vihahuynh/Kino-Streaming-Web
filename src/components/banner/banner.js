import React, { useEffect, useState } from "react";
import movieServices from "../../services/movies";
import classes from "./banner.module.css";

import { Carousel } from "react-bootstrap";
import BannerItem from "./bannerItem";
import Navigation from "../navigation";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieServices.getMovieList("popular");
      setMovies(response);
    };
    fetchMovies();
  }, []);

  return (
    <div className={classes.banner}>
      <img className={classes.logo} alt="Logo" src="/images/logo.png" />
      <div className={classes.nav}>
        <Navigation />
      </div>

      <Carousel
        nextIcon={
          <span aria-hidden="true">
            <svg className={classes["carousel-arrow"]}>
              <use xlinkHref="/images/sprite.svg#icon-chevron-right"></use>
            </svg>
          </span>
        }
        prevIcon={
          <span aria-hidden="true">
            <svg className={classes["carousel-arrow"]}>
              <use xlinkHref="/images/sprite.svg#icon-chevron-left"></use>
            </svg>
          </span>
        }
      >
        {movies.map((movie) => (
          <Carousel.Item interval={2000} key={movie.id}>
            <BannerItem movie={movie} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
