// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH_HISTORY": {
      const { response, searchTerm } = action.payload;
      const { drinks } = response;
      return { ...state, [searchTerm]: drinks };
    }
    default:
      return state;
  }
};
