import React, { useEffect, useState } from "react";
import axios from "axios";

// export default function Useeffect() {
// //   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("count:", count);

//     return () => {
//       console.log("I am being cleaned up");
//     };
//   }, [count]);

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
  const [data, setdata] = useState(0);
  useEffect(() => {
    axios.get("https://dummyjson.com/posts/add").then((response) => {
      console.log(response.data);
    });
  });
  return (
    <div>
      <h1>Useeffect</h1>

      <hr />
    </div>
  );
}
