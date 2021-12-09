import axios from "axios";

const REACT_APP_API_URL = "https://api.themoviedb.org/3";
const REACT_APP_API_KEY = "542875e8fd0a4ee32531acb890171761";

const getmovieCarousel = (mediaType, query) => {
  const url = `${REACT_APP_API_URL}/${mediaType}/${query}?api_key=${REACT_APP_API_KEY}`;
  const request = axios.get(url);
  return request
    .then((reponse) => reponse?.data?.results)
    .catch((err) => {
      throw err;
    });
};

const getMovieDetails = (mediaType, id) => {
  const url = `${REACT_APP_API_URL}/${mediaType}/${id}?api_key=${REACT_APP_API_KEY}`;
  const request = axios.get(url);
  return request
    .then((response) => response?.data)
    .catch((err) => {
      throw err;
    });
};

const getSimilarMovies = (mediaType, id) => {
  const url = `${REACT_APP_API_URL}/${mediaType}/${id}/similar?api_key=${REACT_APP_API_KEY}`;
  const request = axios.get(url);
  return request
    .then((response) => response?.data?.results)
    .catch((err) => {
      throw err;
    });
};

const getRecommendMovies = (mediaType, id) => {
  const url = `${REACT_APP_API_URL}/${mediaType}/${id}/recommendations?api_key=${REACT_APP_API_KEY}`;
  const request = axios.get(url);
  return request
    .then((response) => response?.data?.results)
    .catch((err) => {
      throw err;
    });
};

const getMovieCredits = (mediaType, id) => {
  const url = `${REACT_APP_API_URL}/${mediaType}/${id}/credits?api_key=${REACT_APP_API_KEY}`;
  const request = axios.get(url);
  return request
    .then((response) => response?.data?.cast)
    .catch((err) => {
      throw err;
    });
};

const services = {
  getmovieCarousel,
  getMovieDetails,
  getSimilarMovies,
  getRecommendMovies,
  getMovieCredits,
};

export default services;
