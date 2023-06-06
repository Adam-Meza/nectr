import React from "react";
import { Boardpiece } from "../Boardpiece/Boardpiece";
import './/gameboard.css'

interface GameboardProps {
  center: String
  letters: any
  words: String[]
  currentGuess: String
  handleSubmit: () => void;
  updateCurrentGuess : (letter : String) => void;
}

export const Gameboard : React.FC<GameboardProps> = ({handleSubmit, currentGuess, center, letters, updateCurrentGuess}) => {

  letters = letters.split('')
  return (
    <section>
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
        <button onClick = {() => handleSubmit()}></button>
        {/* <button></button>
        <button></button> */}
      </div>
    </section>
  )
}