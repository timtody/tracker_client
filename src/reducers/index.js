import { combineReducers } from "react-redux";
import { reducer as formReducer } from "redux-form";

import userReducer from "./userReducer";
import taskReducer from "./taskReducer";
import projectReducer from "./projectReducer";

export default combineReducers({
  form: formReducer,
  users: userReducer,
  projects: projectReducer,
  tasks: taskReducer,
});
