import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/app-dispatcher';
import StudentConstants from '../constants/student-constants';

let CHANGE_EVENT = 'change';
let CHANGE_EDIT_EVENT = 'change_edit';
let _students = [
  {name: 'Tran Duc Trung'}, 
  {name: 'Tran Trung Duc'}
];
let editingIndex = -1;

class StudentStore extends EventEmitter {
  constructor(props){
    super(props);
    this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this))
  } 

  getStudents(){
    return _students;
  }

  addStudent(student){
    _students.push(student);
  }

  removeStudent(index){
    _students.splice(index, 1)
  }

  updateStudent(student){
    _students[editingIndex] = student;
    editingIndex = -1;
  }

  editStudent(index){
    editingIndex = index
  }

  getEditingStudent(){
    if (editingIndex < 0) {
      return null
    }
    return _students[editingIndex]
  }

  emitChange(){
    this.emit(CHANGE_EVENT)
  }

  addChangeListener(cb){
    this.on(CHANGE_EVENT, cb)
  } 

  emitEditStudent(cb){
    this.emit(CHANGE_EDIT_EVENT, cb)
  }

  addEditListener(cb){
    this.on(CHANGE_EDIT_EVENT, cb)
  }

  dispatcherCallback(payload) {
    switch(payload.actionType){
      case StudentConstants.ACTION_ADD:
        this.addStudent(payload.value);
        this.emitChange();
        break;
      case StudentConstants.ACTION_DELETE:
        this.removeStudent(payload.index);
        this.emitChange();
        break;
      case StudentConstants.ACTION_EDIT:
        this.editStudent(payload.index);
        this.emitEditStudent();
        break;
      case StudentConstants.ACTION_UPDATE:
        this.updateStudent(payload.value);
        this.emitEditStudent();
        this.emitChange();
        break;
    }
  };
};

export default new StudentStore();