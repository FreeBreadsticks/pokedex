import React from 'react';

const PokemonCard = ({pokemon}) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.img_url} alt="" className="poke-img col-3"/>
      <p className="poke-name">{pokemon.name}</p>
      <br/>
      <div className="poke-description">
        {pokemon.description}
      </div>
      <div className="row">

      </div>
    </div>
  );
}

export default PokemonCard;
