import React from "react";
import Banner from "../components/banner/banner";
import MovieList from "../components/movies/movieList";

const Home = () => {
  return (
    <>
      <Banner />
      <MovieList name="Popular movies" type="popular" />
    </>
  );
};

export default Home;
