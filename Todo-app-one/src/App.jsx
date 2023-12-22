import React from "react";
import TodoItem1 from "./Components/TodoItem1";
import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />

        <div className="items-container">
          <TodoItem1 />
          <TodoItem1 />
          <TodoItem1 />
        </div>
      </center>
    </>
  );
}

export default App;
