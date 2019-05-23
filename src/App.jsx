import React, { Component } from 'react';
import './Theme.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SelecionarMoeda from './components/SelecionarMoeda'
import Conversor from './components/Conversor'
import PaginaDesconhecida from './components/404'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SelecionarMoeda} />
          <Route path='/conversor' component={Conversor} />
          <Route component={PaginaDesconhecida} /> { /* Caso o path não exista */ }
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;