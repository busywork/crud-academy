import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import students from './students';
import campuses from './campuses';

const reducer = combineReducers({ campuses, students });

export default createStore(reducer, applyMiddleware(thunk));
