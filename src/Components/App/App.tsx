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
import { Stats } from '../Stats/Stats';
import './App.css';

function App() {
  const [error, setError] = useState<String>(''),
        [center, setCenter] = useState<String>(''),
        [letters, setLetters] = useState<String[]>([]),
        [words, setWords] = useState<String[]>([]),
        [currentGuess, setGuess] = useState<String>(''),
        [answers, setAnswers] = useState<DefinitionProps[]>([]),
        [favorites, setFavorites] = useState<DefinitionProps[]>([]),
        [definition, setDefinition] = useState<DefinitionProps>(
          { meanings: [{partOfSpeech: '', definitions: [""]}], word: "", phonetic: ""})

  useEffect(() => {
    fetchData();
  }, []);
 
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

  const checkGuess = (guess : String) : void => {
    guess = guess.toLowerCase();
    if (words.includes(guess.toLowerCase())) { 
      const newWords = words.filter(word => word !== guess);
      setWords(newWords);
      getDefinition(guess);
      setGuess('');
    } else if (guess.length < 4) {
      setError('Guesses must be at least 4 letters!');
    } else if (answers.find(answer => answer.word === guess) ){
      setError('You already got that word!')
    } else {
      setError('Please enter a valid word!');
    };
  };

  const handleSubmit = ()  : void => {
    setError('')
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

  // Funcitons for gameplay buttons
  const deleteLastLetter = () : void => {
    setGuess(currentGuess.slice(0, -1));
  };

  const randomizeLetters = () : void => {
    const shuffledLetters = letters.slice().sort(function() {
      return 0.5 - Math.random();
    });
    setLetters(shuffledLetters);
  };

  const updateCurrentGuess = (letter : String)  : void => {
    setGuess([currentGuess, letter].join(''));
  };

  //functions for word cards
  const unfavorite = (wordToUnfavorite : any) => {
    const updatedFavorites = favorites.filter(word => word !== wordToUnfavorite)
    setFavorites([...updatedFavorites])
  }

  const addFavorite = (newDefinition : DefinitionProps ) => {
    if (!favorites.includes(newDefinition)) {
      setFavorites([...favorites, newDefinition]);
    }
  };
  
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path ="/favorites" render={ () => (
          <Favorites favorites ={favorites}/>
          )}
        />
        <Route exact path = "/stats" render={ ()=> (
          <Stats total={words.length} correctAnswers={answers}/>
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
              <Scoreboard
                answers = {answers}
                addFavorite= {addFavorite}
                unfavorite = {unfavorite}
              />
                { !error && <DefinitionCard definition = {definition}/> }
                { error && <ErrorMessage message={error}/> }
              </aside>
            </section>
          )}
        />
    </Switch>
    </div>
  );
};

export default App;
