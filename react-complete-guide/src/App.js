import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState]=useState({
    persons: [
      { name: "Rana", age: 23 },
      { name: "Ahmed", age: 28 },
      { name: "Wagdi", age: 60 },
    ]
 
  });
  
  const switchHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 23 },
        { name: "medo", age: 28 },
        { name: "Wago", age: 60 },
      ],
    });
  };
  
    return (
      //we can add just one component
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchHandler.bind(this,"rosa")}>Switch button</button>
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          click={switchHandler.bind(this,'rora')}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now?'));
  }


export default app;
