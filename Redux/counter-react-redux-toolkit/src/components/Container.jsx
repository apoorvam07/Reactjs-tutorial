import React from "react";

const Container = ({ children }) => {
  return (
    <center className="card" style={{ width: "50%", height: "100%" }}>
      <center className="card-body">{children}</center>
    </center>
  );
};

export default Container;
