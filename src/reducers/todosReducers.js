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

const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_TYPES.COMPLETE:
      return state.map((s) =>
        s.id === action.payload ? { ...s, completed: !s.completed } : s
      );
    case TODO_TYPES.SUBMIT:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default {
  todos
};
