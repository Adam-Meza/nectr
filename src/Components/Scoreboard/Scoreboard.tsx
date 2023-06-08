import React, {useState} from "react";
import './/Scoreboard.css'
import { WordCard } from "../WordCard/WordCard";
import { DefinitionProps } from "../../utilites";

interface ScoreboardProps {
  answers : DefinitionProps[];
  addFavorite: (definition : DefinitionProps) => void;
  unfavorite : (word : any) => void;
};

export const Scoreboard : React.FC <ScoreboardProps> = ({answers, addFavorite, unfavorite}) => {
  const correctAnswers = answers.map(answer => (
    <WordCard 
      definition = {answer}
      addFavorite = {addFavorite}
      unfavorite = {unfavorite}
      />
  ));
  
  return (
    <div className='scoreboard'>
      {correctAnswers}
    </div>
  );
};