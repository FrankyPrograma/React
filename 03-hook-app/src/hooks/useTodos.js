import { useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodos = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  // Pasamos la referencia a la función, el reducer se encarga de ejecutarlo
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action); // Con el dispatch le pasamos la acción que queremos ejecutar
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: id,
    };

    dispatch(action);
  };

  return {
    todos,
    handleNewTodo,
    countTodos: todos.length,
    pendingCountTodos: todos.filter((todo) => !todo.done).length,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
