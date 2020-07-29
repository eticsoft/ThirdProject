import {combineReducers} from 'redux';
import counterReducer from './CounterReducer';

const allReducers = combineReducers({
    counter: counterReducer,
});

export default allReducers;