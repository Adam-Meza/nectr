import React from "react";
import { Gameboard } from '../Gameboard/Gameboard';
import { Scoreboard } from '../Scoreboard/Scoreboard';
import { Definition } from '../Definition/Definition';
import { Aside } from "../Aside/Aside";

interface MainProps {
  letters : String;
  currentGuess : String
  center: String;
  wordlist: String[];
  checkGuess:  (guess : String) => void;
  updateCurrentGuess : (letter : String) => void
}

export const Main : React.FC<MainProps> = ({checkGuess, currentGuess, letters, center, wordlist, updateCurrentGuess}) => {
  return (
    <>
    <main>
  <Gameboard
    updateCurrentGuess = {updateCurrentGuess}
    currentGuess={currentGuess}
    checkGuess={checkGuess}
    letters ={letters} 
    center ={center} 
    words ={wordlist} />
  </main>
  <Aside currentGuess = {currentGuess}/>
  </>
  )
}