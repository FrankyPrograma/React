import { useState } from "react";

// Un hook es una función que retorna algo y contienen otro hook (usualmente)
export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const decrement = (value = 1) => {
    if (counter === 0) return; // No puede ser menor a 0

    setCounter(counter - value);
  };

  const increment = (value = 1) => {
    setCounter(counter + value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    decrement,
    increment,
    reset,
  };
};
