import Immutable from 'immutable';

const initialState = Immutable.Map(
    {
        number: '000000000000',
        name: 'accountRemitted',
        label: 'Account to be remitted',
        htmlForId: 'accountRemitted',
        errored: 'form-group',
        errorMsg: ''
    }
);

const AccountNumber = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_ACCOUNT_NUMBER':
            return state.merge({ number: action.data.target.value });
        case 'VALIDATE_ACCOUNT_NUMBERS':
            return state.merge({ 
                number: action.data.value,
                errored: 'form-group',
                errorMsg: ''
            });
        case 'ERROR_ACCOUNT_NUMBER':
            return state.merge({
                number: action.data.value,
                errored: 'form-group has-error',
                errorMsg: 'Please write a 12 digit account'
            });
        default:
            //console.log("def", state, action.data);
            return state;
    }
};

module.exports = AccountNumber;