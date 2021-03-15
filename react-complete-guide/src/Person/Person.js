import React from'react';
// import './person.css';
import styled from 'styled-components';

const StyleDiv = styled.div `
  width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;


  @media (min-width: 500px) {
    width: 450px;
}
`

const person =(Props)=>{
    return (
      <StyleDiv>
        <p onClick={Props.click}>
          I'm a {Props.name} and I am {Props.age} years old !
        </p>
        <p>{Props.children}</p>
        <input type="text" onChange={Props.changed}></input>
      </StyleDiv>
    );
}

export default person;