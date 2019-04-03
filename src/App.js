import React, { Component } from 'react';
import './App.css';
import Clients from './components/Clients';
import Header from './components/Header';

class App extends Component {
  state = {
    Clients: [
      {
        id: 1,
        name: 'Joe Shmoe',
        talkedTo: false
      },
      {
        id: 2,
        name: 'Bart Simpson',
        talkedTo: false
      },
      {
        id: 3,
        name: 'Heidi Klum',
        talkedTo: false
      }
    ]
  }
  render() {
    console.log(Clients)
    return (
      <div className="App">
        <Header />
          <p>Happy Birthday, Tyler</p>
        <Clients clients={this.state.Clients} />
      </div>
    );
  }
}

export default App;
