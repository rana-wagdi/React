import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: "Rana", age: 23 },
      { id: 'asfa2', name: "Ahmed", age: 28 },
      { id: 'asfa3', name: "Wagdi", age: 60 },
     
    ],
    showPersons: false,
  };

  nameEventHandler = (event) => {
    this.setState({
      persons: [
        {name: "Rana", age: 23 },
        {name: event.target.value, age: 28 },
        {name: "Wago", age: 60 },
      ],
    });
  };
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={()=> this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }

    return (
      //we can add just one component
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonHandler}>Switch button</button>
        {persons}
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;
