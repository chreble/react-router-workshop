import React from 'react';
import logo from './logo.svg';
import './App.css';

import Router from 'react-router/BrowserRouter'
import {Match, Miss} from 'react-router'

import Navigation from './navigation';
import Home from './home';
import About from './aboutus';
import NotFound from './notfound';

var App = () => {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Navigation />
        <div className="App-intro">
          <Match pattern="/" exactly component={Home} />
          <Match pattern="/about" component={About} />
          <Miss component={NotFound} />
        </div>
      </div>
    </Router>
  )
}

export default App;
