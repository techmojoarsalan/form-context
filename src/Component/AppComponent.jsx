import React, { useContext } from "react";
import Parent from "./Parent";
import { CounterContext } from "./Context";

function AppComponent() {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <h3>AppComponent</h3>
      <button onClick={() => counter < 10 && setCounter(counter + 1)}>
        counter
      </button>
      <Parent />
    </div>
  );
}

export default AppComponent;
