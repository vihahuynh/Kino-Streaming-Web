import React from "react";
import classes from "./logo.module.css";

const Logo = () => {
  return (
    <img
      className={classes.logo}
      alt="Logo"
      src={`${process.env.PUBLIC_URL}/logo.png`}
    />
  );
};

export default Logo;
