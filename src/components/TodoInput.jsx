import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <form>
        <input
          className="input"
          type="text"
          value={value}
          placeholder="New todo Item"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        
      </form>
    </div>
  );
};

export default TodoInput;
