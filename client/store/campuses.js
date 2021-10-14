import axios from 'axios';
import { GET_CAMPUSES, CREATE_CAMPUS } from './constants';

export const fetchCampuses = () => dispatch =>
  axios
    .get('/api/campuses')
    .then(res => res.data)
    .then(campuses => dispatch({ type: GET_CAMPUSES, campuses }));

export const createCampus = campus => dispatch =>
  axios
    .post('/api/campuses', campus)
    .then(res => res.data)
    .then(campus => dispatch({ type: CREATE_CAMPUS, campus }));

export default (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    case CREATE_CAMPUS:
      return [...state, action.campus];
    default:
      return state;
  }
};
