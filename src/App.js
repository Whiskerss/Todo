import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [todos, setTodos] = useState([
    {
      text: "Make a Weather App",
      isDone: true
    },
    {
      text: "Make a HR Management System",
      isDone: false
    }
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!data) return;
    addTodo(data);
    setData("");
  };

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <h1 className='text-center'>To-Do List</h1>
        <form onSubmit={handleSubmit}>
        <label>Add To-Do</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control border-primary"
              placeholder="Add a New Todo"
              value={data}
              onChange={e => setData(e.target.value)} />
            <button className="btn border-primary" type="submit">Add &#10024;</button>
          </div>
        </form>
        <hr />

        <div>
          {todos.map((todo, index) => (
            <div className='card mt-2 p-2'>
              <div className="todo d-flex">
                <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
                <div className='ms-auto'>
                  <div className="btn border-success m-1" onClick={() => markTodo(index)}>&#10003;</div>
                  <div className="btn border-danger m-1" onClick={() => removeTodo(index)}>&#10005;</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;