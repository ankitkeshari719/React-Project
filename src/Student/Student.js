import React, { Component } from 'react';
import './Student.css';

class Student extends Component {
    render() {
        return(
            <div className='Student'>
                <p>Hello, I am {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input onChange={this.props.changeStudentName} value={this.props.name}></input>
            </div>
        );
    }
}

export default Student;