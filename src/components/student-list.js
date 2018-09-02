import React, {Component} from 'react';
import StudentActions from '../actions/student-action'

class StudentList extends Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(index){
    StudentActions.removeStudent(index)
  }

  handleEdit(index){
    StudentActions.editStudent(index)
  }

  render(){
    let studentList = this.props.students.map((student, index) => {
      return(
        <tr key={index}>
          <td>{student.name}</td>
          <td className='col-md-1'>
            <input type="button" value="Remove" className="btn btn-danger"
              onClick={() => this.handleDelete(index)} />
          </td>
          <td className='col-md-1'>
            <input type="button" value="Edit" className="btn btn-warning"
              onClick={() => this.handleEdit(index)} />
          </td>
        </tr>
      )
    });

    return(
      <div>
        <table className='table'>
          <tbody>
            {studentList}
          </tbody>
        </table>
      </div>
    )
  }
}

export default StudentList;