import { combineReducers } from 'redux';
import searchReducer from './searchReducer.js';

const rootReducer = combineReducers({
    userdata: searchReducer,
});

export default rootReducer;
