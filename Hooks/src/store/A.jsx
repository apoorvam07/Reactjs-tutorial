import React, { createContext } from "react";
import B from "./B";

const Biodata = createContext(null);

export default function A() {
  return (
    <Biodata.Provider value={"apoo"}>
      <B />
    </Biodata.Provider>
  );
}
export { Biodata };
