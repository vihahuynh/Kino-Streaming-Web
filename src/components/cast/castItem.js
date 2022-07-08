import React from "react";
import { Link } from "react-router-dom";

import classes from "./castItem.module.css";

const CastItem = ({ cast }) => {
  return (
    <li>
      <Link className={classes.cast} to={`/person/${cast.id}`}>
        <img
          className={classes.cast__image}
          alt="Cast"
          src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
        />
        <div className={classes.cast__details}>
          <h5>{cast.name}</h5>
          <p>as {cast.character}</p>
        </div>
      </Link>
    </li>
  );
};

export default CastItem;
