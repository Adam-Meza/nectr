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
import './App.css';

function App() {
  const [error, setError] = useState(null),
        [center, setCenter] = useState<String>(''),
        [letters, setLetters] = useState<String[]>([]),
        [words, setWords] = useState<String[]>([]),
        [currentGuess, setGuess] = useState<String>(''),
        [answers, setAnswers] = useState<DefinitionProps[]>([]),
        [favorites, setFavorites] = useState<DefinitionProps[]>([]),
        [definition, setDefinition] = useState<DefinitionProps>(
          { meanings: [{partOfSpeech: '', definitions: [""]}], word: "", phonetic: ""})

  const updateCurrentGuess = (letter : String)  : void => {
    setGuess([currentGuess, letter].join(''));
  };

  const getDefinition = async (word: String) => {
    try {
      const json = await fetchDefinition(word);
      const cleanedDefinition = cleanDefinitionData(json[0]);
      
      setDefinition(cleanedDefinition);  
      setAnswers((prevAnswers) => [...prevAnswers, cleanedDefinition]);  

    } catch (error : any) {
      setError(error);
    }
  };
  

  const checkGuess = (guess : String) => {
    guess = guess.toLowerCase();
    if (words.includes(guess.toLowerCase())) { 
      const newWords = words.filter(word => word !== guess);
      setWords(newWords);
      getDefinition(guess);
      setGuess('');
    } else if (guess.length < 4) {
      console.log('it was less than Four!');
    } else {
      console.log('not a valid word!');
    };
  };

  const handleSubmit = ()  : void => {
    console.log(currentGuess)
    checkGuess(currentGuess);
    setGuess('');
  };

  const fetchData = async () => {
    try {
      fetchLetters().then((json) => {
        console.log(json)
        const {letters, words, center} = cleanGameData(json);
        setCenter(center);
        setLetters(letters);
        setWords(words);
      });
    } catch(error : any) {
      setError(error)
    };
  };

  const deleteLastLetter = () : void => {
    setGuess(currentGuess.slice(0, -1));
  };

  const randomizeLetters = () => {
    const shuffledLetters = letters.slice().sort(function() {
      return 0.5 - Math.random();
    });
    setLetters(shuffledLetters);
  };

  const addFavorite = (newDefinition : DefinitionProps ) => {
    setFavorites([...favorites, newDefinition]);
  };
  
  useEffect(() => {
    fetchData();
  }, []);
 
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path ="/favorites" render={ () => (
          <Favorites favorites ={favorites}/>
          )}
        />
        <Route exact path ="/" 
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
};

export default App;
