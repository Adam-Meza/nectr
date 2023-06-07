import React, { useEffect } from "react";
// import { FavoritesProps } from "../App/App";
import { DefinitionProps } from "../../utilites";
import { FavoriteCard } from "../FavoriteCard/FavoriteCard";

export interface FavoritesProps {
  word: String;
  definition: DefinitionProps;
}

interface test {
  favorites: any[]
}

export const Favorites : React.FC<test> = (props) => {
  useEffect(() => {
    console.log(props)
  })

  // const favoriteCards = props..map((fav : FavoritesProps)=> {
  //   return ( <FavoriteCard favorite ={fav}/> )
  // })
  return (
    <section>
      
    </section>
  )
}