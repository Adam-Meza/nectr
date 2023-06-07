import React from "react";
import { Boardpiece } from "../Boardpiece/Boardpiece";
import './/gameboard.css'

interface GameboardProps {
  center: String
  letters: String[]
  currentGuess: String
  deleteLastLetter: () => void;
  handleSubmit: () => void;
  updateCurrentGuess : (letter : String) => void;
  randomizeLetters : () => void
}

export const Gameboard : React.FC<GameboardProps> = ({randomizeLetters, deleteLastLetter, handleSubmit, currentGuess, center, letters, updateCurrentGuess}) => {
  const boardPieces = letters.map((letter : String) => {
    return <Boardpiece updateCurrentGuess= {updateCurrentGuess} letter ={letter}/>
  })

  return (
    <main>
        <h2>{currentGuess}</h2>
      <section className = 'gameboard'>
      <div className="piece-container">
        {boardPieces[0]}
        {boardPieces[1]}
      </div>
      <div className="piece-container">
        {boardPieces[2]}
        <Boardpiece updateCurrentGuess= {updateCurrentGuess} letter = {center} />
        {boardPieces[3]}
      </div>
      <div className="piece-container">
        {boardPieces[4]}
        {boardPieces[5]}
      </div>
      </section>
      <div className ='button-container'>
        <button onClick = {() => handleSubmit()}>ENTER</button>
        <button onClick={()=> deleteLastLetter()}>DELETE</button>
        <button onClick ={()=> randomizeLetters()}>RANDOM</button>
      </div>
    </main>
  )
}