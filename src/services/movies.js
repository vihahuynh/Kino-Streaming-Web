import axios from "axios";
require("dotenv").config();

const getMovieList = (type) => {
  const url = `${process.env.REACT_APP_API_URL}/movie/${type}?api_key=${process.env.REACT_APP_API_KEY}`;
  const request = axios.get(url);
  return request
    .then((reponse) => reponse?.data?.results)
    .catch((err) => {
      throw err;
    });
};

const services = { getMovieList };

export default services;
