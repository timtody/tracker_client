import tracker from "../apis/tracker";

import { CREATE, UPDATE, DELETE, GET, LIST } from "./types";

const createTask = () => {};
const updateTask = () => {};
const deleteTask = () => {};
const getTask = () => {};

export const getTasks = () => async (dispatch) => {
  const response = await tracker.get("tasks");
  dispatch({ type: LIST, payload: response.data });
};
