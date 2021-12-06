import React, { useEffect, useState } from "react";
import movieServices from "../../services/movies";
import classes from "./banner.module.css";

import { Carousel } from "react-bootstrap";
import BannerItem from "./bannerItem";
import Navigation from "../navigation";
import NextArrow from "../arrows/nextArrow";
import PrevArrow from "../arrows/prevArrow";

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
        nextIcon={<NextArrow size="large" />}
        prevIcon={<PrevArrow size="large" />}
      >
        {movies.map((movie) => (
          <Carousel.Item interval={2500} key={movie.id}>
            <BannerItem movie={movie} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
