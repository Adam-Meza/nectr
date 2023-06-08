import React from "react";
import { DefinitionProps } from "../../utilites";

interface StatsProps {
  total: Number;
  correctAnswers: any[]
}

export const Stats : React.FC<StatsProps> = ({total, correctAnswers}) => {
  return(
    <section>
      <h2>Current Game</h2>
      <p>Words guessed: {`${correctAnswers.length}`}</p>
      <p> total words possible : {`${total}`}</p>
    </section>
  )
}