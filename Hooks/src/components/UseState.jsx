import React, { useState } from "react";
import styles from "./UseState.module.css";

function UseState() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className={styles.id}>
        <h1>useState</h1>
        <p>you clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click here</button>

        <hr></hr>
      </div>
    </>
  );
}

export default UseState;
