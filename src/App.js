import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.scss';
import './App.scss';
import Location from './components/Location';
import Results from './components/Results';
import Contact from './components/Contact';

class App extends Component {
  render() {
	  //const selected = props.selected;

	  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="finder">
          <Location />
          <Results />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;