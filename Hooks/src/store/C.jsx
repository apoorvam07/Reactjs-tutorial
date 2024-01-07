import React, { useContext } from "react";
import { Biodata } from "./A";

export default function C() {
  const context = useContext(Biodata);
  return <div>Hi {context}</div>;
}
