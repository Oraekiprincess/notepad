import React, { useState } from "react";
import './App.css';

function App() {


  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo =  (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);

    setInput("");
  };

  const deleteTodo = (id) => {

      const newList = list.filter((todo) => todo.id !==id);

    setList(newList);
  };

  return (
    <div className="Input">
    <div>
<h1 className="head">Todo List</h1>
<input className="change" 
type="text"
 value={input}
 onChange={(e) => setInput(e.target.value)}
/>
<button className="btn" onClick={() => addTodo(input)}>Add</button>
<ul className="ulist">
  {list.map((todo) => (
    <li className="list" key={todo.id}>
      {todo.todo}
      <button className="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
    ))}</ul>
  </div>
  </div>
  );
}

export default App;
