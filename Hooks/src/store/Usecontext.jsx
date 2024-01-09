import React, { createContext, useState } from "react";
import Login from "./Login";
import User from "./User";

const Appdata = createContext();

const Usecontext = () => {
  const [username, setUsername] = useState("");

  return (
    <Appdata.Provider value={{ username, setUsername }}>
      <h1>useContext</h1>
      <Login />
      <User />
      <hr />
    </Appdata.Provider>
  );
};

export default Usecontext;
export { Appdata };
