import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
        <Person
          name={this.state.persons[0].name}
          city={this.state.persons[0].city}
          changed={this.nameEventHandler}
          click={this.nameEventHandler.bind(this, "rose")}
        />
        <Person
          name={this.state.persons[1].name}
          city={this.state.persons[1].city}
        />
      </div>
    );
  }
}

export default App;
