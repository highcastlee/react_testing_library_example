import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="Counter">
      <header className="Counter-header">
        <h3 data-testid="counter">{counter}</h3>
      </header>
      <button disabled={disabled} onClick={() => setCounter((counter) => counter - 1)} data-testid="minus-button">-</button>
      <button disabled={disabled} onClick={() => setCounter((counter) => counter + 1)} data-testid="plus-button">+</button>

      <button
        style={{ backgroundColor: "blue" }}
        data-testid="on/off-button"
        onClick={() => {
          setDisabled((prev) => !prev);
        }}
      >
        on-off
      </button>
    </div>
  );
}

export default Counter;
