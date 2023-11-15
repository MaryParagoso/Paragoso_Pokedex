import React, { useState } from 'react';
import Pokedex from './Pokedex';

const Pokegame = ({ pokemon }) => {
  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const [exchangeCards, setExchangeCards] = useState(false);

  const shuffledPokemon = exchangeCards ? shuffleArray(pokemon) : pokemon;
  const hand1 = shuffledPokemon.slice(0, 4);
  const hand2 = shuffledPokemon.slice(4);

  const calculateTotalExperience = (hand) => {
    return hand.reduce((total, p) => total + p.base_experience, 0);
  };

  const totalExp1 = calculateTotalExperience(hand1);
  const totalExp2 = calculateTotalExperience(hand2);

  const isWinner1 = totalExp1 > totalExp2;
  const isWinner2 = totalExp2 > totalExp1;

  const handleExchangeCards = () => {
    setExchangeCards(true);
  };

  return (
    <div className="pokegame">

      <div className="row">
        <Pokedex pokemon={hand1} isWinner={isWinner1} playerName="Player 1" totalExp={totalExp1} />
        <Pokedex pokemon={hand2} isWinner={isWinner2} playerName="Player 2" totalExp={totalExp2} />
      </div>
    </div>
  );
};

export default Pokegame;