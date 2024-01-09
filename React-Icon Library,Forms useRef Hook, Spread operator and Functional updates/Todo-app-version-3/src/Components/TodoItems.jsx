import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className={styles.itemscontainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.duedate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}
export default TodoItems;
