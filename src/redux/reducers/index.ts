import { combineReducers } from 'redux';
import authorizationReducer from './authorization';
import timerReducer from './timer';
import switchThemeReducer from './switchTheme';

export default combineReducers({
    authorization: authorizationReducer,
    timer: timerReducer,
    currentTheme: switchThemeReducer
});
