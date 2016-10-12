import Immutable from 'immutable';

const initialState = Immutable.Map({
    selectedPeriodicity: '1-TIME'
});

const Scheduler = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_PERIODICITY":
            return state.merge({selectedPeriodicity: action.data.value});
        default:
            return state;
    }
};

module.exports = Scheduler;