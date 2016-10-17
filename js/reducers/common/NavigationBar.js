import Immutable from 'immutable';

const initialState = Immutable.Map({
    menuItem: 'transfer',
    className: 'active'
});

const NavigationBar = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_SELECTED_ITEM':
            console.log('selItem', action.data.ref);
            return state.merge({menuItem: action.data.target.ref});
        default:
            return state;
    }
};

module.exports = NavigationBar;