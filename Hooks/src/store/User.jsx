import React, { useContext } from "react";
import { Appdata } from "./Usecontext";

const User = () => {
  const { username } = useContext(Appdata);

  return (
    <div>
      <h3>user:{username}</h3>
    </div>
  );
};

export default User;
