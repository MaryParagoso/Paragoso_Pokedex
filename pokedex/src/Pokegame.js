/*Pokegame.js*/
import React, { useState, useEffect } from 'react';
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

  const [shuffledPokemon, setShuffledPokemon] = useState(pokemon);
  const [winner, setWinner] = useState(null);

  const hand1 = shuffledPokemon.slice(0, 4);
  const hand2 = shuffledPokemon.slice(4);

  const calculateTotalExperience = (hand) => {
    return hand.reduce((total, p) => total + p.base_experience, 0);
  };

  const totalExp1 = calculateTotalExperience(hand1);
  const totalExp2 = calculateTotalExperience(hand2);

  const isWinner1 = totalExp1 > totalExp2;
  const isWinner2 = totalExp2 > totalExp1;

  const handleShuffleCards = () => {
    const newShuffledPokemon = shuffleArray(pokemon);
    setShuffledPokemon(newShuffledPokemon);
    setWinner(null); // Reset the winner when shuffling
  };

  // Determine the winner when the "Shuffle Cards" button is clicked
  useEffect(() => {
    if (isWinner1) {
      setWinner('Player 1 is the Winner!');
    } else if (isWinner2) {
      setWinner('Player 2 is the Winner!');
    } else {
      setWinner('It\'s a Tie!');
    }
  }, [totalExp1, totalExp2]);

  return (
    <div className="pokegame">
      <div className="row">
        <Pokedex pokemon={hand1} isWinner={isWinner1} playerName="PLAYER 1" />
        <div className="middleClass">
          <div className="logo">
            {winner && <div className="winner-message">{winner}</div>}
          </div>
          <div className="mainFunction">
            <button onClick={handleShuffleCards}>Shuffle Cards</button>
            
          </div>
        </div>
        <Pokedex pokemon={hand2} isWinner={isWinner2} playerName="PLAYER 2" />
      </div>
    </div>
  );
};

export default Pokegame;
