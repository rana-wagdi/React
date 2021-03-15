import React, { Component } from "react";
import Validation from './Validation/Validation'
import './App.css';
import Char from "./Char/Char";

class App extends Component {
 state = {
    userInput:''
  }
  changeHandlerEvent = (event) => {
    this.setState({userInput: event.target.value});
  }
  charDeleteHandler = (index) =>{
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render () {
    const charList = this.state.userInput.split('').map((ch ,index) =>{
      return <Char 
        character={ch}
        key={index}
        clicked={() => this.charDeleteHandler(index)}> </Char>;
     } )

  return (
    <div className="App">
      <h1>Rana wagdi</h1>
      
      <input type="text"
             onChange={this.changeHandlerEvent}
             value={this.state.userInput} />
            
            <p>{this.state.userInput}</p>
            <Validation inputLength = {this.state.userInput.length} />
            {charList}
    </div>
  );
  }
}
export default App;
