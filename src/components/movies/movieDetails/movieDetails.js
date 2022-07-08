import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import movieServices from "../../../services/movies";
import CastGrid from "../../cast/castGrid";
import Video from "../../video/video";
import MovieList from "../movieList/movieList";
import GenreList from "./genreList";
import Stars from "../../ui/stars/stars";
import Reviews from "../../reviews/reviews";
import SeasonList from "../movieList/seasonList";
import BackgroundImg from "../../ui/backgroundImg/backgroundImg";

import classes from "./movieDetails.module.css";

const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState(null);
  const [ep, setEp] = useState(null);
  const mediaType = useLocation().pathname.split("/")[1];
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const season = queryParams.get("season");
  const episode = queryParams.get("episode");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await movieServices.getMovieDetails(
          mediaType === "movies" ? "movie" : "tv",
          id
        );
        setMovie(response);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchMovie();
  }, [id, mediaType]);

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const response = await movieServices.getEpisodeDetails(
          id,
          season,
          episode
        );
        setEp(response);
      } catch (err) {
        console.log(err.message);
      }
    };
    if (mediaType === "tvshows") fetchEpisode();
  }, [mediaType, setEp, season, episode, id]);

  if (!movie) return <p>Movie not found</p>;

  const src =
    mediaType === "movies"
      ? `https://2embed.org/embed/${id}`
      : `https://2embed.org/embed/${id}/${season || "1"}/${episode || "1"}`;

  return (
    <div className={classes.container}>
      <div className={classes.movie}>
        <div className={classes.movie__video}>
          <Video id={id} src={src} />
        </div>

        <div className={classes.movie__details}>
          <h2>{ep?.name || movie.title}</h2>
          <p>
            {mediaType === "movies" && <span>{movie.runtime} minutes</span>}
            <span>Published on {ep?.air_date || movie.release_date}</span>
          </p>
          <Stars rating={ep?.vote_average || movie.vote_average} />
          <p>{ep?.overview || movie.overview}</p>
          <GenreList genres={movie.genres} />
        </div>

        <div className={classes.movie__cast}>
          <CastGrid id={movie.id} mediaType={mediaType} />
        </div>

        <div className={classes.movie__reviews}>
          <Reviews
            mediaType={mediaType === "movies" ? "movie" : "tv"}
            id={movie.id}
          />
        </div>

        {mediaType === "movies" && (
          <div className={classes.movie__recommends}>
            <MovieList id={id} mediaType={mediaType} />
          </div>
        )}

        {mediaType === "tvshows" && (
          <div className={classes.movie__recommends}>
            <SeasonList seasons={movie.seasons} />
          </div>
        )}
      </div>

      <BackgroundImg
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      />
    </div>
  );
};

export default MovieDetails;
