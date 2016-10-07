// @ Dependencies
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// @ reducers
import transfers from './transfers/makeTransfer';


const appReducer = combineReducers({
    transfers,
    routing: routerReducer
});

//const doNotResetReducers = ['screen']; //screen reducer should only be affected by a resize action

module.exports = appReducer;