import axios from 'axios';
import { GET_CAMPUSES } from './constants';

export const fetchCampuses = () => {
  return dispatch => {
    return axios
      .get('/api/campuses')
      .then(res => res.data)
      .then(campuses => dispatch({ type: GET_CAMPUSES, campuses }));
  };
};

const campusReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
};

export default campusReducer;
