import React from "react";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import { Definition } from "../Definition/Definition";

export const Aside : React.FC = () => {
  return (
    <aside className='aside'>
    <Scoreboard />
    <Definition />
  </aside>
  )
}