import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahí vamos...");
  }

  return `${iterationNumber} ireaciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  // Esto se usa cuando hay tareas pesadas y las quieres memorizar
  // Esta memorizando el valor de heavyStuf y cambia cada vez que counter cambia
  const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      <h4>{memorizeValue}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
