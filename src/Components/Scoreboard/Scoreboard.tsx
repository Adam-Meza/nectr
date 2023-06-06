import React, {useState} from "react";
import './/Scoreboard.css'

interface ScoreboardProps {
  answers : String[]
}

export const Scoreboard : React.FC <ScoreboardProps> = ({answers}) => {
  const correctAnswers = answers.map(answer => <div>{answer}</div>)
  
  return (
    <div className='scoreboard'>
      {correctAnswers}
    </div>
  )
}