import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({});

export default createStore(reducer, applyMiddleware(thunk));
