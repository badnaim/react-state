import { useState } from "react";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputVal, setinputVal] = useState([]);

  const getInput = () => {
    setTodos([...todos, inputVal]);
  };

  const getValue = (event) => {
    setinputVal(event.target.value);
  };

  return (
    <div className="App">
      <div className="column">
        <input type="text" onChange={getValue}></input>
        <button onClick={getInput}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      {/* <button>delete</button> */}
    </div>
  );
}
