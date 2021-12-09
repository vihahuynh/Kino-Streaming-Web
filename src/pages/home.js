import React from "react";
import MovieList from "../components/movies/movieList/movieList";
import Banner from "../components/banner/banner";
import Wrapper from "../components/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <Banner />
      <div className="all-lists">
        <MovieList name="Popular movies" query="popular" />
        <MovieList name="Top rated movies" query="top_rated" />
        <MovieList name="Trending movies" trending={true} />

        <MovieList name="Popular TV shows" movie={false} query="popular" />
        <MovieList name="Top rated TV shows" movie={false} query="top_rated" />
        <MovieList name="Trending TV shows" movie={false} trending={true} />
      </div>
    </Wrapper>
  );
};

export default Home;
