import React from 'react';

import personStyle from './Person.css';

const person = (props) => {
    // const rnd = Math.random();
    // if(rnd > 0.7){
    //     throw new  Error('Somethings went worng!');
    // }
    return (
        <div className= {personStyle.Person}>
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <button onClick={props.clickMe} className={personStyle.deleteButton}>Delete Me</button>
        </div>
    );
}

export default person;