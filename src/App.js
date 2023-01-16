import { useState } from "react";
import { sculptureList } from "./data";
import "./styles.css";
export default function App() {
  const [index, setIndex] = useState(0);
  let currentPage = sculptureList[index];
  function handleIncrease() {
    setIndex(
      index < sculptureList.length - 1 ? index + 1 : sculptureList.length - 1
    );
  }
  function handleDecrease() {
    setIndex(index < sculptureList.length && index >= 1 ? index - 1 : 0);
  }
  return (
    <div className="App">
      <button onClick={handleDecrease}>Previos</button>
      <button onClick={handleIncrease}>Next</button>
      <h2>{currentPage.name}</h2>
      <p>
        ({index < sculptureList.length ? index + 1 : sculptureList.length} of{" "}
        {sculptureList.length})
      </p>
      <img src={currentPage.url} alt="img" />
      <p>{currentPage.description}</p>
    </div>
  );
}
