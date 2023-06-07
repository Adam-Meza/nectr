import React, {useEffect, useState} from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Gameboard } from '../Gameboard/Gameboard';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Switch, Route } from 'react-router-dom';
import { fetchDefinition, fetchLetters } from '../../fetches';
import { cleanDefinitionData, DefinitionProps } from '../../utilites';
import { Aside } from '../Aside/Aside';
import { Favotites } from '../Favorites/Favorites';

function App() {
  const [error, setError] = useState(null),
        [center, setCenter] = useState(''),
        [letters, setLetters] = useState(''),
        [wordlist, setWords] = useState<String[]>([]),
        [currentGuess, setGuess] = useState<String>(''),
        [answers, setAnswers] = useState<String[]>([]),
        [definition, setDefinition] = useState<DefinitionProps>(
          { meanings: [{partOfSpeech: '', definitions: [""]}], word: "", phonetic: ""})

  const updateCurrentGuess = (letter : String) => {
    // console.log('test')
    setGuess([currentGuess, letter].join(''))
  }

  const getDefinition = async (word : String) => {
    try {
      fetchDefinition(word).then((json) => {
        setDefinition(cleanDefinitionData(json[0]))
      })
    } catch(error : any) {
      setError(error)
    }
  }

  const checkGuess = (guess : String) => {
    if ( wordlist.includes(guess)) { 
      const newWordList = wordlist.filter(word => word !== guess)
      setWords(newWordList);
      setAnswers([...answers, guess]);
      setGuess('');
      getDefinition(guess);
    } else {
      // console.log('nada')
      // make this display an error !!!
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

  const deleteLastLetter = () => {
    setGuess(currentGuess.slice(0, -1))
  }
  
  useEffect(() => {
    fetchData()
  }, [])
 
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path ="/favorites" render={ () => (
          <Favotites/>
          )}
        />
        <Route exact path = "/" 
          render = { () => (
            <section className ='home-display'>
              <Gameboard 
              currentGuess = {currentGuess}
              letters= {letters}
              // wordlist={wordlist}
              center={center}
              handleSubmit={handleSubmit}
              updateCurrentGuess={updateCurrentGuess}
              deleteLastLetter = {deleteLastLetter}
              />
              <Aside 
              answers = {answers}
              definition={definition}
              />
            </section>
          )}
        />
    </Switch>
    </div>
  );
}

export default App;
