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
    <div className={classes["cast-container"]}>
      <h5>Cast</h5>
      <ul className={classes["cast-list"]}>
        {cast.slice(0, 6).map((c) => (
          <CastItem key={cast.id} cast={c} />
        ))}
      </ul>
    </div>
  );
};

export default CastGrid;
