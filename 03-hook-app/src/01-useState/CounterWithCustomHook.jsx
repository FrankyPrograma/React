import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, decrement, increment, reset } = useCounter(0);

  return (
    <>
      <h1>Counter With Hook: {counter}</h1>
      <hr />

      {/* Si mandas la función por referencia mandas como param por defecto el event */}
      <button className="btn btn-primary" onClick={() => increment(5)}>
        +1
      </button>

      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>

      <button className="btn btn-primary" onClick={() => decrement(5)}>
        -1
      </button>
    </>
  );
};
