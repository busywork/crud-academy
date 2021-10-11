import axios from 'axios';
import { GET_STUDENTS } from './constants';

export const fetchStudents = () => dispatch =>
  axios
    .get('/api/students')
    .then(res => res.data)
    .then(students => dispatch({ type: GET_STUDENTS, students }));

export default (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    default:
      return state;
  }
};
