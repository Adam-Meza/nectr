import React from "react";
import { NavLink } from "react-router-dom";
import './header.css'

export function Header () {
  return ( 
    <header className="header">
      <h1>nectr</h1>
      <NavLink className ="link"to='/favorites'>FAVORITES</NavLink>
      <NavLink className ="link"to='/stats'>STATS</NavLink>
    </header>
  )
}