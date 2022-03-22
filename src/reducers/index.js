import { combineReducers } from "redux";
import cocktailsReducer from "./cocktailsReducer";

export default combineReducers({
  drinks: cocktailsReducer,
});
