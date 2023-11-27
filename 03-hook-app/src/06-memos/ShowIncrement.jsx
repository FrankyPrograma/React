import React from "react";

// Memorizamos el componente para que no lo vuelva a reenderizar
export const ShowIncrement = React.memo(({ increment }) => {
  console.log("HOLA");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment();
      }}
    >
      Incrementar
    </button>
  );
});
