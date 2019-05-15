import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
const enhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(reducer, enhancer);

export default store;