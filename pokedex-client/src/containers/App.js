import React, { Component } from 'react';
import PokemonList from './PokemonList';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/pokemons" component={PokemonList}/>
        </div>
      </Router>
    );
  }
}

export default App;
