import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';
import Student from './Student/Student';
import './App.css';

class App extends Component {
  state = {
    person: [
      { id: 1, address: 'Varanasi', name: "Ankit", age: "24" },
      { id: 2, address: 'Varanasi', name: "Ashwani", age: "28" },
      { id: 3, address: 'Varanasi', name: "Arvind", age: "26" },
      { id: 4, address: 'Varanasi', name: "Arvind", age: "26" }
    ],
    student: [
      { id: 5, address: 'Varanasi', name: 'Ram', age: "24" }
    ],
    showPersons: false
  };

  // Function to handle the name of person
  // @params name: Getting new name on paragraph click 
  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { name: newName, age: "24" },
        { name: "Ashwani Keshari", age: "28" },
        { name: "Arvind Keshari", age: "26" },
        { name: "Arvind Keshari", age: "26" }
      ]
    })
  }

  // Function to handle the name of student
  // @params name: Fired an event onchange on an input 
  changeStudentNamehandler = (event, id) => {
    const studentIndex = this.state.student.findIndex(s => {
      return s.id === id;
    });
    console.log("studentIndex->", studentIndex);
    const student = { ...this.state.student[studentIndex] };
    //const student = Object.assign({},this.state.student[studentIndex]);

    student.name = event.target.value;
    const allStudent = [...this.state.student];
    allStudent[studentIndex] = student;

    this.setState({
      student: allStudent
    });
  }

  // Function to toggle the persons list
  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  // Function to delete the person 
  deletePersonHandler = (personIndex) => {
    const persons = this.state.person.slice();
    //const persons = [...this.state.person]
    persons.splice(personIndex, 1);
    this.setState({
      person: persons
    })
  }

  render() {

    // Inline style
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      margin: '10px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor:'lightgreen',
        color:'black'
      }
    };


    // Working on dynamic styling
    //let classes = ['red','bold'].join(' ');
    const classes = [];

    if(this.state.person.length <= 2){
      classes.push('red');
    }

    if(this.state.person.length <= 1){
      classes.push('bold');
    }



    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.person.map((p, index) => {
              return <Person
                name={p.name}
                age={p.age}
                key={p.id}
                clickMe={() => this.deletePersonHandler(index)}
              />
            })
          }
          {
            this.state.student.map((s, index) => {
              return <Student
                name={s.name}
                age={s.age}
                key={s.id}
                changeName={(event) => this.changeStudentNamehandler(event, s.id)}
              />
            })
            /* <Person name={this.state.person[0].name} age={this.state.person[0].age} />
            <Person name={this.state.person[1].name} age={this.state.person[1].age} clickMe={this.switchNameHandler.bind(this, 'Ankit Keshari!!')}> My Hobbies: Cycling</Person>
            <Person name={this.state.person[2].name} age={this.state.person[2].age} />
            <Student name={this.state.student[0].name} age={this.state.student[0].age} changeStudentName={this.changeStudentNamehandler}>My Hobbies: Cycling</Student> */
          }
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] =  {
        backgroundColor:'salmon',
        color:'black'
      }
    }

    return (
      <StyleRoot>
        <div className="App">
        <h1 className={classes.join(' ')}>Welcome to React!!</h1>
        <p className= {this.state.person.length <= 2 ? "red":"bold"  }>This is really working!!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle persons list</button>
        {persons}
      </div>
      </StyleRoot>      
    );
    // return (React.createElement('div',{className: 'App'},React.createElement('h1',null,'Welcome to React !!')));
  }
}

export default Radium(App);
