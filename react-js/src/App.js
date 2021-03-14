import React, { Component } from 'react';
import './App.css';
import Heading from "./Heading.jsx";
import List from './List';

class App extends Component {
  render() {
    return (
      <div >
        <Heading />
        <List />
      </div>
    );
  }
}

export default App;
