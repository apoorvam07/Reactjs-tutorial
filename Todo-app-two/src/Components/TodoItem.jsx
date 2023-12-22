import React from "react";

function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className="row b-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger deletebutton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
