import { combineReducers } from "redux";
import languageReducer from "./language";
import globalReducer from "./global";

const rootReducer = combineReducers({
  languageReducer,
  globalReducer
});

export default rootReducer;
