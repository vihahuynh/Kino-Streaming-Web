import axios from "axios";
require("dotenv").config();

const getMovieList = (mediaType, query) => {
  const url = `${process.env.REACT_APP_API_URL}/${mediaType}/${query}?api_key=${process.env.REACT_APP_API_KEY}`;
  const request = axios.get(url);
  return request
    .then((reponse) => reponse?.data?.results)
    .catch((err) => {
      throw err;
    });
};

const getMovieDetails = (mediaType, id) => {
  const url = `${process.env.REACT_APP_API_URL}/${mediaType}/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
  const request = axios.get(url);
  return request
    .then((response) => response?.data?.results)
    .catch((err) => {
      throw err;
    });
};

const getSimilarMovies = (mediaType, id) => {
  const url = `${process.env.REACT_APP_API_URL}/${mediaType}/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`;
  const request = axios.get(url);
  return request
    .then((response) => response?.data?.results)
    .catch((err) => {
      throw err;
    });
};

const getRecommendMovies = (mediaType, id) => {
  const url = `${process.env.REACT_APP_API_URL}/${mediaType}/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`;
  const request = axios.get(url);
  return request
    .then((response) => response?.data?.results)
    .catch((err) => {
      throw err;
    });
};

const getMovieCredits = (mediaType, id) => {
  const url = `${process.env.REACT_APP_API_URL}/${mediaType}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`;
  const request = axios.get(url);
  return request
    .then((response) => response?.data?.results)
    .catch((err) => {
      throw err;
    });
};

const services = {
  getMovieList,
  getMovieDetails,
  getSimilarMovies,
  getRecommendMovies,
  getMovieCredits,
};

export default services;
