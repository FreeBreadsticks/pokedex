import React from 'react';
import {connect} from 'react-redux';

const PokemonPage = ({pokemon}) => {

  return (
    <div className="container-fluid">
      <h1 className="poke-title">{pokemon.name}</h1>
      <h4 className="poke-title App">Pokedex No: {pokemon.pokedex_num}</h4>
      <hr />
      <div className="poke-page-box">
        <img src={pokemon.img_url} alt="" className="col-sm-4"/>
        <p className="col-sm-6 poke-word">{pokemon.description}</p>
        <p className="col-sm-2"><span className={'page-type poke-word ' + pokemon.poke_type}> {pokemon.poke_type}</span></p>
      </div>

      <div className="row">

      </div>
    </div>
  )
}


const mapStateToProps = (state, ownProps) => {
    const pokemon = state.pokemons.find(pokemon => String(pokemon.id) === ownProps.match.params.id)
    if (pokemon) {
      return { pokemon: pokemon }
    } else {
      return { pokemon: {} }
    }
  }

export default connect(mapStateToProps)(PokemonPage);
