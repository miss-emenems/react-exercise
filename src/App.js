import React, { Component } from 'react';
import './App.scss';
import Find from './components/Find';

import Contact from './components/Contact';

class App extends Component {
  render() {
	  //const selected = props.selected;

	  return (
      <div className="App">
        <div className="finder">
          <Find />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;