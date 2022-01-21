import { TODO_TYPES } from "../types";
const INITIAL_STATE = [
  {
    id: 1,
    description: "todo 1",
    completed: false
  },
  {
    id: 2,
    description: "todo 2",
    completed: false
  }
];
const complete = (id) => ({
  type: TODO_TYPES.COMPLETE,
  payload: id
});
const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_TYPES.COMPLETE:
      return state.map((s) =>
        s.id === action.payload ? { ...s, completed: !s.completed } : s
      );
    default:
      return state;
  }
};

export default {
  todos,
  complete
};
