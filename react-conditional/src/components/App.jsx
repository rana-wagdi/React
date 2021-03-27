import React from "react";
import Login from "./Login"

var isLoggedIn = false;

const currentTime = new Date().getHours();

console.log(currentTime);


function App() {
  return (
    <div className="container">{
//       isLoggedIn === true ? <h1>Hello</h1>
//  : <Login />

      currentTime <=12 ? <h1>GOOd morning</h1> : <h1>Good evening</h1>
   
  
     } </div>
  );
}

export default App;
