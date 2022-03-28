import { combineReducers } from 'redux';
import cocktailsReducer from './cocktailsReducer';
import searchHistoryReducer from './searchHistoryReducer';
import dislikedReducer from './dislikedReducer';

export default combineReducers({
  drinks: cocktailsReducer,
  searchHistory: searchHistoryReducer,
  disliked: dislikedReducer,
});
