import React from "react";
import CocktailItem from "./CocktailItem";

const CocktailsList = ({ drinks }) => {
  const drinksLimit = 3;
  const renderCocktails = () => {
    return drinks.length > 0
      ? drinks.map((drink) => (
          <CocktailItem key={drink.idDrink} cocktail={drink} />
        ))
      : null;
  };

  return (
    <table>
      <tbody>
        <tr className='table-headers'>
          <th>Name</th>
          <th>Percentage</th>
          <th>Instructions</th>
        </tr>
        {renderCocktails()}
      </tbody>
    </table>
  );
};

export default CocktailsList;
