import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countriesReducer from './countriesReducer';

const initialStore = {
    users: [["Country", "Users"]]
};

export default createStore(countriesReducer, initialStore, applyMiddleware(thunk));