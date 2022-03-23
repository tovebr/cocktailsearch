import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchCocktails } from "../../actions";
import CocktailsList from "../CocktailsList";
import "./componentA.css";

const ComponentA = ({ fetchCocktails, drinks, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      searchTerm && fetchCocktails(searchTerm);
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [searchTerm, fetchCocktails]);

  console.log(isLoading);
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
        {isLoading ? <div>Loading...</div> : <CocktailsList drinks={drinks} />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { drinks: state.drinks.drinks, isLoading: state.drinks.isLoading };
};

export default connect(mapStateToProps, { fetchCocktails })(ComponentA);
