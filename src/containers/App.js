import React, { Component } from 'react';

import appStyle from './App.css';
import Persons from '../components/Persons/Persons';
import CockPit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 1, address: 'Varanasi', name: "Ankit", age: "24" },
      { id: 2, address: 'Varanasi', name: "Ashwani", age: "28" },
      { id: 3, address: 'Varanasi', name: "Arvind", age: "26" },
    ],
    showPersonsList: false
  };

  // Function to toggle the persons list
  togglePersonsHandler = () => {
    console.log("HII");
    this.setState({
      showPersonsList: !this.state.showPersonsList
    });
  }

  // Function to handle the name of student
  // @params name: Fired an event onchange on an input 
  nameChangehandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    //const person = Object.assign({},this.state.persons[personIndex]);

    person.name = event.target.value;
    const copyPersons = [...this.state.persons];
    copyPersons[personIndex] = person;
    this.setState({
      persons: copyPersons
    });
  }

  // Function to delete the person 
  deletePersonHandler = (personIndex) => {
    const copyPersons = this.state.persons.slice();
    //const copyPersons = [...this.state.persons]
    copyPersons.splice(personIndex, 1);
    this.setState({
      persons: copyPersons
    })
  }

  render() {
    let personsList = null;
    if (this.state.showPersonsList) {
      personsList = (
        <div>
          <Persons
            persons={this.state.persons}
            clickToDeleteMe={this.deletePersonHandler}
            changeName={this.nameChangehandler}
          />
        </div>
      );
    }

    return (
      <div className={appStyle.App}>
        <CockPit
          title={this.props.title} 
          persons={this.state.persons}
          showPersonsList={this.state.showPersonsList} 
          togglePersons={this.togglePersonsHandler}
        />
        {personsList}
      </div>
    );
    // return (React.createElement('div',{className: 'App'},React.createElement('h1',null,'Welcome to React !!')));
  }
}

export default App;
