import tracker from "../apis/tracker";

import { CREATE, UPDATE, DELETE, GET, LIST } from "./types";

export const createTask = (formValues) => async (dispatch) => {
  const response = await tracker.post("tasks/", formValues);
  console.log(response);
};
const updateTask = () => {};
const deleteTask = () => {};

export const getTask = (id) => async (dispatch) => {
  const response = await tracker.get(`tasks/${id}`);
  dispatch({ type: GET, payload: response.data });
};

export const getTasks = () => async (dispatch) => {
  const response = await tracker.get("tasks");
  dispatch({ type: LIST, payload: response.data });
};
