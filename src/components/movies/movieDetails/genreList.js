import React from "react";

import classes from "./genreList.module.css";

const GenreList = ({ genres }) => {
  return (
    <>
      <ul className={classes.genres}>
        {genres.map((genre) => (
          <li className={classes.genres__item} key={genre.id}>
            {genre.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
