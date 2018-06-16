<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';

=======
>>>>>>> 9161f1d56db3039c7eb3ae7d89d9c3884b4f43fe
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
