import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h1>useMemo</h1>
        <h4>My Todos</h4>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <h5></h5>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h4>Expensive Calculation</h4>
        {calculation}
        <hr />
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

//without useMemo
// const UseMemo = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   const calculation = expensiveCalculation(count);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//       </div>
//     </div>
//   );
// };

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// };

export default UseMemo;

// export default function UseMemo() {
//   const [counterOne, setcounterOne] = useState(0);
//   const [counterTwo, setcounterTwo] = useState(0);

//   //To memoize a function with useMemo, your calculation function would have to return another function:
//   const isEven = useMemo(() => {
//     return () => {
//       let i = 0;
//       while (i < 200000000) i++;
//       return counterOne % 2 === 0;
//     };
//   }, [counterOne]);

//   return (
//     <div>
//       <h1>UseMemo</h1>
//       <button onClick={() => setcounterOne(counterOne + 1)}>
//         counterOne + {counterOne}
//       </button>

//       <span>{isEven() ? "Even" : "Odd"}</span>

//       <button onClick={() => setcounterTwo(counterTwo + 1)}>
//         counterTwo + {counterTwo}
//       </button>

//       <hr />
//     </div>
//   );
// }
