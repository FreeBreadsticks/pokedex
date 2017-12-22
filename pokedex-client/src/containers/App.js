import React, { Component } from 'react';
import PokemonList from './PokemonList';
import PokemonForm from './PokemonForm';
import PokemonPage from '../components/PokemonPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home'
import About from '../components/About'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemons" component={PokemonList}/>
          <Route exact path="/pokemons/:id" component={PokemonPage}/>
          <Route exact path="/pokemon/new" component={PokemonForm}/>
          <Route exact path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
