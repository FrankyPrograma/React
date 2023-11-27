import React from "react";
import PropTypes from "prop-types";

// Esto no lo re-renderiza
const miNombre = "Fran";

// Función para probar
const getResult = (a, b) => {
  return a + b;
};

export const FirstApp = ({ title, subTitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
  title: "No hay titulo",
  subTitle: 0,
  name: "Fernando Herrera",
};
