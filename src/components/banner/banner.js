import React, { useEffect, useState } from "react";
import movieServices from "../../services/movies";

import { Carousel } from "react-bootstrap";
import BannerItem from "./bannerItem";

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
    <Carousel>
      {movies.map((movie) => (
        <Carousel.Item interval={2000} key={movie.id} nextIcon prevIcon>
          <BannerItem movie={movie} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
