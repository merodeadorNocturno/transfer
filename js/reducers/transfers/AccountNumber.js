import Immutable from 'immutable';

const initialState = Immutable.Map(
    {
        number: '000000000000',
        name: 'accountRemitted',
        fieldName: 'Account to be remitted',
        htmlForId: 'accountRemitted'
    }
);

const AccountNumber = (state = initialState, action) => {
    //console.log("reducer", action);
    switch (action.type) {
        case 'CHANGE_ACCOUNT_NUMBER':
            console.log("can", action.data);
            return state.merge(
                {
                    accountNumber: { number: action.data }
                }
            );
        case 'REJECT_VALUE':
            //console.log("rv", state);
            return state.merge(
                {
                    accountNumber: action.data.value
                }
            );
        default:
            //console.log("def", state, action.data);
            return state;
    }
};

module.exports = AccountNumber;