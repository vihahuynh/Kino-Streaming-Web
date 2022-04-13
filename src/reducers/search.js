const init = {
  filter: "",
};

const searchReducer = (state = init, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return { filter: action.filter };
    case "SET_DEFAULT":
      return init;
    default:
      return init;
  }
};

export const filterChange = (filter) => {
  return {
    type: "SET_FILTER",
    filter,
  };
};

export const filterRemove = () => {
  return { type: "SET_DEFAULT", filter: "" };
};

export default searchReducer;
