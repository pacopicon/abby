import React, { Component } from 'react';
import './App.css';
// import createFragment from 'react-addons-create-fragment' // ES6

class TestTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {students: [], name: '', extendTime: 0, test: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Testing Room:</h3>
        <Classroom students={this.state.students} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.name} />
          <input onChange={this.handleChange} value={this.state.extendTime} />
          <input onChange={this.handleChange} value={this.state.test} />
          <button>{'Add student #' + (this.state.students.length + 1)}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newStudent = {
      name: this.state.name,
      id: Date.now()
    };
    this.setState((prevState) => ({
      students: prevState.students.concat(newStudent),
      name: ''
    }));
  }
}

class Classroom extends React.Component {
  render() {
    return(
      <ul>
        {this.props.students.map(student => (
          <li key={student.id}>{student.name}: {student.id}</li>
        ))}
      </ul>
    );
  }
}
export default TestTrack;
// Contact GitHub API Training Shop Blog About
