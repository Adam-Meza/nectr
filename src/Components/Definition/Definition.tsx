import React, { useState } from "react";
import './/Definition.css'
import { DefinitionProps } from "../../utilites";

interface DefinitionCardProps {
  definition: DefinitionProps
}

export const DefinitionCard : React.FC<DefinitionCardProps> = ({definition}) => {
  const {word, meanings, phonetic} = definition
  console.log(definition)
  // console.log(word, meanings, phonetic)
  return (
    <div className="definition">
      <h2>{word}</h2>
      <p>{phonetic}</p>
      {/* <h3>{meanings[0]}</h3> */}
    </div>
  )
}

