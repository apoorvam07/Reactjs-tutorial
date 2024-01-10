import React, { createContext, useState } from "react";
import A from "./A";
import Login from "./Login";
import User from "./User";
import { Outlet } from "react-router-dom";

const Appdata = createContext();

const Usecontext = () => {
  const [username, setUsername] = useState("");

  return (
    <Appdata.Provider value={{ username, setUsername }}>
      <h1>useContext</h1>
      <Login />
      <User />
      <hr />
      <Outlet />
      <A />
    </Appdata.Provider>
  );
};

export default Usecontext;
export { Appdata };
