import axios from 'axios';
import { GET_CAMPUSES, CREATE_CAMPUS, UPDATE_CAMPUS, DELETE_CAMPUS } from './constants';

export const fetchCampuses = () => dispatch =>
  axios
    .get('/api/campuses')
    .then(res => res.data)
    .then(campuses => dispatch({ type: GET_CAMPUSES, campuses }));

export const createCampus = (campus, history) => dispatch =>
  axios
    .post('/api/campuses', campus)
    .then(res => res.data)
    .then(campus => {
      dispatch({ type: CREATE_CAMPUS, campus });
      history.push('/campuses');
    });

export const updateCampus = (campus, history) => dispatch =>
  axios
    .put(`/api/campuses/${campus.id}`, campus)
    .then(res => res.data)
    .then(campus => {
      dispatch({ type: UPDATE_CAMPUS, campus });
      history.push('/campuses');
    });

export const deleteCampus = campus => dispatch =>
  axios.delete(`/api/campuses/${campus.id}`).then(() => dispatch({ type: DELETE_CAMPUS, campus }));

export default (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    case CREATE_CAMPUS:
      return [...state, action.campus];
    case UPDATE_CAMPUS:
      return state.map(campus => (campus.id === action.campus.id ? action.campus : campus));
    case DELETE_CAMPUS:
      return state.filter(campus => campus.id !== action.campus.id);
    default:
      return state;
  }
};
