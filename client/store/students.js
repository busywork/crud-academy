import axios from 'axios';
import { GET_STUDENTS, CREATE_STUDENT } from './constants';

export const fetchStudents = () => {
  return dispatch => {
    return axios
      .get('/api/students')
      .then(res => res.data)
      .then(students => dispatch({ type: GET_STUDENTS, students }));
  };
};

export const createStudent = (student, history) => {
  return dispatch => {
    return axios
      .post('/api/students', student)
      .then(res => res.data)
      .then(student => {
        dispatch({ type: CREATE_STUDENT, student });
        history.push(`/students/${student.id}`);
      });
  };
};

const studentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case CREATE_STUDENT:
      return [...state, action.student];
    default:
      return state;
  }
};

export default studentReducer;
