import { useState } from "react";
import "./styles.css";

export default function App() {
  const [book, setBook] = useState(0);
  const [notebook, setNotebook] = useState(0);
  const [pen, setPen] = useState(0);
  const [inkpen, setInkpen] = useState(0);
  const payload = (value) => {
    return setBook(book + value);
  };
  const payload1 = (value) => {
    return setPen(pen + value);
  };
  const payload2 = (value) => {
    return setInkpen(inkpen + value);
  };
  const payload3 = (value) => {
    return setNotebook(notebook + value);
  };
  return (
    <div className="App">
      <div className="items">
        <span>Books:</span>
        <button
          className="addBook"
          onClick={() => {
            payload(+1);
          }}
        >
          +
        </button>
        <button
          className="remBook"
          onClick={() => {
            payload(-1);
          }}
        >
          -
        </button>
        <span className="totalBooks">{book}</span>
      </div>
      <div className="items">
        <span>inkpens:</span>
        <button
          className="addBook"
          onClick={() => {
            payload2(+1);
          }}
        >
          +
        </button>
        <button
          className="remBook"
          onClick={() => {
            payload2(-1);
          }}
        >
          -
        </button>
        <span className="totalBooks">{inkpen}</span>
      </div>
      <div className="items">
        <span>Notebooks:</span>
        <button
          className="addBook"
          onClick={() => {
            payload3(+1);
          }}
        >
          +
        </button>
        <button
          className="remBook"
          onClick={() => {
            payload3(-1);
          }}
        >
          -
        </button>
        <span className="totalBooks">{notebook}</span>
      </div>
      <div className="items">
        <span>Pens:</span>
        <button
          className="addBook"
          onClick={() => {
            payload1(+1);
          }}
        >
          +
        </button>
        <button
          className="remBook"
          onClick={() => {
            payload1(-1);
          }}
        >
          -
        </button>
        <span className="totalBooks">{pen}</span>
      </div>
      <div>total={book + pen + inkpen + notebook}</div>
    </div>
  );
}
