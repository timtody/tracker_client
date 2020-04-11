import { CREATE, UPDATE, DELETE, GET, LIST } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case LIST:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
