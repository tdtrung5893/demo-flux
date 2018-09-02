import StudentConstants from '../constants/student-constants';
import AppDispatcher from '../dispatcher/app-dispatcher';

class StudentActions {
  addStudent(student) {
    AppDispatcher.dispatch({
      actionType: StudentConstants.ACTION_ADD,
      value: student
    })
  }

  removeStudent(index) {
    AppDispatcher.dispatch({
      actionType: StudentConstants.ACTION_DELETE,
      index: index
    })
  }

  editStudent(index) {
    AppDispatcher.dispatch({
      actionType: StudentConstants.ACTION_EDIT,
      index: index
    })
  }

  updateStudent(student) {
    AppDispatcher.dispatch({
      actionType: StudentConstants.ACTION_UPDATE,
      value: student
    })
  }
}

export default new StudentActions();