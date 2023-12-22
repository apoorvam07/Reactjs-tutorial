import React from "react";

export default function AddTodo() {
  return (
    <div className="container">
      <div className="row Addtodorow">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success Addbutton">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
