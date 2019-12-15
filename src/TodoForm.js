import React, { useState } from 'react'

function TodoForm({ addTodo }) {
  // Setting state
  const [value, setValue] = useState("");
  // The first is the "value" and the second is how we are going to be setting the state. 
  // The state starts off empty and as we add things to our state, it will add it to our list of to-do items.

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <a> Enter new Todo item: </a>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;