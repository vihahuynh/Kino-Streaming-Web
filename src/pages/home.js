import React from "react";
import Banner from "../components/banner/banner";
import MovieList from "../components/movies/movieList";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="all-lists">
        <MovieList name="Popular movies" type="popular" />
        <MovieList name="Top rated movies" type="top_rated" />
        <MovieList name="Trending movies" trending={true} />
      </div>
    </>
  );
};

export default Home;
