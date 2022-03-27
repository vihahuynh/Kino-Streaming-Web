import React from "react";
import classes from "./largeMessage.module.css";

const LargeMessage = ({ message }) => {
  return (
    <div className={classes.container}>
      <div className={classes.message__container}>
        <p className={classes.message}>{message}</p>
      </div>
    </div>
  );
};

export default LargeMessage;
