import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import movieService from "../../services/movies";
import CastItem from "./castItem";

import classes from "./castGrid.module.css";

const CastGrid = ({ id }) => {
  const mediaType = useLocation().pathname.split("/")[1];
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await movieService.getMovieCredits(
          mediaType === "movies" ? "movie" : "tv",
          id
        );
        setCast(response);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchCast();
  }, [mediaType, id]);

  if (!cast.length) return null;

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
