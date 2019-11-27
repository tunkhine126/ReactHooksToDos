import React, { useState } from 'react';
import './App.css';
import Todos from './todos'
import TodoForm from './TodoForm'

function App() {
  // The first parameter, todos is the name of our state.
  // The second parameter, setTodos is what we are going to use to set the state.
  // The hook of useState is what React uses to "hook" into the state or lifecycle 
  // of the component. The array of objects is the beginnings of our state.
  const [ todos, setTodos ] = useState([
    { text: "Learn React Hooks "},
    { text: "Land at New Story" },
    { text: "Build a todo app with hooks"}
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todos
            key={index}
            index={index}
            todo={todo}
          />
        ))}
        <TodoForm addTodo={addTodo}/>
        </div>
    </div>
  );
}

export default App;
