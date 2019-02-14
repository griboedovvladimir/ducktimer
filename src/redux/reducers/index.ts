import { combineReducers } from 'redux';
import authorizationReducer from './authorization';
import timerReducer from './timer';
import presetTimeReducer from './presetTime';
import switchThemeReducer from './switchTheme'

export default combineReducers({
    authorization: authorizationReducer,
    timer: timerReducer,
    presetTime: presetTimeReducer,
    currentTheme: switchThemeReducer
});
