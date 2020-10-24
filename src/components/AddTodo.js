import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions/todoAction';

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState('');
  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => addTodo(title)}>addNewTask</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (title) => dispatch(addTodo(title)),
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
