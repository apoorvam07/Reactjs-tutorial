import React, { useState } from "react";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  const [todoItems, settodoItems] = useState([]);

  const handleNewItem = (itemName, itemDuedate) => {
    // console.log(`new Item added:${itemName}`);
    settodoItems((currValue) => {
      const newtodoItems = [
        ...currValue,
        { name: itemName, duedate: itemDuedate },
      ];
      return newtodoItems;
    });
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    settodoItems(newTodoItems);
  };

  return (
    <TodoitemsContext.Provider value={[]}>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </TodoitemsContext.Provider>
  );
}

export default App;
