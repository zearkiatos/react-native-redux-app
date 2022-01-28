import { TODO_TYPES } from "../types";
import config from "../config";

const submit = (todo) => ({
  type: TODO_TYPES.SUBMIT,
  payload: todo
});

const complete = (id) => ({
  type: TODO_TYPES.COMPLETE,
  payload: id
});

const startSubmit = () => ({
  type: TODO_TYPES.START_SUBMIT
});

const errorSubmit = (error) => ({
  type: TODO_TYPES.ERROR_SUBMIT,
  error
});

const saveTodo = (text) => async (dispatch, getState) => {
  dispatch(startSubmit());
  try {
    const todo = {
      description: text,
      completed: false
    };
    const response = await fetch(
      `${config.JSON_PLACEHOLDER_API_BASE_URL}/todos`,
      {
        method: "POST",
        body: JSON.stringify(todo)
      }
    );
    const { id } = await response.json();
    console.log(id);
    dispatch(submit({ ...todo, id }));
  } catch (ex) {
    dispatch(errorSubmit(ex));
  }
};

export default { submit, complete, saveTodo };
