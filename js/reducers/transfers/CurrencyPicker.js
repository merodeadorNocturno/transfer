import Immutable from 'immutable';

const initialState = Immutable.Map({
    accountToBeRemitted: '000000000000',
    remittanceAccount: '000000000000',
    selectedCurrency: 'USD'
});

const CurrencyPicker = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGE_VALUE":
            console.log("action", state, action);
            return state.merge({selectedCurrency: action.data.value});
        default:
            console.log("default", state, action);
            return state;

    }
};

module.exports = CurrencyPicker;