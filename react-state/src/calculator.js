// calculator

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState();
  const [count1, setCount1] = useState();
  const [count2, setCount2] = useState();

  const changeToOne = () => {
    setCount("1");
  };
  const changeToTwo = () => {
    setCount("2");
  };

  const increase = () => {
    setCount1;
  };

  return (
    <div className="calculator">
      <input value={count}></input>
      <div className="buttons">
        <button onClick={changeToOne}>1</button>
        <button onClick={changeToTwo}>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button id="space">0</button>
        <div>
          <button onClick={increase}>+</button>
          <button>-</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
