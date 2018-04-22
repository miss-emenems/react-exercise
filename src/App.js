import React, { Component } from 'react';
import './App.scss';
import Find from './components/Find';

import Contact from './components/Contact';


class App extends Component {

	constructor(props) {
    super(props);
    this.state = {
      step3: false
    };
		this.displayStep3 = this.displayStep3.bind(this);
  }

  displayStep3() {
	  this.setState((prevState) => ({
        step3: !prevState.step3
      })
    );
  }

  render() {

	  return (
      <div className="App">
        <div className="finder">
          {
            !this.state.step3 ? <Find action={ this.displayStep3 }/> : <Contact />
          }
        </div>
      </div>
    );
  }
}


export default App;