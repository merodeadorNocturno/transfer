require('./TransferForm.scss');
import React from 'react';
import FormData from 'react-form-data';
import CurrencyInput from 'react-currency-input';
import { CurrencyPicker } from '../common/CurrencyPicker';
import { AccountNumber } from '../common/AccountNumber';
import { Scheduler } from './Scheduler';
import { connect } from 'react-redux';


/**
 * Parses form data
 * 
 * @returns {Object}
 */
const parseForm = (formDataJson) => {
    const details = {};
    for (let e of formDataJson) {
        if (e.id || e.name) {
            details[e.id || e.name] = e.value;
        }
    }
    return { details: details };
};

/**
 * Inserts transfer in DB
 * 
 * @param {Object} transfer JSON
 * @returns {Void}
 */
const insertTransferToDb = (transfer) => {
    let AllTransfers = JSON.parse(getFromLocalStorage());
    AllTransfers.transfers.push(transfer);
    return localStorage.setItem('transfers', JSON.stringify(AllTransfers));
};

/**
 * 
 */
const fixEmptyTransfers = () => {
    const newTransfers = {
        myAccount: '',
        transfers: []
    };
    if (!getFromLocalStorage()) {
        localStorage.setItem('transfers', JSON.stringify(newTransfers));
    }
}


/**
 * Gets all transfer from DB
 * 
 * @returns {Object}
 */
const getFromLocalStorage = () => {
    return localStorage.getItem('transfers');
};

/**
 * Asynchronously inserts to DB
 * 
 * @param {object} transfer data in JSON
 * @returns {Promise}
 */
const insertTransfers = (transfer) => {
    let parsedTransfer = parseForm(transfer);
    fixEmptyTransfers();

    return new Promise((resolve, reject) => {
    console.log('parsedTransfer', parsedTransfer);
        insertTransferToDb(parsedTransfer);
        const json = getFromLocalStorage();
        if (json !== null) {
            resolve(JSON.parse(json));
        } else {
            reject('No data available...');
        }
    }).then((json) => {
        dispatch(receiveTransfers(transfer, json));
    }).catch((reason) => {
        return console.log(reason);
    });
};


/**
 * Asynchronously retrieves from DB
 * 
 * @param {object} transfer data in JSON
 * @returns {Promise}
 */
const fetchTransfers = (transfer) => {
    return new Promise((resolve, reject) => {
        const json = getFromLocalStorage();
        if (json !== null) {
            resolve(JSON.parse(json)); console.log(inserted);
        } else {
            reject('No data available...');
        }
    }).then((json) => {
        dispatch(receiveTransfers(transfer, json));
    }).catch((reason) => {
        return console.log('No data available');
    });
};

class TransferForm extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        insertTransfers(event.target.elements);
        //console.log(parseForm(event.target.elements));
    }

    render() {
        const { TransferForm } = this.props;
        return (
            <form className="form" onSubmit={this.handleSubmit} onChange={this.props.onChangeOriginAccount}>
                <AccountNumber
                    htmlForId="accountRemitted"
                    label="Origin Account"
                    onBlur={this.props.onChangeOriginAccount}
                    />
                <AccountNumber
                    htmlForId="remittanceAccount"
                    label="Recipient Account"
                    onChange={this.props.onChangeRecipientAccount}
                    />
                <CurrencyPicker
                    id="CurrencyPicker"
                 />
                <div className="form-group">
                    <span>
                        <label>
                            Schedule this operation
                        </label>
                    </span>
                    <span>
                        <input
                            value={TransferForm.get('scheduleOperation')}
                            type="checkbox" 
                            id="checkboxSchedule"
                            name="checkboxSchedule"
                            className="form__checkbox" 
                            onChange={this.props.onChangeScheduler} />
                    </span>
                </div>
                <Scheduler
                    onBlur={this.props.onChangeScheduler}
                    schedulerClassName={TransferForm.get('schedulerHidden')}
                    onChange={this.props.onChangeInitialDate}
                 />
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Submit</button>
                </div>
            </form>
        );
    }
}


module.exports.TransferForm = connect(
    (state) => {
        //console.log(state);
        return { TransferForm: state.TransferForm };
    },
    {
        onChangeOriginAccount: (data) => { 
            return { type: 'CHANGE_ORIGIN_ACCOUNT', data };
        },
        onChangeRecipientAccount: (data) => {
            return { type: 'CHANGE_RECIPIENT_ACCOUNT', data };
        },
        onChangeSelectCurrency: (data) => {
            return { type: 'CHANGE_SELECT_CURRENCY', data };
        },
        onChangeAmount: (data) => {
            return { type: 'CHANGE_AMOUNT', data };
        },
        onChangeScheduler: (data) => {
            return { type: 'CHANGE_SCHEDULER', data };
        },
        onChangeInitialDate: (data) => {
            console.log('enter', data.target.value);
            return { type: 'CHANGE_INITIAL_DATE', data };
        },
        onChangeFinalDate: (data) => {
            return { type: 'CHANGE_FINAL_DATE', data };
        },
        onChangePeriodicity: (data) => {
            return { type: 'CHANGE_PERIODICITY', data };
        }
    }
)(TransferForm);

