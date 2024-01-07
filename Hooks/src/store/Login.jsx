import React, { useContext } from "react";
import { Appdata } from "./Usecontext";

const Login = () => {
  const { setUsername } = useContext(Appdata);

  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
};

export default Login;
