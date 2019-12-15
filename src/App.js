import React, { useState } from 'react';
import './App.css';

// const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

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

function Todo({ todo, index, completeTodo }) {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
    </div>
  );
}

function App() {

  // SETTING STATE:
  const [ todos, setTodos ] = useState([
    // The first parameter, todos is the name of our state.
    // The second parameter, setTodos is what we are going to use to set the state.

    // The hook of useState is what React uses to "hook" into the state or lifecycle 
    // of the component.

    // The array of objects is the beginnings of our state.
    { text: "Learn React Hooks ",
      isCompleted: false},
    { text: "Go buy milk", 
      isCompleted: false },
    { text: "Build a todo app with hooks",
      isCompleted: false}
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
