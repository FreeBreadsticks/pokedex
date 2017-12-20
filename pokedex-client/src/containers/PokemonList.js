import React, {Component} from 'react';
import PokemonCard from '../components/PokemonCard'
import PokemonForm from './PokemonForm';
import {connect} from 'react-redux';
import * as pokemonActions from '../actions/pokemonActions';
import {bindActionCreators} from 'redux';

class PokemonList extends Component {

  render() {
    const sortedPokes = this.props.pokemons.sort(function(a, b) {
      return a.pokedex_num - b.pokedex_num
    })

    return (
      <div className="container-fluid">
        <h1 className="App poke-title">The Pokedex</h1>
        <PokemonForm />
        {sortedPokes.map(pokemon =>
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        )}
      </div>
    )
  }

}

function mapStateToProps(state){
  return ({
    pokemons: state.pokemons
  })
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pokemonActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
