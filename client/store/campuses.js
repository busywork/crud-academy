import axios from 'axios';
import { GET_CAMPUSES } from './constants';

export const fetchCampuses = () => dispatch =>
  axios
    .get('/api/campuses')
    .then(res => res.data)
    .then(campuses => dispatch({ type: GET_CAMPUSES, campuses }));

export default (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
};
