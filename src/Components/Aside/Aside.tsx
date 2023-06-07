import React from "react";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import { DefinitionCard } from "../Definition/Definition";
import { DefinitionProps } from "../../utilites";

interface AsideProps {
  answers : String[]
  definition: DefinitionProps
}

export const Aside : React.FC<AsideProps> = ({answers, definition}) => {
  return (
    <aside className='aside'>
    <Scoreboard answers = {answers}/>
    <DefinitionCard definition = {definition}/>
  </aside>
  )
}