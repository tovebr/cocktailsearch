// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_COCKTAILS":
      const { drinks } = action.payload;
      return drinks;
    default:
      return state;
  }
};
