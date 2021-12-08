import React from "react";
import classes from "./iconItem.module.css";

const IconItem = ({ icon }) => {
  return (
    <a className={classes.icon__container} href="/">
      <svg className={classes.icon}>
        <use xlinkHref={`/images/sprite.svg#${icon}`}></use>
      </svg>
    </a>
  );
};

export default IconItem;
