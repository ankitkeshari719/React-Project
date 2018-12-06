import React, { Component } from 'react';
import studentStyle from './Student.css';

class Student extends Component {
    render() {
        return(
            <div className={studentStyle.Student}>
                <p>Hello, I am {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input onChange={this.props.changeName} value={this.props.name}></input>
            </div>
        );
    }
}

export default Student;