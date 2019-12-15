import React, { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm'
import Todo from './Todo'

function App() {

  // SETTING STATE:
  const [ todos, setTodos ] = useState([
    // The first parameter, todos is the name of our state.
    // The second parameter, setTodos is what we are going to use to set the state.

    // The hook of useState is what React uses to "hook" into the state or lifecycle 
    // of the component.

    // The array of objects is the beginnings of our state.
    {
      text: "Meet a friend for lunch",
      isCompleted: false},
    { text: "Go buy milk", 
      isCompleted: false },
    { text: "Build a todo app with hooks",
      isCompleted: false}
  ]);

  // CRUD 

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
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
              removeTodo={removeTodo}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
