import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import App from './containers/App'


const Routes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemon" component={App}/>
      </div>
    </Router>
  );
}

export default Routes;
