import React from "react";
import { Gameboard } from '../Gameboard/Gameboard';
import { Scoreboard } from '../Scoreboard/Scoreboard';
import { Definition } from '../Definition/Definition';
import { Aside } from "../Aside/Aside";

interface MainProps {
  letters : String;
  center: String;
  wordlist: String[];
  checkGuess:  (guess : String) => void;
}

export const Main : React.FC<MainProps> = ({checkGuess, letters, center, wordlist}) => {
  return (
    <>
    <main>
  <Gameboard 
    checkGuess={checkGuess}
    letters ={letters} 
    center ={center} 
    words ={wordlist} />
  </main>
  <Aside/>
  </>
  )
}