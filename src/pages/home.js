import React from "react";
import Banner from "../components/banner/banner";
import MovieList from "../components/movies/movieList";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="all-lists">
        <MovieList name="Popular movies" query="popular" />
        <MovieList name="Top rated movies" query="top_rated" />
        <MovieList name="Trending movies" trending={true} />

        <MovieList name="Popular TV shows" movie={false} query="popular" />
        <MovieList name="Top rated TV shows" movie={false} query="top_rated" />
        <MovieList name="Trending TV shows" movie={false} trending={true} />
      </div>
    </>
  );
};

export default Home;
