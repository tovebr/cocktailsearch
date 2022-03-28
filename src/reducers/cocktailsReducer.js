// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { drinks: [], isLoading: false }, action) => {
  switch (action.type) {
    case 'FETCH_COCKTAILS_START':
      return { ...state, isLoading: true };
    case 'FETCH_COCKTAILS_SUCCESS':
      const { drinks } = action.payload;
      return {
        ...state,
        drinks: drinks,
        isLoading: false,
      };
    case 'SET_COCKTAILS':
      return {
        ...state,
        drinks: action.payload,
        isLoading: false,
      };
    case 'REMOVE_DISLIKED': {
      return {
        ...state,
        drinks: state.drinks.filter((drink) => drink !== action.payload),
      };
    }
    case 'MOVE_BACK_UNDISLIKED': {
      return {
        ...state,
        drinks: [action.payload, ...state.drinks],
      };
    }
    default:
      return state;
  }
};
