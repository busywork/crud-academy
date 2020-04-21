import axios from 'axios';
import { GET_STUDENTS } from './constants';

export const fetchStudents = () => {
  return dispatch => {
    return axios
      .get('/api/students')
      .then(res => res.data)
      .then(students => dispatch({ type: GET_STUDENTS, students }));
  };
};

const studentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    default:
      return state;
  }
};

export default studentReducer;
