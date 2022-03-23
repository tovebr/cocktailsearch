import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchCocktails } from "../../actions";
import CocktailsList from "../CocktailsList";
import "./componentA.css";

const ComponentA = ({ fetchCocktails, drinks }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      searchTerm && fetchCocktails(searchTerm);
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [searchTerm, fetchCocktails]);

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
        <CocktailsList drinks={drinks} />
      </div>
    </div>
  );
};
/* class ComponentA extends React.Component {
  componentDidMount() {
    this.props.fetchCocktails();
  }
  render() {
    return (
      <div className='component'>
        <div className='search'>
          <h1>Cocktail Search!</h1>
          <input type='text' placeholder='start typing to search...'></input>
        </div>
        <div className='cocktail-list'>
          <p>Cosmo</p>
          <p>GT</p>
          <p>Screwdriver</p>
        </div>
      </div>
    );
  }
} */

const mapStateToProps = (state) => {
  console.log(state);
  return { drinks: state.drinks };
};

export default connect(mapStateToProps, { fetchCocktails })(ComponentA);
