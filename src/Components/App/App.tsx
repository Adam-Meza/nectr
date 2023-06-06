import React, {useEffect, useState} from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Switch, Route } from 'react-router-dom';

function App() {
  const [error, setError] = useState(null)
  const [center, setCenter] = useState('')
  const [letters, setLetters] = useState('')
  const [wordlist, setWords] = useState<String[]>([])

  const checkGuess = (guess : String) => {
    console.log(guess)
    if ( wordlist.includes(guess)) { 
      console.log('test')
    } else {
      console.log('nada')
    }
  }

  const fetchData = async () => {
    try {
      const response = await fetch('https://freebee.fun/cgi-bin/today')
      if (response.ok) {
        const json = await response.json()
        const {letters, wordlist, center} = json

        setCenter(center)
        setLetters(letters)
        setWords(wordlist)
      } else {
        throw new Error()
      }

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
            letters= {letters}
            wordlist={wordlist}
            center={center}
            checkGuess={checkGuess}
            />
          )}
        />
    </Switch>


    </div>
  );
}

export default App;
