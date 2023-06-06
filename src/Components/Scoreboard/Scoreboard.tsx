import React, {useState} from "react";
import './/Scoreboard.css'

interface ScoreboardProps {
  answers : String[]
}

export const Scoreboard : React.FC <ScoreboardProps> = ({answers}) => {
  return (
    <div className='scoreboard'>
      {answers}
    </div>
  )
}