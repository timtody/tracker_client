import tracker from "../apis/tracker";

import history from "../history";

export const create = (formValues, model) => async (dispatch) => {
  const response = await tracker.post(`${model}/`, formValues);
  dispatch({ type: "CREATE", payload: response.data, model });
  history.push("/tasks");
};
export const update = (id, formValues, model) => async (dispatch) => {
  const response = await tracker.put(`${model}/${id}/`, formValues);
  dispatch({ type: "UPDATE", payload: response.data, model });
  history.push("/tasks");
};

export const del = (id, model) => async (dispatch) => {
  await tracker.delete(`${model}/${id}/`);
  dispatch({ type: "DELETE", payload: id, model });
};

export const get = (id, model) => async (dispatch) => {
  const response = await tracker.get(`${model}/${id}`);
  dispatch({ type: "GET", payload: response.data, model });
};

export const list = (model) => async (dispatch) => {
  const response = await tracker.get(`${model}`);
  console.log("dispatiching", { type: "LIST", payload: response.data, model });
  dispatch({ type: "LIST", payload: response.data, model });
};
