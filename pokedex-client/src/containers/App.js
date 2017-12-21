import React, { Component } from 'react';
import PokemonList from './PokemonList';
import PokemonForm from './PokemonForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemons" component={PokemonList}/>
          <Route exact path="/pokemon/new" component={PokemonForm}/>
          <Route exact path="/pokemon/:id/new" component={PokemonForm}/>
        </div>
      </Router>
    );
  }
}

export default App;
