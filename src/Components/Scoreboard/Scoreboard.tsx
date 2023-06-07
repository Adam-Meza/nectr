import React, {useState} from "react";
import './/Scoreboard.css'
import { WordCard } from "../WordCard/WordCard";
import { FavoritesProps } from "../Favorites/Favorites";

interface ScoreboardProps {
  answers : FavoritesProps[]
  addFavorite: (word : String) => void
}

export const Scoreboard : React.FC <ScoreboardProps> = ({answers, addFavorite}) => {
  const correctAnswers = answers.map(answer => (<WordCard word ={answer.word} definition ={answer.definition} addFavorite = {addFavorite}/>))
  
  return (
    <div className='scoreboard'>
      {correctAnswers}
    </div>
  )
}