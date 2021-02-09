import React from'react';

const person =(Props)=>{
    return (
      <div>
        <p>UserName:</p>
        <input type="text" onChange={Props.changed} onClick={Props.click}></input>
        <p>
          My name is {Props.name}, I live in {Props.city}
        </p>
      </div>
    );
}
export default person;