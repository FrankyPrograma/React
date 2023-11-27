import React, { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // Memorizamos la función ya que al estar almacenada en memoria cada vez cambia su valor
  // Esto se hace para que no cambie su posición en memoria

  const incrementarFather = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementarFather} />
    </>
  );
};
