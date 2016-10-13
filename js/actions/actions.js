import Immutable from 'immutable';

export const INSERT_RECORD = 'INSERT_RECORD';
export const RETRIEVE_RECORD = 'RETRIEVE_RECORD';
export const RETRIEVE_ALL_RECORDS = 'RETRIEVE_ALL_RECORDS';


export const insertRecord = (transfer) => {

};

/**
 * Retrieves all records from DB
 * @returns {Object|null} Transfers object
 */
const retrieveAllRecords = () => {
    //setTimeout(() => {
    return localStorage.getItem('transfers');
    //}, 1500);
};