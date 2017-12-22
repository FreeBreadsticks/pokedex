import React from 'react';
import EllipsisText  from 'react-ellipsis-text';
import {Link} from 'react-router-dom';

const PokemonCard = ({pokemon}) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.img_url} alt="" className="poke-img"/>
      <p className="poke-name">{pokemon.name}</p>
      <p className="dex-num">#0{pokemon.pokedex_num}</p>
      <span className={pokemon.poke_type}>{pokemon.poke_type}</span>
      <div className="poke-description">
        <EllipsisText text={pokemon.description} length={130} />
      </div>
      <Link to={'/pokemons/' + pokemon.id } className="btn btn-info poke-button">Learn More</Link>
    </div>
  );
}

export default PokemonCard;
