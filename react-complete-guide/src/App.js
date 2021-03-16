import React, { Component } from 'react';

import classes from './App.css';

import Person from './Person/Person';



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
    let btnClass = '';

    if (this.state.showPeople) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameEventHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }
const assignedClasses=[];
if (this.state.persons.length <= 2) {
  assignedClasses.push(classes.red);
}
if (this.state.persons.length <= 1) {
  assignedClasses.push(classes.bold)
}
    return (
      //we can add just one component
      <div className= {classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;
