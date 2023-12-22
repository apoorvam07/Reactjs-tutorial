import React from "react";

export default function TodoItem1() {
  return (
    <div className="container">
      <div className="row b-row">
        <div className="col-6">Buy Milk</div>
        <div className="col-4">26/08/2023</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
