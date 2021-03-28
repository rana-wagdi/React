import React, {useState} from "react";

function App(){
  // const [count, setState] = useState(0);

  // function increase(){
  //   setState(count+1);
  // }
  // function decrease(){
  //   setState(count-1);
  // }
  setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString();


  const [time, setTime] = useState(now) ;

function updateTime(){
  const newTime = new Date().toLocaleTimeString();
  setTime(newTime)
}
    
return (
  <div className="container">
    <h1>{time}</h1>
    <button onClick={updateTime}>Get Time</button>
  </div>
);
}
export default App;
