import React from "react";
import classes from "./video.module.css";

const Video = ({ id, src }) => {
  return (
    <div className={classes.video}>
      <iframe title={id} src={src} frameBorder="0" allowFullScreen />
    </div>
  );
};

export default Video;
