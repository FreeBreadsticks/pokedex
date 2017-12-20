import React, { Component } from 'react';
import PokemonList from './PokemonList'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/pokemons')
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemon }))
  }


  render() {
    console.log(this.state);
    return (
      <div className="App">
      <h1>Pokedex</h1>
      <PokemonList pokemons={this.state.pokemon}/>
      </div>
    );
  }
}

export default App;
