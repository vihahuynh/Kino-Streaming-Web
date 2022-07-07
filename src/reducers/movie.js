const init = {
  movie: null,
};

const movieReducer = (state = init, action) => {
  switch (action.type) {
    case "SET_MOVIE":
      return {
        ...state,
        movie: action.data,
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

export default movieReducer;
