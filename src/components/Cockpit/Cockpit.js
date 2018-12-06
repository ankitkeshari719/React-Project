import React from 'react';

import cockpitClasses from './Cockpit.css';

const cockpit = (props) => {
    // Working on dynamic styling
    //let classes = ['red','bold'].join(' ');
    const classes = [];
    let btnClass = '';

    if (props.persons.length <= 2) {
        classes.push(cockpitClasses.red);
    }

    if (props.persons.length <= 1) {
        classes.push(cockpitClasses.bold);
    }

    if (props.showPersonsList) {
        btnClass = cockpitClasses.Red;
    }


    return (
        <div className={cockpitClasses.Cockpit}>
            <h1 className={classes.join(' ')}>Welcome to React!!</h1>
            <p className={props.persons.length <= 2 ? cockpitClasses.red : cockpitClasses.bold}>This is really working!!</p>
            <button className={btnClass} onClick={props.togglePersons}>Toggle persons list</button>
        </div>
    );
}

export default cockpit;