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
  console.log("action");
  return {
    type: "SET_COCKTAILS",
    payload: prewiousResult,
  };
};
