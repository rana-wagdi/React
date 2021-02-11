import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { name: "Rana", city: "Egypt" },
      { name: "Ahmed", city: "Amirca" }
  ]
  };
 
    nameEventHandler =(event)=>{
      this.setState({
        persons: [
          { name: event.target.value , city: "Egypt" },
          { name: "Ahmed", city: "Amirca" },
        ],
      });
    }
  render() {
    return (
      <div className="App">
        <UserInput
          name={this.state.persons[0].name}
          city={this.state.persons[0].city}
          changed={this.nameEventHandler}
          
        />
        <UserInput
          name={this.state.persons[1].name}
          city={this.state.persons[1].city}
        />
        <UserOutput/>
      </div>
    );
  }
}

export default App;
