import React from "react";

const TodoItem = ({ id, title, status }) => {
  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>{id}</div>
        <div>{title}</div>
        <div>{status ? "Done" : "Not Done"}</div>
      </div>
    </div>
  );
};

export default TodoItem;
