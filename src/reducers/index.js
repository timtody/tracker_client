import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import _ from "lodash";

const createReducerWithNamedData = (modelName = "") => {
  return (state = {}, action) => {
    if (action.model !== modelName) return state;

    switch (action.type) {
      case "LIST":
        return { ...state, ..._.mapKeys(action.payload, "id") };
      case "GET":
        return { ...state, [action.payload.id]: action.payload };
      case "DELETE":
        return _.omit(state, action.payload);
      case "UPDATE":
        return { ...state, [action.payload.id]: action.payload };
      case "CREATE":
        return { ...state, [action.payload.id]: action.payload };
      default:
        return state;
    }
  };
};

export default combineReducers({
  form: formReducer,
  users: createReducerWithNamedData("users"),
  projects: createReducerWithNamedData("projects"),
  tasks: createReducerWithNamedData("tasks"),
  statuses: createReducerWithNamedData("statuses"),
  priorities: createReducerWithNamedData("priorities"),
});
