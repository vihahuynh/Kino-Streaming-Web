import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterChange } from "../../reducers/search";

import classes from "./search.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleChangeFilter = (e) => {
    dispatch(filterChange(e.target.value));
  };

  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        type="search"
        id="gsearch"
        name="gsearch"
        placeholder="Search"
        value={filter}
        onChange={handleChangeFilter}
      />
    </div>
  );
};

export default SearchBar;
