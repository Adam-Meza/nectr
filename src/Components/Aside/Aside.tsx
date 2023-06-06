import React from "react";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import { Definition } from "../Definition/Definition";

interface AsideProps {
  currentGuess : String
}

export const Aside : React.FC<AsideProps> = ({currentGuess}) => {
  return (
    <aside className='aside'>
    <Scoreboard />
    <Definition currentGuess = {currentGuess}/>
  </aside>
  )
}