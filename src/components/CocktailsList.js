import React from 'react';
import CocktailItem from './CocktailItem';

import './CocktailsList.css';

const CocktailsList = ({ drinks, status }) => {
  const drinksLimit = 3;
  const cocktailsUI = drinks.map(
    (drink, i) =>
      i < drinksLimit && (
        <CocktailItem key={drink.idDrink} cocktail={drink} status={status} />
      )
  );

  if (drinks.length > 0) {
    return (
      <React.Fragment>
        {status !== 'disliked' && <h3 className='header'>Cocktails</h3>}
        <table>
          <tbody>
            <tr className='table-headers'>
              <th>Name</th>
              <th className='percentage'>Percentage</th>
              <th>Instructions</th>
              <th></th>
            </tr>
            {cocktailsUI}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
  return <div></div>;
};

export default CocktailsList;
