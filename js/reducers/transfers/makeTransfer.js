const Immutable = require('immutable');

const initialState = Immutable.Map({
    isFetching: false,
    contacts: Immutable.List([])
});

function mySePercentReducer(state = initialState, action) {
    switch (action.type) {
        case 'SE_PERCENT_RANDOMPICK':
            let variousPicks = [
                {
                    lastPrice: "5.516",
                    variationPts: "0.01",
                    variationPerc: "0.18",
                    upOrDown: "down"
                },
                {
                    lastPrice: "12.82",
                    variationPts: "0.30",
                    variationPerc: "2.40",
                    upOrDown: "up"
                },
                {
                    lastPrice: "75.23",
                    variationPts: "0.24",
                    variationPerc: "0.32",
                    upOrDown: "down"
                },
                {
                    lastPrice: "18,615.64",
                    variationPts: "56.63",
                    variationPerc: "0.31",
                    upOrDown: "up"
                }
            ];
            let picks = variousPicks.length;
            let pick = Math.floor((Math.random() * picks));
            let pickedObject = variousPicks[pick];
            return state.merge(pickedObject);
        default:
            return state;
    }
}

module.exports = mySePercentReducer; 
