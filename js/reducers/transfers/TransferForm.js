import Immutable from 'immutable';

const initialState = Immutable.Map({
    originAccount: '',
    recipientAccount: '',
    currency: 'USD',
    amount: '',
    scheduleOperation: '',
    initialDate: '',
    finalDate: '',
    periodicity: '',
    schedulerHidden: ' hidden'
});


const TransferForm = (state = initialState, action ) => {
    
    switch(action.type) {
        case "CHANGE_ORIGIN_ACCOUNT":
            //console.log("CHANGE_ORIGIN_ACCOUNT", action.data.value);
            return state.merge({originAccount: action.data.target.value});
        case "CHANGE_RECIPIENT_ACCOUNT":
            return state.merge({recipientAccount: action.data.target.value});
        case "CHANGE_SELECT_CURRENCY":
            return state.merge({currency: action.data.target.value});
        case "CHANGE_AMOUNT":
            return state.merge({amount: action.data.target.value});
        case "CHANGE_SCHEDULER":
            let checkValue = toggleCheckValue(action.data.target.value);
            return state.merge({
                scheduleOperation: checkValue,
                schedulerHidden: toggleHidden(state.get('schedulerHidden'))
            });
        case "CHANGE_INITIAL_DATE":
            return state.merge({initialDate: action.data.target.value});
        case "CHANGE_FINAL_DATE":
            return state.merge({finalDate: action.data.target.value});
        case "CHANGE_PERIODICITY":
            return state.merge({periodicity: action.data});
        default:
            return state;
    }
};

const toggleHidden = (schedulerHidden) => {
    if (schedulerHidden) {
        return '';
    } else {
        return ' hidden';
    }
};

const toggleCheckValue = (checkValue) => {
    if (checkValue) {
        return '';
    } else {
        return 'on';
    }
}

module.exports = TransferForm;