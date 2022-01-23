import { TODO_TYPES } from "../types";

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

export default { submit, complete };
