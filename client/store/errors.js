import { ERROR, CLEAR_ERROR } from './constants';

export const errorHandler = errors => ({ type: ERROR, errors });

export const clearErrors = () => ({ type: CLEAR_ERROR });

export default (state = [], action) => {
  switch (action.type) {
    case ERROR:
      return action.errors;
    case CLEAR_ERROR:
      return [];
    default:
      return state;
  }
};
