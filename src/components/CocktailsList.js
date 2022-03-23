import React from "react";
import CocktailItem from "./CocktailItem";

import "./CocktailsList.css";

const CocktailsList = ({ drinks }) => {
  const drinksLimit = 3;
  const renderCocktails = () => {
    return drinks.length > 0
      ? drinks.map(
          (drink, i) =>
            i < drinksLimit && (
              <CocktailItem key={drink.idDrink} cocktail={drink} />
            )
        )
      : null;
  };

  if (drinks.length > 0) {
    return (
      <React.Fragment>
        <h3 className='header'>Cocktails</h3>
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
      </React.Fragment>
    );
  }
  return <div></div>;
};

export default CocktailsList;
