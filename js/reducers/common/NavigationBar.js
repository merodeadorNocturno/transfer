import Immutable from 'immutable';

const initialState = Immutable.Map({
    transferElement: 'active',
    viewElement: ''
});

const activateSelectedElement = (element) => {
    const elements = {
        view: {
            transfer: {
                transferElement: 'active',
                viewElement: ''
            },
            view: {
                transferElement: '',
                viewElement: 'active'
            },
        }
    };
    return elements.view[element];
};

const NavigationBar = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_SELECTED_ITEM':
            let transfer = activateSelectedElement(action.data.target.id).transferElement;
            let view = activateSelectedElement(action.data.target.id).viewElement;
            console.log('t', transfer, 'v', view);
            return state.merge({
                transferElement: transfer,
                viewElement: view
            });
        default:
            //console.log('dt', transfer, 'dv', view, state);
            return state;
    }
};

module.exports = NavigationBar;