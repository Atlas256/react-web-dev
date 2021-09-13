import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducerComponents } from './appReducers/reducerComponents';
import { reducerUsers } from './serverReducers/reducerUsers';

import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from "./sagas/sagas";


const rootReducer = combineReducers({
    reducerComponents, reducerUsers
})


const saga = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware( saga)));

saga.run(sagaWatcher);