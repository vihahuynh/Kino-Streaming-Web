import React, { useEffect, useState } from "react";
import movieService from "../../services/movies";
import CastItem from "./castItem";

import classes from "./castGrid.module.css";

const CastGrid = ({ movie = true, id }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const response = await movieService.getMovieCredits(
        movie ? "movie" : "tv",
        id
      );
      setCast(response);
    };
    fetchCast();
  }, [movie, id]);

  return (
    <ul className={classes["cast-container"]}>
      {cast.slice(0, 6).map((c) => (
        <CastItem key={cast.id} cast={c} />
      ))}
    </ul>
  );
};

export default CastGrid;
