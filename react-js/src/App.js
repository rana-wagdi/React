import React, { Component } from 'react';
import './App.css';
import Index from "./components/Index";
import  * as Calculator from "./Calculator";
class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>{Calculator.add(1, 2)}</li>
          <li>{Calculator.multiply(2, 3)}</li>
          <li>{Calculator.subtract(7, 2)}</li>
          <li>{Calculator.divide(5, 2)}</li>
        </ul>
      </div>
    );
  }
}

export default App;
