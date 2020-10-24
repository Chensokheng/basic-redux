import { ADD_TODO, REMOVE_TODO } from '../actions/todoAction';

const initialState = {
  tasks: ['default task', 'task1'],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        tasks: [action.title, ...state.tasks],
      };
    case REMOVE_TODO:
      return {
        tasks: state.tasks.filter((_, index) => index !== action.index),
      };

    default:
      return state;
  }
};

export default todoReducer;
