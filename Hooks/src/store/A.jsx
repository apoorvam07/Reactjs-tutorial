import React, { createContext } from "react";
import B from "./B";

const Biodata = createContext(null);

export default function A() {
  return (
    <Biodata.Provider value={"apoo"}>
      <h1>useContext</h1>
      <B />
      <hr />
    </Biodata.Provider>
  );
}
export { Biodata };
