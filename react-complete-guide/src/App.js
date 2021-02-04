import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      //we can add just one component
      <div className="App"> 
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <Person name ="Rana" age= "23" />
      <Person name="Ahmed" age="28" />
      <Person name="Wagdi" age="60"/>

      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;
