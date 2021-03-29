import React, {useState} from "react";

function App() {

  const [name, setName] = useState("");
  const [handleText, setHeading] = useState("")
function handleChange(event){
  setName(event.target.value);
}
function handleClick(){
  setHeading(name)
}


  return (
    <div className="container">
      <h1>Hello {handleText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button value={name}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
