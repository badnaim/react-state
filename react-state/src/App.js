import React, { useState } from "react";

import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputVal, setinputVal] = useState();
  const getInput = () => {
    setTodos([...todos, inputVal]);
  };
  const getValue = (event) => {
    setinputVal(event.target.value);
  };

  const inputChange = (e) => {
    console.log(e.target.value);
  };
  function addToDo(e) {
    e.preventDefault();
    console.log(e);
    setTodos(e.target.newList.value);
  }

  return (
    <div className="App">
      <input type="text" onChange={getValue}></input>
      <button onClick={getInput}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
