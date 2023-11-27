import React, { useEffect, useReducer } from "react";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";

export const TodoApp = () => {
  const {
    todos,
    countTodos,
    pendingCountTodos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
  } = useTodos();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // Les seteamos en el localstorage
  }, [todos]);

  return (
    <>
      <h1>
        TodoApp {countTodos}, <small>pendientes: {pendingCountTodos}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={(id) => handleDeleteTodo(id)}
            onToggleTodo={(id) => handleToggleTodo(id)}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          {/* TodoAdd */}
          <TodoAdd
            onNewTodo={(todo) => {
              handleNewTodo(todo);
            }}
          />
        </div>
      </div>
    </>
  );
};
