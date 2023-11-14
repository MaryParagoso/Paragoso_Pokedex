// Pokedex.js
import React from 'react';
import Pokecard from './Pokecard';

const Pokedex = ({ pokemon, isWinner }) => {
    return (
        <div className={`pokedex ${isWinner ? 'winner' : ''}`}>
            {pokemon.map((p) => (
                <div key={p.id} className="pokecard-container">
                    <Pokecard
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        base_experience={p.base_experience}
                    />
                </div>
            ))}
            {isWinner && <p className="winner-message">THIS HAND WINS!</p>}
        </div>
    );
};

Pokedex.defaultProps = {
    pokemon: [],
    isWinner: false,
};

export default Pokedex;
