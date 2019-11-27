import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './todos'

function App() {
  // The first parameter, todos is the name of our state.
  // The second parameter, setTodos is what we are going to use to set the state.
  // The hook of useState is what React uses to "hook" into the state or lifecycle 
  // of the component. The array of objects is the beginnings of our state.
  const [ todos, setTodos ] = React.useState([
    { text: "Learn React Hooks "},
    { text: "Land at New Story" },
    { text: "Build a todo app with hooks"}
  ]);

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
        </div>
    </div>
  );
}

export default App;
