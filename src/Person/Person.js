import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
    const personStyle = {
        '@media (min-width: 600px)': {
            width: '450px'
        }
    }

    return (
        <div className='Person'>
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <button onClick={props.clickMe} className="deleteButton">Delete Me</button>
        </div>
    );
}

export default Radium(person);