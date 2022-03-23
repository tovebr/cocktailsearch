// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case "ADD_DISLIKED":
      return [...state, action.payload];
    case "UNDISLIKE":
      return [...state.filter((item) => item !== action.payload)];
    default:
      return state;
  }
};
