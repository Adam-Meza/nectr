import React from "react";
import './favorite-card.css'
import { FavoritesProps } from "../Favorites/Favorites";

interface FavoriteCardProps {
  favorite : any
}

export const FavoriteCard : React.FC<FavoriteCardProps> = ({favorite}) => {
  const {word} = favorite
  return (
    <div>
      <h2>{word}</h2>
      <p></p>
    </div>
  )
}