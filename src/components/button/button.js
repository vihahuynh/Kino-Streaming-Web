import React from "react";
import { Link } from "react-router-dom";

import classes from "./button.module.css";

const Button = ({ link, text }) => {
  return (
    <Link className={classes.btn} to={link}>
      <p className={classes.btn__text}>{text}</p>
    </Link>
  );
};

export default Button;
