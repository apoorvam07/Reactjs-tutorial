// import React, { useState } from "react";

// export default function UseReducer() {
//   const [count, setCount] = useState(0);
//   const [showText, setShowText] = useState(true);

//   return (
//     <div>

//<h1>UseReducer</h1>;
//       <h4>{count}</h4>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//           setShowText(!showText);
//         }}
//       >click here..
//       </button>
//       {showText && <p>Hi</p>}
//     </div>
//   );
// }

import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleshowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    toggleshowText: true,
  });

  return (
    <div>
      <h1>useReducer</h1>
      <h4>{state.count}</h4>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleshowText" });
        }}
      >
        click here..
      </button>
      {state.showText && <p>Hi</p>}
      <hr />;
    </div>
  );
}
