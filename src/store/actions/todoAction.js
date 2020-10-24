export const ADD_TODO = 'ADD_TODO';
export const addTodo = (title) => {
  return { type: ADD_TODO, title };
};

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (index) => {
  return { type: REMOVE_TODO, index };
};
