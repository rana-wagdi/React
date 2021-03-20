import React from'react';
import classes from './person.css';




const person =(Props)=>{
    return (
      <div className={classes.Person}>
        <p onClick={Props.click}>
          I'm a {Props.name} and I am {Props.age} years old !
        </p>
        <p>{Props.children}</p>
        <input type="text" onChange={Props.changed}></input>
      </div>
    );
}

export default person;