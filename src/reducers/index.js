import { combineReducers } from "redux";
import cocktailsReducer from "./cocktailsReducer";
import searchHistoryReducer from "./searchHistoryReducer";

export default combineReducers({
  drinks: cocktailsReducer,
  searchHistory: searchHistoryReducer,
});
