import { combineReducers } from 'redux';
import authorizationReducer from './authorization';
import timerReducer from './timer';

export default combineReducers({
    authorization: authorizationReducer,
    timer: timerReducer,
});
