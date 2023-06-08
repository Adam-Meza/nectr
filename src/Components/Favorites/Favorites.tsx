import React, { useEffect } from "react";
// import { FavoritesProps } from "../App/App";
import { DefinitionProps } from "../../utilites";
import { DefinitionCard } from "../DefinitionCard/DefinitionCard";

interface FavoritesCompProps {
  favorites: DefinitionProps[]
}

export const Favorites : React.FC<FavoritesCompProps> = ({favorites}) => {
  const favoriteCards = favorites.map((fav : DefinitionProps)=> {
    return ( <DefinitionCard definition ={fav}/> )
  })

  return (
    <section>
      {favoriteCards}
    </section>
  )
}