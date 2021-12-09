import React from "react";
import classes from "./video.module.css";

const Video = ({ id }) => {
  const src = `https://www.2embed.ru/embed/tmdb/movie?id=${id}`;
  return (
    <div className={classes.video}>
      <iframe title={id} src={src} frameBorder="0" allowFullScreen />
    </div>
  );
};

export default Video;
