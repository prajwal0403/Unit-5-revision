import { nanoid } from "nanoid";
import { useState } from "react";
import { Input } from "./input";

export const Todo = () => {
  const [todo, setTodo] = useState([]);
  const fn = (data) => {
    const payload = {
      id: nanoid(),
      title: data,
      status: false
    };
    setTodo([...todo, payload]);
  };
  const del = (id) => {
    const updatedTodos = todo.filter((el) => el.id !== id);
    setTodo(updatedTodos);
  };
  const sort = () => {
    const s = todo.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
    });
    setTodo([...todo, s]);
  };
  const status = (id) => {
    const updatedTodos = todo.map((el) =>
      el.id === id ? { ...el, status: !el.status } : el
    );
    setTodo(updatedTodos);
  };
  console.log(todo);
  return (
    <div>
      <button
        onClick={() => {
          sort(todo);
        }}
      >
        Sort
      </button>
      <Input fn={fn} />
      <button
        onClick={() => {
          setTodo([]);
        }}
      >
        Remove All
      </button>
      {todo.map((e, index) => {
        return (
          <div style={{ display: "flex", marginLeft: "100px" }} key={nanoid()}>
            {index + 1}.<span> </span>
            {e.title}
            {e.status ? (
              <div style={{ color: "green" }}> Done </div>
            ) : (
              <div style={{ color: "red" }}> Not Done </div>
            )}
            <button
              onClick={() => {
                del(e.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                status(e.id);
              }}
            >
              {" "}
              status{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
};
