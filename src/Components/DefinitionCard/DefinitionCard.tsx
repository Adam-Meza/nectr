import React from "react";
import './DefinitionCard.css'
import { DefinitionProps, MeaningProps } from "../../utilites";
import { MeaningCard } from "../MeaningCard/MeaningCard";

interface DefinitionCardProps {
  definition: DefinitionProps
}

export const DefinitionCard : React.FC<DefinitionCardProps> = ({definition}) => {
  const {word, meanings, phonetic} = definition
  const meaningCards = meanings.map((meaningInst : MeaningProps) => {
    const {partOfSpeech, definitions} = meaningInst
    return <MeaningCard partOfSpeech={partOfSpeech} meaning ={definitions}/>
  })
  return (
    <div className="definition">
      <h2>{word}</h2>
      <p>{phonetic}</p>
      {meaningCards}
    </div>
  )
}

