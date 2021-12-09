import React from "react";
import MovieCarousel from "../components/movies/movieCarousel/movieCarousel";
import Banner from "../components/banner/banner";
import Wrapper from "../components/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <Banner />
      <div className="all-lists">
        <MovieCarousel name="Popular movies" query="popular" />
        <MovieCarousel name="Top rated movies" query="top_rated" />
        <MovieCarousel name="Trending movies" trending={true} />

        <MovieCarousel name="Popular TV shows" movie={false} query="popular" />
        <MovieCarousel
          name="Top rated TV shows"
          movie={false}
          query="top_rated"
        />
        <MovieCarousel name="Trending TV shows" movie={false} trending={true} />
      </div>
    </Wrapper>
  );
};

export default Home;
