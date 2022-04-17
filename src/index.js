import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import App from "./App";

import "./index.css";

import movieReducer from "./reducers/movie";
import searchReducer from "./reducers/search";
const reducer = combineReducers({ movie: movieReducer, search: searchReducer });
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
