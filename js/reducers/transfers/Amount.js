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
        default:
            return state;
    }
};

module.exports = Amount;