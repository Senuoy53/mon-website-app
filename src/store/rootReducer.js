import { combineReducers } from "redux";
import clickedReducer from "../containers/Portfolio/reducer";

export default combineReducers({
  clickedState: clickedReducer,
});
