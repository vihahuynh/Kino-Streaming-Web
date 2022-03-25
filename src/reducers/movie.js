const init = {
  mediaType: true,
  movie: null,
};

const movieReducer = (state = init, action) => {
  switch (action.type) {
    case "SET_MOVIE":
      return {
        ...state,
        movie: action.data,
      };
    case "SET_MEDIA_TYPE":
      return {
        ...state,
        mediaType: action.data,
      };
    default:
      return state;
  }
};

export const movieChange = (movie) => {
  return {
    type: "SET_MOVIE",
    data: movie,
  };
};

export const mediaTypeChange = (mediaType) => {
  return {
    type: "SET_MEDIA_TYPE",
    data: mediaType,
  };
};

export default movieReducer;
