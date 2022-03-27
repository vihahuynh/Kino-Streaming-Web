import React from "react";
import classes from "./loading.module.css";

const Loading = ({ height }) => {
  return (
    <div className={classes.loading} style={{ height: height }}>
      <svg className={classes.loading__icon}>
        <use xlinkHref="images/sprite.svg#icon-spinner6"></use>
      </svg>
    </div>
  );
};

export default Loading;
