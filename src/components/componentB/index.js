import React from 'react';
import { connect } from 'react-redux';

import CocktailsList from '../CocktailsList';

const ComponentB = ({ disliked }) => {
  if (disliked.length > 0) {
    return (
      <div className='component component-b'>
        <h3 className='header'>Bad Cocktails</h3>
        <div className='cocktail-list'>
          {disliked.length > 0 && (
            <CocktailsList drinks={disliked} status='disliked' />
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return { disliked: state.disliked };
};

export default connect(mapStateToProps, {})(ComponentB);
