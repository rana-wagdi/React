import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component{

  state={
    persons: [
      { name: "Rana", age: 23 },
      { name: "Ahmed", age: 28 },
      { name: "Wagdi", age: 60 },
    ]
 
  };
  
 switchHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: "medo", age: 28 },
        { name: "Wago", age: 60 },
      ]
    });
  };

 nameEventHandler=(event)=>{
  this.setState({
    persons: [
      { name: "Rana", age: 23 },
      { name: event.target.value, age: 28 },
      { name: "Wago", age: 60 },
    ]
  })
}

  render(){
    return (
      //we can add just one component
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchHandler.bind(this,"rosa")}>Switch button</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchHandler.bind(this,'rora')}
          changed={this.nameEventHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;
