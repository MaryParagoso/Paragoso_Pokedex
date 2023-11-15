import React from 'react';
import Pokecard from './Pokecard';

const Pokedex = ({ pokemon, isWinner, playerName, totalExp }) => {
  const playerClassName = isWinner ? 'pokedex winner' : 'pokedex';

  return (
    <div className={playerClassName}>
      <div>Total Base Experience: {totalExp}<h2>{playerName}</h2></div>
      <div className="pokegame-grid">
        {pokemon.map((p) => (
          <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
