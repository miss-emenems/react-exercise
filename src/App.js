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