import Immutable from 'immutable';

const initialState = Immutable.Map({
    selectedCurrency: 'USD'
});

const CurrencyPicker = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_VALUE":
            return state.merge({selectedCurrency: action.data.value});
        default:
            return state;

    }
};

module.exports = CurrencyPicker;