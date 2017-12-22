import React from 'react';
import {connect} from 'react-redux';

const PokemonPage = ({pokemon}) => {
  const myPoke = {description: "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.", id: 13, img_url: "https://img.pokemondb.net/artwork/venusaur.jpg", name: "Venasaur", poke_type: "Grass", pokedex_num: 3}
  return (
    <div className="container-fluid">
      <h1 className="poke-title">{myPoke.name}</h1>
      <h4 className="poke-title App">Pokedex No: {myPoke.pokedex_num}</h4>
      <hr />
      <div className="poke-page-box">
        <img src={myPoke.img_url} alt="" className="col-sm-4"/>
        <p className="col-sm-6 poke-word">{myPoke.description}</p>
        <p className="col-sm-2"><span className={'page-type poke-word ' + myPoke.poke_type}> {myPoke.poke_type}</span></p>
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
