import React from "react";
import { Boardpiece } from "../Boardpiece/Boardpiece";
import './/gameboard.css'

interface GameboardProps {
  center: String
  letters: any
  // wordList: String[]
  currentGuess: String
  deleteLastLetter: () => void;
  handleSubmit: () => void;
  updateCurrentGuess : (letter : String) => void;
}

export const Gameboard : React.FC<GameboardProps> = ({deleteLastLetter, handleSubmit, currentGuess, center, letters, updateCurrentGuess}) => {

  letters = letters.split('')
  return (
    <main>
        <h2>{currentGuess}</h2>
      <section className = 'gameboard'>
      <div className="piece-container">
        <Boardpiece updateCurrentGuess= {updateCurrentGuess} letter = {letters[0]}/>
        <Boardpiece updateCurrentGuess= {updateCurrentGuess} letter = {letters[1]}/>
      </div>
      <div className="piece-container">
        <Boardpiece updateCurrentGuess= {updateCurrentGuess} letter = {letters[2]}/>
        <Boardpiece updateCurrentGuess= {updateCurrentGuess} letter = {center} center = {true}/>
        <Boardpiece updateCurrentGuess= {updateCurrentGuess} letter = {letters[3]}/>
      </div>
      <div className="piece-container">
        <Boardpiece updateCurrentGuess= {updateCurrentGuess} letter = {letters[4]}/>
        <Boardpiece updateCurrentGuess= {updateCurrentGuess} letter = {letters[5]}/>
      </div>
      </section>
      <div className ='button-container'>
        <button onClick = {() => handleSubmit()}>ENTER</button>
        <button onClick={()=> deleteLastLetter()}>DELETE</button>
        <button></button>
      </div>
    </main>
  )
}