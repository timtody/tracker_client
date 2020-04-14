import _ from "lodash";
import { CREATE, UPDATE, DELETE, GET, LIST } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case LIST:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case GET:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
