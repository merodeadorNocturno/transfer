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
import NavigationBar from './common/NavigationBar';


const appReducer = combineReducers({
    CurrencyPicker,
    AccountNumber,
    Scheduler,
    Amount,
    TransferForm,
    NavigationBar,
    routing: routerReducer
});

module.exports = appReducer;