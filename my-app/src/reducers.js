import {combineReducers} from 'redux';
import {counter} from './index.redux';
import {auth} from './auth.redux.js';

export default combineReducers({counter,auth});