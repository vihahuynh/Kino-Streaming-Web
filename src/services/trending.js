// https://api.themoviedb.org/3/trending/movie/week?api_key=542875e8fd0a4ee32531acb890171761

import axios from "axios";
require("dotenv").config();

const getTrending = (type, time) => {
  const url = `${process.env.REACT_APP_API_URL}/trending/${type}/${time}?api_key=${process.env.REACT_APP_API_KEY}`;
  const request = axios.get(url);
  return request
    .then((reponse) => reponse?.data?.results)
    .catch((err) => {
      throw err;
    });
};

const services = { getTrending };

export default services;
