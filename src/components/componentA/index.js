import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchCocktails, setCocktails } from '../../actions';
import CocktailsList from '../CocktailsList';
import './componentA.css';

const ComponentA = ({ fetchCocktails, drinks, isLoading, searchHistory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchHistory[searchTerm]) {
      dispatch(setCocktails(searchHistory[searchTerm]));
    } else {
      const timeOutId = setTimeout(() => {
        searchTerm && fetchCocktails(searchTerm.toLocaleLowerCase());
      }, 1000);
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [searchTerm]);

  return (
    <div className='component component-a'>
      <div className='search'>
        <h1 className='header'>Cocktail Search!</h1>
        <input
          type='text'
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder='start typing to search...'
        ></input>
      </div>
      <div className='cocktail-list'>
        {isLoading && <div>Loading...</div>}
        {!isLoading && drinks && <CocktailsList drinks={drinks} />}
        {!isLoading && !drinks && searchTerm && (
          <p className='error-message'>No results found, try again!</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    drinks: state.drinks.drinks,
    isLoading: state.drinks.isLoading,
    searchHistory: state.searchHistory,
  };
};

export default connect(mapStateToProps, { fetchCocktails, setCocktails })(
  ComponentA
);
