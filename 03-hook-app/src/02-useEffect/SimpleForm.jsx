import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Hay que crear un efecto por cada efecto secuandario que queramos crear
  useEffect(() => {
    console.log("useEffect");
  }, []);

  useEffect(() => {
    console.log("formStateChanged");
  }, [formState]);

  useEffect(() => {
    console.log("Email Changed");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
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
    </>
  );
};
