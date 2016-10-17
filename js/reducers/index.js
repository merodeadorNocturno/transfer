// @ Dependencies
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// @ reducers
import CurrencyPicker from './transfers/CurrencyPicker';
import AccountNumber from './transfers/AccountNumber';
import Scheduler from './transfers/Scheduler';
import Amount from './transfers/Amount';
import TransferForm from './transfers/TransferForm';
import Transfers from './reducers';


const appReducer = combineReducers({
    CurrencyPicker,
    AccountNumber,
    Scheduler,
    Amount,
    TransferForm,
    routing: routerReducer
});

module.exports = appReducer;