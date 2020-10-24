import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../store/actions/todoAction';

function ListOfTodo({ tasks }) {
  const dispatch = useDispatch();
  return (
    <div>
      {tasks.map((todo, key) => (
        <div>
          <h1 key={key}>{todo}</h1>
          <button onClick={() => dispatch(removeTodo(key))}>Delete</button>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.todos.tasks,
});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, null)(ListOfTodo);
