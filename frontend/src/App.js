import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import RootHome from './components/home/RootHome' ;
import RootLogin from './components/login/RootLogin' ;
import RootOffer from './components/offer/RootOffer' ;

import counterpart  from 'counterpart';
counterpart.registerTranslations('en',require('./../locales/en'));
counterpart.registerTranslations('fr',require('./../locales/fr'));
export default class App extends Component {
  
  render() {
    return (
      <Switch>
      <Route exact path="/" component={RootLogin} />
      <Route exact path="/offers" component={RootOffer} />

      </Switch>
    );
  }
}
