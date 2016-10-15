import Immutable from 'immutable';
import { 
    REQUEST_TRANSFERS, 
    RECEIVE_TRANSFERS, 
    INSERT_TRANSFER, 
    INVALIDATE_TRANSFER } from '../actions/actions';

const initialState = {
    isFetching: false,
    didInvalidate: false,
    lastUpdated: '',
    items: {}
};


const Transfers = (state = initialState, action) => {
    switch(action.type) {
        case INVALIDATE_TRANSFER:
            return state.merge({ didInvalidate: true });
        case REQUEST_TRANSFERS:
            return state.merge({
                isRetrieving: true,
                item: action.transfers
            });
        case RECEIVE_TRANSFERS:
            return state.merge({
                isRetrieving:true, item: action.transfers
            });
        default:
            return state;
    }
};

export default Transfers;