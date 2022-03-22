import React from "react";

const CocktailItem = ({ cocktail }) => {
  return (
    <tr id={cocktail.idDrink}>
      <td>{cocktail.strDrink}</td>
      <td>{cocktail.strMeasure1}</td>
      <td>{cocktail.strInstructions}</td>
    </tr>
  );
};

export default CocktailItem;
