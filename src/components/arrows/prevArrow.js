import React from "react";
import classes from "./arrow.module.css";

const PrevArrow = (props) => {
  const styles =
    props.size === "large"
      ? classes["arrow--large"]
      : `${classes["arrow--small"]} ${classes["arrow--left"]}`;

  return (
    <div
      className={classes.container}
      aria-hidden="true"
      onClick={props.onClick}
    >
      <svg className={styles}>
        <use xlinkHref="%PUBLIC_URL%/sprite.svg#icon-chevron-left"></use>
      </svg>
    </div>
  );
};

export default PrevArrow;
