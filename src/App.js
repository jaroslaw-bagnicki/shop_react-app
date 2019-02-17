import React, { Component } from 'react';
import './App.css';

import { Home } from './containers';
import { Navigation, Footer } from './components';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <Home />
        <Footer/>
      </div>
    );
  }
}
