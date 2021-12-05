import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

import classes from "./navigation.module.css";

const Navigation = () => {
  return (
    // tmp
    <BrowserRouter className={classes.nav}>
      <ul>
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
    </BrowserRouter>
  );
};

export default Navigation;
