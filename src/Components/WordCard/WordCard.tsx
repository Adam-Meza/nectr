import React from "react";
import './word-card.css'
import { add } from "lodash";
import { DefinitionProps } from "../../utilites";

interface WordCardProps {
  word: String
  definition: DefinitionProps
  addFavorite: (word : String) => void
}

export const WordCard : React.FC<WordCardProps> = ({word, addFavorite}) => {
  return (
    <div className="word-card">
      <h3>{word}</h3>
      <button onClick={() => addFavorite(word)}>favorite button</button>
    </div>
  )
}