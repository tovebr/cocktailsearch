/* import cocktailsdb from "../apis/cocktailsdb"; */

export const fetchCocktails = (searchTerm) => {
  return async function (dispatch, getState) {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    ).then((res) => res.json());

    dispatch({ type: "FETCH_COCKTAILS", payload: response });
  };
};
