import axios from "axios";

const REACT_APP_API_URL = "https://api.themoviedb.org/3";
const REACT_APP_API_KEY = "542875e8fd0a4ee32531acb890171761";

const search = (mediaType, query) => {
  const url = `${REACT_APP_API_URL}/search/${mediaType}?api_key=${REACT_APP_API_KEY}&query=${query}&page=1`;
  const request = axios.get(url);
  return request
    .then((reponse) => reponse?.data?.results)
    .catch((err) => {
      throw err;
    });
};

const services = {
  search,
};

export default services;
