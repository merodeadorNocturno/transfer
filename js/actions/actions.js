import Immutable from 'immutable';

export const REQUEST_TRANSFERS = 'REQUEST_TRANSFERS';
export const RECEIVE_TRANSFERS = 'RECEIVE_TRANSFERS';
export const INSERT_TRANSFER = 'INSERT_TRANSFER';
export const INVALIDATE_TRANSFER = 'INVALIDATE_TRANSFER';


export const insertTransfer = (transfer) => ({
    type: INSERT_TRANSFER,
    transfer
});

export const invalidateTransfer = (transfer) => ({
    type: INVALIDATE_TRANSFER,
    transfer
});

export const requestTransfers = (transfer) => {
    return { type: RETRIEVE_RECORD, transfer };
};


export const receiveTransfers = (transfer, json) => {
    console.log(json);
    return {
        type: RETRIEVE_ALL_RECORDS,
        transfer,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
     };
};

const fetchTransfers = (transfer) => (dispatch) => {
    dispatch(requestTransfers(transfer));

    return new Promise((resolve, reject) => {
        const json = getFromLocalStorage();
        if (json !== null) {
            resolve(JSON.parse(json));
        } else {
            reject('No data available...');
        }
    }).then((json) => {
        dispatch(receiveTransfers(transfer, json));
    }).catch((reason) => {
        return console.log('No data available');
    });
};




export const invalidateTransaction = (transfer) => ({ type: INVALIDATE_TRANSACTION, transfer });

export const fetchAllRecords = (transfer) => (dispatch) => {
    dispatch(retrieveAllRecords);
};

const getFromLocalStorage = () => {
    return localStorage.getItem('transfers');
};