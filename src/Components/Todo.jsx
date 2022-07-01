import React, { useEffect } from "react";
import { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [data, setData] = useState([]);

  //   const getTodos = async () => {
  //     try {
  //       let data = await fetch(
  //         `https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10`
  //       );
  //       data = await data.json();
  //       setData(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  useEffect(() => {
    const getTodos = async () => {
      let r = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10`
      );
      let d = await r.json();
      setData(d);
    };
    getTodos();
  }, []);

  return (
    <div>
      <h1>Todo App</h1>
      {/* <button onClick={() => getTodos()}>fetch Todos</button> */}

      <div style={{ marginLeft: "40%" }}>
        {data.map((el) => (
          <TodoList
            key={el.id}
            id={el.id}
            title={el.title}
            status={el.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
