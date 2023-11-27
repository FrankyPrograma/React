import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext); // Si tenemos 2 userContext nos retorna el mas cercano

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 4)}</pre>
      <button
        className="btn btn-primary"
        onClick={() => {
          setUser({
            id: 123,
            name: "Fran",
            email: "fran@fran.com",
          });
        }}
      >
        Establecer Usuario
      </button>
    </>
  );
};
