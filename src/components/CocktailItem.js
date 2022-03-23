import React from "react";
import { connect, useDispatch } from "react-redux";
import { BiDislike, BiLike } from "react-icons/bi";
import {
  dislikeCocktail,
  unDislikeCocktail,
  removeDislikedFromA,
  moveBackUndisliked,
} from "../actions";
import "./CocktailItem.css";

const CocktailItem = ({ cocktail, status }) => {
  const dispatch = useDispatch();

  const handleDislikeClick = () => {
    if (status !== "disliked") {
      dispatch(dislikeCocktail(cocktail));
      dispatch(removeDislikedFromA(cocktail));
    } else {
      dispatch(unDislikeCocktail(cocktail));
      dispatch(moveBackUndisliked(cocktail));
    }
  };

  return (
    <tr id={cocktail.idDrink}>
      <td>{cocktail.strDrink}</td>
      <td>{cocktail.strMeasure1}</td>
      <td>{cocktail.strInstructions}</td>
      <td>
        {status !== "disliked" ? (
          <BiDislike className='thumb-icon' onClick={handleDislikeClick} />
        ) : (
          <BiLike className='thumb-icon' onClick={handleDislikeClick} />
        )}{" "}
      </td>
    </tr>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, {
  dislikeCocktail,
  unDislikeCocktail,
  removeDislikedFromA,
  moveBackUndisliked,
})(CocktailItem);
