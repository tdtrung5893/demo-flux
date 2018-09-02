import React, { Component } from 'react';
import StudentStore from '../stores/student-store';
import StudentList from './student-list';
import StudentForm from './student-form';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      students: StudentStore.getStudents()
    }
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount(){
    StudentStore.addChangeListener(this.onChange)
  }

  onChange(){
    this.setState({
      students: StudentStore.getStudents()
    })
  }

  render() {
    return (
      <div className="row">
        <h1 className="text-center">Student Management</h1>
        <div className="col-md-4 col-md-offset-4">
          <StudentForm />
          <StudentList students={this.state.students} />
        </div>
      </div>
    );
  }
}

export default App;
