import React, { useEffect, useState } from "react";
import MovieCarousel from "../components/movies/movieCarousel/movieCarousel";
import Banner from "../components/banner/banner";
import Wrapper from "../components/layouts/wrapper/wrapper";
import movieServices from "../services/movies";
import trendingServices from "../services/trending";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allRequests = await Promise.allSettled([
          movieServices.getMovieCarousel("movie", "popular"),
          movieServices.getMovieCarousel("movie", "top_rated"),
          trendingServices.getTrending("movie", "week"),
          movieServices.getMovieCarousel("tv", "popular"),
          movieServices.getMovieCarousel("tv", "top_rated"),
          trendingServices.getTrending("tv", "week"),
        ]);
        console.log(allRequests);
        setData(allRequests);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  const [
    popularMovies,
    topRatedMovies,
    trendingMovies,
    popularTV,
    topRatedTV,
    trendingTV,
  ] = data;

  return (
    <Wrapper>
      <Banner />
      <div className="all-lists">
        <MovieCarousel name="Popular movies" movies={popularMovies?.value} />
        <MovieCarousel name="Top rated movies" movies={topRatedMovies?.value} />
        <MovieCarousel name="Trending movies" movies={trendingMovies?.value} />
        <MovieCarousel name="Popular TV shows" movies={popularTV?.value} />
        <MovieCarousel name="Top rated TV shows" movies={topRatedTV?.value} />
        <MovieCarousel name="Trending TV shows" movies={trendingTV?.value} />
      </div>
    </Wrapper>
  );
};

export default Home;
