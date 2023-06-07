import React from "react";
import { NavLink } from "react-router-dom";

export function Header () {
  return ( 
    <header className="header">
      <h1>Nectr</h1>
      <NavLink to='/favorites'>this goes to favorites </NavLink>
    </header>
  )
}