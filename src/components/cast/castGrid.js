import React, { useEffect, useState } from "react";
import movieService from "../../services/movies";
import CastItem from "./castItem";

import classes from "./castGrid.module.css";
import { useSelector } from "react-redux";

const CastGrid = ({ id }) => {
  const mediaType = useSelector((state) => state.movie.mediaType);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await movieService.getMovieCredits(
          mediaType ? "movie" : "tv",
          id
        );
        setCast(response);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchCast();
  }, [mediaType, id]);

  return (
    <div className={classes["cast-container"]}>
      <h5>Cast</h5>
      <ul className={classes["cast-list"]}>
        {cast.slice(0, 6).map((c) => (
          <CastItem key={c.id} cast={c} />
        ))}
      </ul>
    </div>
  );
};

export default CastGrid;
