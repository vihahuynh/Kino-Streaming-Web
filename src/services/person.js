import axios from "axios";

const REACT_APP_API_URL = "https://api.themoviedb.org/3";
const REACT_APP_API_KEY = "708b423e5fbe3220345becb8cce7ea7f";

const getPersonInfo = (id) => {
  const url = `${REACT_APP_API_URL}/person/${id}?api_key=${REACT_APP_API_KEY}`;
  const request = axios.get(url);
  return request
    .then((reponse) => reponse?.data?.results)
    .catch((err) => {
      throw err;
    });
};

const getPersonCredits = (id, mediaType) => {
  const url = `${REACT_APP_API_URL}/person/${id}/${mediaType}_credits?api_key=${REACT_APP_API_KEY}`;
  const request = axios.get(url);
  return request
    .then((reponse) => reponse?.data?.results)
    .catch((err) => {
      throw err;
    });
};

const getPersonImages = (id) => {
  const url = `${REACT_APP_API_URL}/person/${id}/images?api_key=${REACT_APP_API_KEY}`;
  const request = axios.get(url);
  return request
    .then((reponse) => reponse?.data?.results)
    .catch((err) => {
      throw err;
    });
};

const services = {
  getPersonInfo,
  getPersonCredits,
  getPersonImages,
};

export default services;
