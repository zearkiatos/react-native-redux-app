import { TODO_TYPES } from "../types";
import config from '../config';

const submit = (text) => ({
  type: TODO_TYPES.SUBMIT,
  payload: {
    description: text,
    completed: false,
    id: Math.random().toString(36)
  }
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
  const state = getState();
  console.log(state);
  dispatch(startSubmit());
  try {
    const response = await fetch(`${config.JSON_PLACEHOLDER_API_BASE_URL}/todos`);
    dispatch(submit(text));
  } catch (ex) {
    dispatch(errorSubmit(ex));
  }
};

export default { submit, complete };
