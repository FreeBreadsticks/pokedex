import React, {Component} from 'react';
import PokemonCard from '../components/PokemonCard'
import PokemonForm from './PokemonForm';
import {connect} from 'react-redux';
import * as pokemonActions from '../actions/pokemonActions';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';

class PokemonList extends Component {

  componentDidMount(){
    this.props.actions.loadPokemon();
  }


  render() {
    const sortedPokes = this.props.pokemons.sort(function(a, b) {
      return a.pokedex_num - b.pokedex_num
    })
    console.log(this.props);
    return (
      <div className="container-fluid">
        <h1 className="App poke-title">The Pokedex</h1>
        <div className="text-center">
          <Link to="/pokemon/new" className='text-center btn btn-warning' role="button">Add New Pokemon</Link>
        </div>

        {sortedPokes.length > 0 && sortedPokes.map(pokemon =>
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        )}
        <br />
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
