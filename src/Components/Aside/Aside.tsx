import React from "react";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import { Definition } from "../Definition/Definition";

interface AsideProps {
  currentGuess : String
  answers : String[]
}

export const Aside : React.FC<AsideProps> = ({currentGuess, answers}) => {
  return (
    <aside className='aside'>
    <Scoreboard answers = {answers}/>
    <Definition currentGuess = {currentGuess}/>
  </aside>
  )
}