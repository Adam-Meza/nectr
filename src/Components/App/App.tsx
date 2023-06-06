import React, {useEffect, useState} from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Switch, Route } from 'react-router-dom';
import { fetchDefinition, fetchLetters } from '../../fetches';

function App() {
  const [error, setError] = useState(null)
  const [center, setCenter] = useState('')
  const [letters, setLetters] = useState('')
  const [wordlist, setWords] = useState<String[]>([])
  const [currentGuess, setGuess] = useState<String>('')
  const [answers, setAnswers] = useState<String[]>([])

  const updateCurrentGuess = (letter : String) => {
    console.log('test')
    setGuess([currentGuess, letter].join(''))
  }

  const checkGuess = (guess : String) => {
    if ( wordlist.includes(guess)) { 
      const newWordList = wordlist.filter(word => word !== guess)
      setWords(newWordList)
      setAnswers([...answers, guess])
      // console.log(getDefinition(guess))
      setGuess('')
    } else {
      console.log('nada')
    }
  }

  const handleSubmit = () => {
    checkGuess(currentGuess)
    setGuess('')
  }

  const fetchData = async () => {
    try {
      fetchLetters().then((json) => {
        const {letters, wordlist, center} = json

        setCenter(center)
        setLetters(letters)
        setWords(wordlist)
      })

    } catch(error : any) {
      setError(error)
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [])
 
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path = "/" 
          render = { () => (
            <Main 
            currentGuess = {currentGuess}
            letters= {letters}
            wordlist={wordlist}
            center={center}
            handleSubmit={handleSubmit}
            updateCurrentGuess={updateCurrentGuess}
            answers = {answers}
            />
          )}
        />
    </Switch>


    </div>
  );
}

export default App;
