import React, { Component } from 'react';

import classes from './App.css';

import Persons from '../components/Persons/Persons';

import Cockpit from '../components/Cockpit/Cockpit'



class App extends Component {
  state = {
    persons: [
      { id: "asfa1", name: "Rana", age: 23 },
      { id: "asfa2", name: "Ahmed", age: 28 },
      { id: "asfa3", name: "Wagdi", age: 60 },
    ],
    showPeople: false,
  };

  //make event to each name
  
  nameEventHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({ showPeople: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPeople) {
      persons = 
        <Persons 
        persons = {this.state.persons} 
        clicked = {this.deletePersonHandler}
        changed = {this.nameEventHandler}
        />
      
      
    }



    return (
      //we can add just one component
      <div className= {classes.App}>
        <Cockpit
        showPeople = {this.state.showPeople}
         persons = {this.state.persons}
         clicked={this.togglePersonHandler}
         />
        {persons}
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;
