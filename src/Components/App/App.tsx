import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import { cleanData } from '../../utilites';
import { Header } from '../Header/Header';
import { ErrorComp } from '../Error/Error';
import './App.css';
import { fetchAllCards } from '../../apiCalls';

export type PokeCard = {
  image: string;
  name: string;
  types: string[];
  cardId: string;
};

const App: React.FC = () => {
  const [allCards, setCards] = useState<PokeCard[]>([]);
  const [favorites, setFavorites] = useState<PokeCard[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  const chooseCard = (pokemon: PokeCard) => {
    const newFavState = [...favorites, pokemon];
    setFavorites(newFavState);
  };

  const removeFavorite = (cardToRemove: PokeCard) => {
    const updatedFavs = favorites.filter(
      (card) => card.cardId !== cardToRemove.cardId
    );
    setFavorites(updatedFavs);
  };

  useEffect(() => {
    try {
      fetchAllCards().then((data) => {
        const cardData = cleanData(data.data);
        setCards(cardData);
        setLoading(false);
      });
    } catch (err: any) {
      setError(err);
    }
  }, []);

  return (
    <section className="main">
      <Header />
      {loading && <div className="loading-text">Loading...</div>}
      {error && (
        <div className="error-text">
          {error.name}: {error.message}
        </div>
      )}
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Main
              data={allCards}
              chooseCard={chooseCard}
              removeFavorite={removeFavorite}
            />
          )}
        />
        <Route
          exact
          path="/favorites"
          render={() => (
            <Main
              data={favorites}
              chooseCard={chooseCard}
              removeFavorite={removeFavorite}
            />
          )}
        />
        <Route path="*" render={() => <ErrorComp />} />
      </Switch>
    </section>
  );
};

export default App;
