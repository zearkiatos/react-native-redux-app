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
  console.log(action);
  return state;
};

export default {
  todos
};
