import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  // Si no le pasamos el onChange seria un input Read Only
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const inputTrim = inputValue.trim();

    if (inputTrim.length <= 1) return; // Se termina de ejecutar

    onNewCategory(inputTrim);
    setInputValue("");
  };

  return (
    <form
      onSubmit={(e) => {
        onSubmit(e);
      }}
    >
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={(e) => {
          onInputChange(e);
        }}
      />
    </form>
  );
};
