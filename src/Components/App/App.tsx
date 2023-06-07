import React, {useEffect, useState} from 'react';
import { Header } from '../Header/Header';
import { Gameboard } from '../Gameboard/Gameboard';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Switch, Route } from 'react-router-dom';
import { fetchDefinition, fetchLetters } from '../../fetches';
import { cleanDefinitionData, DefinitionProps, cleanGameData } from '../../utilites';
import { Favorites } from '../Favorites/Favorites';
import { Scoreboard } from '../Scoreboard/Scoreboard';
import { DefinitionCard } from '../DefinitionCard/DefinitionCard';
import { FavoritesProps } from '../Favorites/Favorites';
import './App.css';
// import { shuffle } from 'lodash';

function App() {
  const [error, setError] = useState(null),
        [center, setCenter] = useState<String>(''),
        [letters, setLetters] = useState<String[]>([]),
        [words, setWords] = useState<String[]>([]),
        [currentGuess, setGuess] = useState<any>(''),
        [answers, setAnswers] = useState<FavoritesProps[]>([{word: '', definition: { meanings: [{partOfSpeech: '', definitions: [""]}], word: "", phonetic: ""}}]),
        [favorites, setFavorites] = useState<FavoritesProps[]>([]),
        [definition, setDefinition] = useState<DefinitionProps>(
          { meanings: [{partOfSpeech: '', definitions: [""]}], word: "", phonetic: ""})

  const updateCurrentGuess = (letter : String)  : void => {
    setGuess([currentGuess, letter].join(''))
  }

  const getDefinition = async (word : String) => {
    try {
      fetchDefinition(word).then((json) => {
        setDefinition(cleanDefinitionData(json[0]))

        const newAnswer = {
          word: word,
          definition: definition
        }

        setAnswers([...answers, newAnswer]);
      })
    } catch(error : any) {
      setError(error)
    }
  }

  const checkGuess = (guess : String) => {
    guess = guess.toLowerCase()
    if ( words.includes(guess.toLowerCase())) { 
      const newWords = words.filter(word => word !== guess)
      setWords(newWords);

      setGuess('');
      getDefinition(guess);
    } else {
      // 121234234234234234234234234234234
      // console.log('nada')
      // make this display an error !!!
    }
  }

  const handleSubmit = ()  : void => {
    checkGuess(currentGuess)
    setGuess('')
  }


  const fetchData = async () => {
    try {
      fetchLetters().then((json) => {

        const {letters, words, center} = cleanGameData(json)
        setCenter(center)
        setLetters(letters)
        setWords(words)
      })

    } catch(error : any) {
      setError(error)
    }
  }

  const deleteLastLetter = () : void => {
    setGuess(currentGuess.slice(0, -1))
  }

  const randomizeLetters = () => {
    // setGuess(shuffle(currentGuess))
  }

  const addFavorite = (newWord : any) => {
    setFavorites([...favorites, newWord])
  }
  
  useEffect(() => {
    fetchData()
  }, [])
 
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path ="/favorites" render={ () => (
          <Favorites favorites ={favorites}/>
          )}
        />
        <Route exact path = "/" 
          render = { () => (
            <section className ='home-display'>
              <Gameboard 
              currentGuess = {currentGuess}
              letters= {letters}
              center={center}
              handleSubmit={handleSubmit}
              updateCurrentGuess={updateCurrentGuess}
              deleteLastLetter = {deleteLastLetter}
              randomizeLetters = {randomizeLetters}
              />
              <aside>
                <Scoreboard answers = {answers} addFavorite= {addFavorite}/>
                <DefinitionCard definition = {definition}/>
              </aside>
            </section>
          )}
        />
    </Switch>
    </div>
  );
}

export default App;
