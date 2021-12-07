import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

import classes from "./navigation.module.css";

const Navigation = () => {
  return (
    // tmp
    <ul className={classes.nav}>
      <li>
        <NavLink className={classes["nav__item"]} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={classes["nav__item"]} to="/movies">
          Movies
        </NavLink>
      </li>
      <li>
        <NavLink className={classes["nav__item"]} to="/tvshows">
          tv shows
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
