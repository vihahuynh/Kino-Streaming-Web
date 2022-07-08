import React from "react";
import classes from "./arrow.module.css";

const NextArrow = (props) => {
  const styles =
    props.size === "large"
      ? classes["arrow--large"]
      : `${classes["arrow--small"]} ${classes["arrow--right"]}`;

  return (
    <div
      className={classes.container}
      aria-hidden="true"
      onClick={props.onClick}
    >
      <svg className={styles}>
        <use
          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-chevron-right`}
        ></use>
      </svg>
    </div>
  );
};

export default NextArrow;
