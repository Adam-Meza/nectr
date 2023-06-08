import React from "react";
import { NavLink } from "react-router-dom";
import './header.css'

export function Header () {
  return ( 
    <header className="header">
      <h1><NavLink className ="link title"to='/'>nectr</NavLink></h1>
      <NavLink className ="link nav-link"to='/favorites'>FAVORITES</NavLink>
      <NavLink className ="link nav-link"to='/stats'>STATS</NavLink>
    </header>
  )
}