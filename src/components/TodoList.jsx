import React from "react";

const TodoList = ({ children }) => {
  return (
    <ul>
      <ul>{children}</ul>
    </ul>
  );
};

export default TodoList;
