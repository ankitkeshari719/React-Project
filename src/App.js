import React, { Component } from 'react';
import Person from './Person/Person';
import Student from './Student/Student';
import './App.css';

class App extends Component {
  state = {
    person: [
      { name: "Ankit", age: "24" },
      { name: "Ashwani", age: "28" },
      { name: "Arvind", age: "26" },
      { name: "Arvind", age: "26" }
    ],
    student: [
      { name: 'Ram', age: "24" }
    ]
  };

  stateNameHandler = (newName) => {
    this.setState({
      person: [
        { name: newName, age: "24" },
        { name: "Ashwani Keshari", age: "28" },
        { name: "Arvind Keshari", age: "26" },
        { name: "Arvind Keshari", age: "26" }
      ]
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      student: [
        { name: event.target.value, age: "24" }
      ]
    });
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };


    return (
      <div className="App">
        <h1>Welcome to React!!</h1>
        <button style={style} onClick={() => this.stateNameHandler('Ankit Keshari')}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age} clickMe={this.stateNameHandler.bind(this, 'Ankit Keshari!!')}> My Hobbies: Cycling</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
        <Student
          name={this.state.student[0].name}
          age={this.state.student[0].age}
          changeStudentName={this.nameChangeHandler}
        >My Hobbies: Cycling</Student>
      </div>
    );
    // return (React.createElement('div',{className: 'App'},React.createElement('h1',null,'Welcome to React !!')));

  }
}

export default App;
