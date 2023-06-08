import React, {useEffect, useState} from "react";
import './word-card.css';
import { DefinitionProps } from "../../utilites";
 

interface WordCardProps {
  definition: DefinitionProps;
  unfavorite: (word : any) => void
  addFavorite: (definition : DefinitionProps) => void;
};

export const WordCard : React.FC<WordCardProps> = ({definition, addFavorite, unfavorite}) => {
  const[favorite, setFavorite] = useState<Boolean | null>(false)

  const handleFavoriteToggle = () => {
    if (!favorite) {
      addFavorite(definition)
      setFavorite(true)
    } else {
      unfavorite(definition)
      setFavorite(null)
    }
  }

  useEffect(()=> {

  }, [])
  return (
    <div className="word-card">
      <h3>{definition.word}</h3>
      {!favorite && <button className="favorite-button" onClick={() => handleFavoriteToggle()}>Favorite</button>}
      {favorite && <button className="favorite-button" onClick={() => unfavorite(definition)}>Unfavorite</button>}
    </div>
  );
};