import { combineReducers } from 'redux';
import authorizationReducer from './authorization';

export default combineReducers({
    authorization: authorizationReducer,
});
