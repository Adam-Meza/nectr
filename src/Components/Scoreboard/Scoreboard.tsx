import React, {useState} from "react";
import './/Scoreboard.css'
import { WordCard } from "../WordCard/WordCard";
// import { FavoritesProps } from "../Favorites/Favorites";
import { DefinitionProps } from "../../utilites";

interface ScoreboardProps {
  answers : DefinitionProps[];
  addFavorite: (definition : DefinitionProps) => void;
};

export const Scoreboard : React.FC <ScoreboardProps> = ({answers, addFavorite}) => {
  // console.log(answers)
  const correctAnswers = answers.map(answer => (
    <WordCard 
      definition = {answer}
      addFavorite = {addFavorite}/>
  ));
  
  return (
    <div className='scoreboard'>
      {correctAnswers}
    </div>
  );
};