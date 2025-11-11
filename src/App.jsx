import Die from "./components/Die.jsx";
import { useState } from "react";

function App() {
  const [diceValues, setDiceValues] = useState(generateAllNewDice());

  function generateAllNewDice() {
    let randomNumbers = [];
    for (let i = 0; i <= 9; i++) {
      const randomNumber = Math.ceil(Math.random() * 6);
      randomNumbers.push(randomNumber);
    }
    return randomNumbers;
  }

  function rollDice() {
    setDiceValues(generateAllNewDice());
  }

  const dieComponents = diceValues.map((diceValue) => {
    return <Die value={diceValue} />;
  });

  return (
    <main>
      <div className="die-container">{dieComponents}</div>
      <button className="roll-button" onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
