import Immutable from 'immutable';

const initialState = Immutable.Map(
    {
        amount: 0.00,
        currency: 'USD'
    }
);

const Amount = ( state = initialState, action ) => {
    switch (action.type) {
        case 'CHANGE_AMOUNT':
            console.log('st', state);
            return state.merge({amount: action.data.target.value});
        case 'CHANGE_CURRENCY':
            console.log('cc', action.data.target);
            return state.merge({currency: action.data.value});
        default:
            return state;
    }
};

module.exports = Amount;