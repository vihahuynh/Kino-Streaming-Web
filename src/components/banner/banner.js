import React, { useEffect, useState } from "react";
import movieServices from "../../services/movies";
import classes from "./banner.module.css";

import { Carousel } from "react-bootstrap";
import BannerItem from "./bannerItem";
import NextArrow from "../ui/arrows/nextArrow";
import PrevArrow from "../ui/arrows/prevArrow";
import Loading from "../ui/loading/loading";

const Banner = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await movieServices.getMovieCarousel(
          "movie",
          "popular"
        );
        setMovies(response);
      } catch (err) {
        console.log(err.message);
      }
      setTimeout(() => setIsLoading(false), 300);
    };
    fetchMovies();
  }, []);

  if (isLoading) return <Loading height="100vh" />;

  return (
    <div className={classes.banner}>
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
