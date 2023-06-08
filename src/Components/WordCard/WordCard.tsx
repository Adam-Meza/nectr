import React from "react";
import './word-card.css';
import { add } from "lodash";
import { DefinitionProps } from "../../utilites";

interface WordCardProps {
  definition: DefinitionProps;
  addFavorite: (definition : DefinitionProps) => void;
};

export const WordCard : React.FC<WordCardProps> = ({definition, addFavorite}) => {
  // console.log(definition)
  return (
    <div className="word-card">
      <h3>{definition.word}</h3>
      <button onClick={() => addFavorite(definition)}>Favorite</button>
    </div>
  );
};