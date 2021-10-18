import axios from 'axios';
import { GET_STUDENTS, CREATE_STUDENT, UPDATE_STUDENT } from './constants';

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

export const updateStudent = student => dispatch =>
  axios
    .put(`/api/students/${student.id}`, student)
    .then(res => res.data)
    .then(student => dispatch({ type: UPDATE_STUDENT, student }));

export default (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case CREATE_STUDENT:
      return [...state, action.student];
    case UPDATE_STUDENT:
      return state.map(student => (student.id === action.student.id ? action.student : student));
    default:
      return state;
  }
};
