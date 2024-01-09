import React, { useState } from "react";

const Usecallback = () => {
  const [counterOne, setcounterOne] = useState(0);

  return (
    <div>
      <h1>usecallback</h1>
      <button onClick={() => setcounterOne(counterOne + 1)}>
        counterOne + {counterOne}
      </button>
    </div>
  );
};

export default Usecallback;
