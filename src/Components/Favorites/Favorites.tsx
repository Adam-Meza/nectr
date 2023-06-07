import React, { useEffect } from "react";
// import { FavoritesProps } from "../App/App";
import { DefinitionProps } from "../../utilites";
import { FavoriteCard } from "../FavoriteCard/FavoriteCard";

export interface FavoritesProps {
  word: String;
  definition: DefinitionProps;
}

interface FavoritesCompProps {
  favorites: FavoritesProps[]
}

export const Favorites : React.FC<FavoritesCompProps> = ({favorites}) => {
  // useEffect(() => {
  //   console.log(favorites)
  // })

  const favoriteCards = favorites.map((fav : FavoritesProps)=> {
    return ( <FavoriteCard favorite ={fav}/> )
  })
  return (
    <section>
      
    </section>
  )
}