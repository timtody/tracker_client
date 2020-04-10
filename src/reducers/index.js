import { combineReducers } from "react-redux";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  form: formReducer,
});
