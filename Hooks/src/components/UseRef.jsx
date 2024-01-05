import React, { useRef } from "react";

export default function UseRef() {
  const input = useRef(null);

  const onClick = () => {
    input.current.value = "";
  };

  return (
    <div>
      <h1>useRef</h1>
      <input type="text" placeholder="Enter here.." />
      <button onClick={onClick}>click</button>
      <hr />
    </div>
  );
}
