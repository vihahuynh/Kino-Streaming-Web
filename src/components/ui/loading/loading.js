import React from "react";
import classes from "./loading.module.css";

const Loading = ({ height }) => {
  return (
    <div className={classes.loading} style={{ height: height }}>
      <svg className={classes.loading__icon}>
        <use
          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-spinner6`}
        ></use>
      </svg>
    </div>
  );
};

export default Loading;
