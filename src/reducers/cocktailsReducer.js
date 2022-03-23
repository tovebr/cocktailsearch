// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { drinks: [], isLoading: false }, action) => {
  switch (action.type) {
    case "FETCH_COCKTAILS_START":
      return { ...state, isLoading: true };
    case "FETCH_COCKTAILS_SUCCESS":
      const { drinks } = action.payload;
      return { ...state, drinks: drinks, isLoading: false };
    default:
      return state;
  }
};
