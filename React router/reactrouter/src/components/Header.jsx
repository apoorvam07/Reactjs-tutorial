import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <header>
        <a href="#">Logo</a>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
