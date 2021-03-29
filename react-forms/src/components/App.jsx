import React, {useState} from "react";

function App() {

  const [name, setName] = useState("")

function handleChange(event){
  setName(event.target.value)
}

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onChange = {handleChange}>Submit</button>
    </div>
  );
}

export default App;
