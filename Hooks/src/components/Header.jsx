import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <header>
        <a href="#">Hooks</a>
        <nav>
          <ul>
            <li>
              <NavLink to="/MyForm">MyForm</NavLink>
            </li>
            <li>
              <NavLink to="/UseState">UseState</NavLink>
            </li>
            <li>
              <NavLink to="/Useeffect">Useeffect</NavLink>
            </li>
            <li>
              <NavLink to="/UseReducer">UseReducer</NavLink>
            </li>
            <li>
              <NavLink to="/UseRef">UseRef</NavLink>
            </li>
            <li>
              <NavLink to="/Usecontext">Usecontext</NavLink>
            </li>
            <li>
              <NavLink to="/UseMemo">UseMemo</NavLink>
            </li>
            <li>
              <NavLink to="/Usecallback">Usecallback</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
