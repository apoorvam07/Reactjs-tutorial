import React, { useMemo, useState } from "react";

export default function UseMemo() {
  const [counterOne, setcounterOne] = useState(0);
  const [counterTwo, setcounterTwo] = useState(0);

  //To memoize a function with useMemo, your calculation function would have to return another function:
  const isEven = useMemo(() => {
    return () => {
      let i = 0;
      while (i < 200000000) i++;
      return counterOne % 2 === 0;
    };
  }, [counterOne]);

  return (
    <div>
      <h1>UseMemo</h1>
      <button onClick={() => setcounterOne(counterOne + 1)}>
        counterOne + {counterOne}
      </button>

      <span>{isEven() ? "Even" : "Odd"}</span>

      <button onClick={() => setcounterTwo(counterTwo + 1)}>
        counterTwo + {counterTwo}
      </button>

      <hr />
    </div>
  );
}
