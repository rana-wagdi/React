import React from'react';

const person =(Props)=>{
    return (
      <div>
        <p onClick={Props.click} >
          I'm a {Props.name} and I am {Props.age} years old !
        </p>
        <p>{Props.children}</p>
      </div>
    );
}

export default person;