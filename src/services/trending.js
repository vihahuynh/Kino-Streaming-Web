// https://api.themoviedb.org/3/trending/movie/week?api_key=542875e8fd0a4ee32531acb890171761

import axios from "axios";

const REACT_APP_API_URL = "https://api.themoviedb.org/3";
const REACT_APP_API_KEY = "708b423e5fbe3220345becb8cce7ea7f";

const getTrending = (mediaType, time) => {
  const url = `${REACT_APP_API_URL}/trending/${mediaType}/${time}?api_key=${REACT_APP_API_KEY}`;
  const request = axios.get(url);
  return request
    .then((reponse) => reponse?.data?.results)
    .catch((err) => {
      throw err;
    });
};

const services = { getTrending };

export default services;
