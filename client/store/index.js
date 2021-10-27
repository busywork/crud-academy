import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import students from './students';
import campuses from './campuses';
import errors from './errors';

const reducer = combineReducers({ campuses, students, errors });

export default createStore(reducer, applyMiddleware(thunk));
