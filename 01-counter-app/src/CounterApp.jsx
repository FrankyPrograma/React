import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = (add) => {
    setCounter(counter + add);
  };

  const handleReset = () => {
    setCounter(value);
  };

  const handleSubstract = (substract) => {
    setCounter(counter - substract);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button
        onClick={() => {
          handleAdd(1);
        }}
      >
        +1
      </button>

      <button
        onClick={() => {
          handleReset();
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          handleSubstract(1);
        }}
      >
        -1
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
