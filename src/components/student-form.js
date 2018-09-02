import React, { Component } from 'react';
import StudentActions from '../actions/student-action';
import StudentStore from '../stores/student-store';

class StudentForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      editingStudent: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleAdd(){
    StudentActions.addStudent({
      name: this.state.name
    })
  }

  handleChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleEdit(){
    let editingStudent = StudentStore.getEditingStudent()
    this.setState({
      editingStudent: editingStudent,
    })
    if (editingStudent) {
      this.setState({
        name: editingStudent.name
      })
    }
  }

  handleUpdate(){
    StudentActions.updateStudent({name: this.state.name})
    this.setState({
      name: ''
    })
  }

  componentDidMount(){
    StudentStore.addEditListener(this.handleEdit)
  }

  render() {
    let btn = <input type="button" value="Add" className="btn btn-primary" onClick={this.handleAdd} />;
    if (this.state.editingStudent) {
      btn = <input type="button" value="Update" className="btn btn-success" onClick={this.handleUpdate} />;
    }
    return(
      <div className="row" style={{margin: "10px"}}>
        <div className="col-md-2">
            Name:
        </div>
        <div className="col-md-6">
            <input value={this.state.name} onChange={this.handleChange} />
        </div>
        <div className="col-md-2">
            {btn}
        </div>
    </div>
    );
  }
}

export default StudentForm;