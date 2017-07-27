import {combineReducers} from 'redux';
import HomeContent from './homepage.js';

const allReducers = combineReducers({
    home: HomeContent
});

export default allReducers;
