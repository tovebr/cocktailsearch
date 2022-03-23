/* import cocktailsdb from "../apis/cocktailsdb"; */

export const fetchCocktails = (searchTerm) => {
  return async function (dispatch, getState) {
    dispatch({ type: "FETCH_COCKTAILS_START" });
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    ).then((res) => res.json());

    dispatch({ type: "FETCH_COCKTAILS_SUCCESS", payload: response });
    dispatch({
      type: "UPDATE_SEARCH_HISTORY",
      payload: { response, searchTerm },
    });
  };
};

export const setCocktails = (prewiousResult) => {
  return {
    type: "SET_COCKTAILS",
    payload: prewiousResult,
  };
};
export const dislikeCocktail = (drink) => {
  return {
    type: "ADD_DISLIKED",
    payload: drink,
  };
};
export const unDislikeCocktail = (drink) => {
  return {
    type: "UNDISLIKE",
    payload: drink,
  };
};
export const removeDislikedFromA = (drink) => {
  return {
    type: "REMOVE_DISLIKED_FROM_A",
    payload: drink,
  };
};
export const moveBackUndisliked = (drink) => {
  return {
    type: "MOVE_BACK_UNDISLIKED",
    payload: drink,
  };
};
