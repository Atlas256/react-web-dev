import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { reducerComponents } from '../store/reducerComponents';
import { reducerUsers } from './reducersHTTP/reducerUsers';

const rootReducer = combineReducers({ 
    reducerComponents, reducerUsers 
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));