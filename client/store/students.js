import axios from 'axios';
import { GET_STUDENTS, CREATE_STUDENT } from './constants';

export const fetchStudents = () => dispatch =>
  axios
    .get('/api/students')
    .then(res => res.data)
    .then(students => dispatch({ type: GET_STUDENTS, students }));

export const createStudent = student => dispatch =>
  axios
    .post('/api/students', student)
    .then(res => res.data)
    .then(student => dispatch({ type: CREATE_STUDENT, student }));

export default (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case CREATE_STUDENT:
      return [...state, action.student];
    default:
      return state;
  }
};
