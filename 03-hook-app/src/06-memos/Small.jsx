import React from "react";

// Lo memoriza y solo cambia cuando cambian sus props
// Esto solo es recomendable cuando es un componente muy grande
export const Small = React.memo(({ value }) => {
  return <small>{value}</small>;
});
