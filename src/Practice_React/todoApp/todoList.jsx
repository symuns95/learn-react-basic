import React, { useState } from "react";
import TodoForm from "./todoForm";
import Todo from "./todo";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addtodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodo = [todo, ...todos];
    setTodos(newTodo);
    console.log(todo, ...todos);
  };
  const updateTodos = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
  };
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeArr);
  };
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="container mx-auto">
      <h1>Lets make a Todo list app</h1>
      <TodoForm onSubmit={addtodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodos} />
    </div>
  );
};

export default TodoList;
