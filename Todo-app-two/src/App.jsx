import React from "react";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      duedate: "06/12/2023",
    },
    {
      name: "Study",
      duedate: "07/12/2023",
    },
    {
      name: "Hike",
      duedate: "08/12/2023",
    },
  ];

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;
