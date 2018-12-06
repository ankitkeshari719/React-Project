import React from 'react';
import personStyle from './Person.css';

const person = (props) => {
    return (
        <div className= {personStyle.Person}>
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <button onClick={props.clickMe} className={personStyle.deleteButton}>Delete Me</button>
            <input  onChange={props.changed} value={props.name}></input>
        </div>
    );
}

export default person;