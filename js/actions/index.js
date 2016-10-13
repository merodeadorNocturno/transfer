import Immutable from 'immutable';

const constants = {
    INSERT_RECORD: 'INSERT_RECORD',
    RETRIEVE_RECORD: 'RETRIEVE_RECORD',
    RETRIEVE_ALL_RECORDS: 'RETRIEVE_ALL_RECORDS'
};

/**
 * Transform plain js objects || arrays to Immutable Maps || Lists
 * @param {Object|Array} jsObject - The object or array to transform to Immutable
 * @returns {List|Map} Immutable List or Map
 */
const toImmutable = Immutable.fromJS(jsObject, (i, j) => {
    const isIndexed = Immutable.Iterable.isIndexed(j);
    return isIndexed ? j.toList() : j.toOrderedMap();
});


/**
 * Inserts record in db
 * @param {Object} transfer - Object that represents a transfer
 * @returns {Boolean} True for success, false for failure
 */
const insertRecord = (transfer) => {

};

/**
 * Retrieves all records from DB
 * @returns {Object} Transfers object
 */
const retrieveAllRecords = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const transfersString = localStorage.getItem('transfers');
            if (!transfersString) {
                reject('There are no recorded transfers');
            }
            else {
                resolve(transfersString);
            }
        }, 1500); 
    }).then((transfersString) => {
        const transfersObject = JSON.parse(transfersString);
        const transfersImmutable = toImmutable(transfersObject);

        return transfersImmutable;
    }).catch((reason) => {
        return `Transaction failed. Reason: ${reason}`;
    });
};