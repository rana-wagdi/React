import React from'react';

const userInput=(Props)=>{
  const style={
    border:'2px solid red'
  };
    return(
        <div>
          <p>UserName:</p>
        <input style={style} type="text" onChange={Props.changed} onClick={Props.click}></input>
        <p>
          My name is {Props.name}, I live in {Props.city}
        </p>
        </div>
    );
    
}
export default userInput;