import React from "react";

const TodoItem = ({ value, deleteTodo, setValue }) => {
  return (
    <div className="border1">
      <input type="checkbox" className="checkbox" />
      {value}

      <button className="delete" onClick={() => deleteTodo(value)}>
        delete
      </button>
    </div>
  );
};

export default TodoItem;
