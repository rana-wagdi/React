import React, {useState} from "react";

function App(){
  const [count, setState] = useState(0);

  function increase(){
    setState(count+1);
  }
  function decrease(){
    setState(count-1);
  }
return (
  <div>
    <h1>{count}</h1>

    <button onClick={decrease}>-</button>
    <button onClick={increase}>+</button>
  </div>
);
}
export default App;
