import React, { Component } from 'react';
import PokemonList from './PokemonList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Pokedex</h1>
      <PokemonList />
      </div>
    );
  }
}

export default App;
