import { useState, useEffect } from "react";
import classes from "./movieListItem.module.css";
import movieServices from "../../../services/movies";
import { useSelector } from "react-redux";
import MovieListItem from "./movieListItem";

const SeasonItem = ({ season }) => {
  const [seasonNumber, setSeasonNumber] = useState(0);
  const [episodes, setEpisodes] = useState([]);
  const id = useSelector((state) => state.movie.movie.id);

  const handleChangeSeason = (number) => {
    setSeasonNumber((prevSeason) => (prevSeason === number ? 0 : number));
  };

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        if (seasonNumber === 0) {
          setEpisodes([]);
        } else {
          const response = await movieServices.getSeasonEpisodes(
            id,
            seasonNumber
          );
          setEpisodes(response.episodes);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchEpisodes();
  }, [id, seasonNumber]);

  return (
    <li className={classes["movie-container"]}>
      <div
        className={classes.movie}
        onClick={() => handleChangeSeason(season.season_number)}
      >
        <img
          className={classes.movie__image}
          alt=""
          src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
        />
        <div className={classes.movie__details}>
          <h5>{season.title || season.name}</h5>
          <p>
            <span>Release: {season.air_date?.slice(0, 4)}</span>
          </p>
        </div>
        <svg className={classes.movie__icon}>
          <use
            xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-arrow-long-right`}
          ></use>
        </svg>
      </div>
      {episodes.length > 0 && (
        <ul className={classes["episode-container"]}>
          {episodes.map((ep) => (
            <MovieListItem key={ep.id} movie={ep} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default SeasonItem;
