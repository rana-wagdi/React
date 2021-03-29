import React, { useState } from "react";

function App() {
const [handlingText, setHandlingText] = useState("hello!")
  function handlingClick(){

  }
  return (
    <div className="container">
      <h1>{handlingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style = {background-color = blue}
      onClick = {handlingClick}>Submit</button>
    </div>
  );
}

export default App;
