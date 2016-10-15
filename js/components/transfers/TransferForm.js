require('./TransferForm.scss');
import React from 'react';
import FormData from 'react-form-data';
import CurrencyInput from 'react-currency-input';
import { CurrencyPicker } from '../common/CurrencyPicker';
import { AccountNumber } from '../common/AccountNumber';
import { Scheduler } from './Scheduler';
import { connect } from 'react-redux';


class TransferForm extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        const {TransferForm} = this.props;
        console.log('trans', TransferForm);
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <AccountNumber
                    htmlForId="accountRemitted"
                    label="Origin Account"
                    onChange={this.props.onChangeOriginAccount}
                    />
                <AccountNumber
                    htmlForId="remittanceAccount"
                    label="Recipient Account"
                    onChange={this.props.onChangeRecipientAccount}
                    />
                <CurrencyPicker />
                <div className="form-group">
                    <span>
                        <label>
                            Schedule this operation!!
                        </label>
                    </span>
                    <span>
                        <input 
                            type="checkbox" 
                            id="checkboxSchedule" 
                            className="form__checkbox" 
                            onChange={this.props.onChangeSchedulerOn} />
                    </span>
                </div>
                <Scheduler
                    onChange={this.props.onChangeScheduler}
                    schedulerClassName={TransferForm.get('schedulerHidden')}
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
        return { TransferForm: state.TransferForm };
    },
    {
        onChangeOriginAccount: (data) => { console.log('enter', data);
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
        onChangeSchedulerOn: (data) => {
            return { type: 'CHANGE_SCHEDULER', data };
        },
        onChangeInitialDate: (data) => {
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

