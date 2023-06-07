import React from "react";
import './meaning-card.css'

interface MeaningCardProps {
  partOfSpeech: String;
  meaning: String;
}

export const MeaningCard : React.FC<MeaningCardProps> = ({partOfSpeech, meaning}) => {
  return (
    <div>
      <p className="part-of-speech">{partOfSpeech}</p>
      <p className="meaning">{meaning}</p>
    </div>
  )
}
