import React, { useEffect, useState } from "react";
import movieServices from "../../services/movies";
import MovieItem from "./movieItem";
import Slider from "react-slick";

import classes from "./movieList.module.css";
import NextArrow from "../arrows/nextArrow";
import PrevArrow from "../arrows/prevArrow";

// const setti

var settings = {
  infinite: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerPadding: 0,
  swipeToSlide: true,
  pauseOnHover: true,
  speed: 600,
  nextArrow: <NextArrow size="small" />,
  prevArrow: <PrevArrow size="small" />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const MovieList = ({ name, type }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieServices.getMovieList(type);
      setMovies(response);
    };

    fetchMovies();
  }, [type]);

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{name}</h2>

      <Slider {...settings} className={classes.list}>
        {movies.slice(0, 18).map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Slider>
      {/* <div className={classes.list}>
        
      </div> */}
    </div>
  );
};

export default MovieList;
