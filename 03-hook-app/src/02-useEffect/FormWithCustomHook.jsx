import React, { useEffect, useState } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  // Esto se puede ya que estamos pasando una copia de cada valor con el spread operator
  const { formState, onInputChange, username, email, password, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="emal"
        className="form-control mt-2"
        placeholder="example@example.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Borrar
      </button>
    </>
  );
};
