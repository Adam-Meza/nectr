import React from "react";
import { Gameboard } from '../Gameboard/Gameboard';

interface MainProps {
  answers : String[]
  letters : String;
  currentGuess : String
  center: String;
  wordlist: String[];
  handleSubmit : () => void
  updateCurrentGuess : (letter : String) => void
}

export const Main : React.FC<MainProps> = ({handleSubmit, answers, currentGuess, letters, center, wordlist, updateCurrentGuess}) => {
  return (
      <main>
        <Gameboard
          updateCurrentGuess = {updateCurrentGuess}
          currentGuess={currentGuess}
          handleSubmit={handleSubmit}
          letters ={letters} 
          center ={center} 
          words ={wordlist} />
    </main>
  )
}