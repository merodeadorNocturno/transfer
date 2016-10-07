const validateAccount = (state = '', action) => {
    switch (action.type) {
        case 'VALID':
            return state;
        case 'INVALID':
            return state;
        default:
            return state;
    }
};


const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log("counterI", state + 1);
            return state + 1;
        case 'DECREMENT':
            console.log("counterD", state - 1);
            return state - 1;

        default:
            console.log("not registered actio", action);
            return state;
    }
};