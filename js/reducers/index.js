// @ Dependencies
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// @ reducers
import transfers from './transfers/makeTransfer';
import CurrencyPicker from './transfers/CurrencyPicker';
import AccountNumber from './transfers/AccountNumber';


const appReducer = combineReducers({
    transfers,
    CurrencyPicker,
    AccountNumber,
    routing: routerReducer
});

//const doNotResetReducers = ['screen']; //screen reducer should only be affected by a resize action

module.exports = appReducer;