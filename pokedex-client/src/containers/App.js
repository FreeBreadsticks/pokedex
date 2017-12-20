import React, { Component } from 'react';
import PokemonList from './PokemonList';
import './App.css';
import Routes from '../routes'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    };
  }

  render() {
    return (
      <div>
        <Routes />
        <PokemonList pokemons={this.state.pokemons}/>
      </div>
    );
  }
}

export default App;
