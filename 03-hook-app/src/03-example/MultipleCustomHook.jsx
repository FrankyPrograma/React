import React from "react";
import { useFetch, useCounter } from "../hooks/";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHook = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote data={data} />}

      <button
        disabled={isLoading}
        className="btn btn-primary"
        onClick={() => increment(1)}
      >
        Next Quote
      </button>
    </>
  );
};
