import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (value) => {
    setTodos(todos.filter((todo) => todo !== value));
  };
  return (
    <div className="border">
      <TodoInput addTodo={addTodo} />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem value={todo} deleteTodo={deleteTodo} />
        ))}
      </TodoList>
    </div>
  );
};
export default TodoApp;
