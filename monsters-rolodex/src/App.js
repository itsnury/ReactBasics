import { Component } from 'react';
/*
component class allows us to turn functional components
to class component
*/
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // consructor always runs first when App is called
  constructor() {
    super(); // overrides methods of superclass Component

    this.state = {
      name: 'Nury'
    } // state is always a json object
  }

  // explicitly telling our class component to render app
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
          <button 
            onClick={() => {
              this.setState({name:'Devin'})
            }}
          >
          Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
