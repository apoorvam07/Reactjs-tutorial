import React, { useEffect, useState } from "react";
import axios from "axios";

// export default function Useeffect() {
//   const [count, setCount] = useState(0);
//   // without []array=>effect run automatically if there is no dependency array,
//   //     []array=>effect run/renders only once if there is no dependency inside it

//   useEffect(() => {
//     fetch("https://dummyjson.com/posts").then((response) => response.json())
//       .then((json) => console.log(json));
//     console.log("count:", count);

//     return () => {
//       console.log("I am being cleaned up");
//     };
//   });

//   return (
//     <div>
//       <h1>Useeffect</h1>
//       <h4>Count:{count}</h4>
//       <button onClick={() => setCount(count + 1)}>Increment</button>

//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       <hr />
//     </div>
//   );
// }

export default function Useeffect() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    axios
      .get(`https://jsonplaceholder.typicode.com/comments`, { signal })
      .then((response) => {
        setData(response.data[0].email);
        console.log("started the effect");
      });
    // return () => {
    //   console.log("cleaned up effect");
    //   controller.abort();
    // };
  }, [count]);

  return (
    <div>
      <h1>useEffect</h1>
      <p>Email is {data}</p>
      <h4>{count}</h4>
      <button onClick={() => setCount(count + 1)}>click</button>
      <hr />
    </div>
  );
}
