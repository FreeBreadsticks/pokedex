import React from 'react';
import EllipsisText  from 'react-ellipsis-text';

const PokemonCard = ({pokemon}) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.img_url} alt="" className="poke-img col-3"/>
      <p className="poke-name">{pokemon.name}</p>
      <p className="dex-num">#0{pokemon.pokedex_num}</p>
      <span className={pokemon.poke_type}>{pokemon.poke_type}</span>
      <div className="poke-description">
        <EllipsisText text={pokemon.description} length={130} />
      </div>
    </div>
  );
}

export default PokemonCard;
